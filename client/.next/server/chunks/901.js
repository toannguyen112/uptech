"use strict";
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 5892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EventBus = {
    $on (eventType, callback) {
        document.addEventListener(eventType, (ev)=>callback(ev.detail));
    },
    $dispatch (eventType, data) {
        const event = new CustomEvent(eventType, {
            detail: data
        });
        document.dispatchEvent(event);
    },
    $remove (eventType, callback) {
        document.removeEventListener(eventType, callback);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBus);


/***/ }),

/***/ 901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9785);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5892);




function useFetchDetail(model, formData) {
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formData);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { id  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!id) return;
        _event_bus__WEBPACK_IMPORTED_MODULE_3__/* ["default"].$on */ .Z.$on("refreshData", (data)=>{
            fetchData();
        });
        fetchData();
        return ()=>{
            _event_bus__WEBPACK_IMPORTED_MODULE_3__/* ["default"].$remove */ .Z.$remove("refreshData", fetchData());
        };
    }, [
        id
    ]);
    const fetchData = async ()=>{
        const locale = router.locale;
        const headers = {
            "Accept-Language": locale
        };
        setLoading(true);
        await _configAxios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/${model}/show/${id}`, {
            headers
        }).then((res)=>{
            setForm({
                ...form,
                locale,
                ...res.data.data
            });
            setTimeout(()=>{
                setLoading(false);
            }, 500);
        }).catch((error)=>{
            setLoading(false);
            setError(error);
        });
    };
    return {
        loading,
        error,
        form,
        setForm,
        id
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchDetail);


/***/ })

};
;