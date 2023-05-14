"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useFetchListAdmin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9785);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5892);





function useFetchListAdmin(url) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { query , isReady  } = router;
    const params = new URLSearchParams(query).toString();
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        if (isReady) fetchData();
        _event_bus__WEBPACK_IMPORTED_MODULE_3__/* ["default"].$on */ .Z.$on("refreshListData", (data)=>{
            fetchData();
        });
    }, [
        query,
        isReady
    ]);
    const fetchData = async ()=>{
        const locale = router.locale;
        const headers = {
            "Accept-Language": locale
        };
        await _configAxios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`${url}?` + params, {
            headers
        }).then((response)=>{
            setLoading(false);
            response.data && setData(response.data.data);
        }).catch((err)=>{
            setLoading(false);
            setError("An error occurred. Awkward..");
        });
    };
    return {
        data,
        loading,
        error
    };
}


/***/ })

};
;