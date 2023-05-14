exports.id = 2075;
exports.ids = [2075];
exports.modules = {

/***/ 4285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function Box({ children , loading , isClass =true  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { id  } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: isClass ? "card space-y-[40px] w-full" : "",
        children: loading && id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
            height: 100
        }) : children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);


/***/ }),

/***/ 6498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9127);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5892);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function FormPage({ children , loading , data , rules , field , errors , setErrors  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { model  } = field;
    const { id  } = router.query;
    const locale = router.locale;
    const headers = {
        "Accept-Language": locale
    };
    const isCreate = !id;
    const submit = async ()=>setErrors((0,_validator__WEBPACK_IMPORTED_MODULE_10__/* .validateForm */ .G)(data, rules));
    const handleCreate = async ()=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post(`${model}/create`, {
            ...data
        }).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Tạo mới th\xe0nh c\xf4ng !", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER
            });
            router.back();
        });
    };
    const handleUpdate = async ()=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].put */ .Z.put(`${model}/update/${id}`, {
            ...data
        }, {
            headers
        }).then((res)=>{
            _event_bus__WEBPACK_IMPORTED_MODULE_7__/* ["default"].$dispatch */ .Z.$dispatch("refreshData", "");
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Cập nhật th\xe0nh c\xf4ng !", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER
            });
        });
    };
    const handleRemove = async ()=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"](`${model}/delete/${id}`).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("X\xf3a th\xe0nh c\xf4ng !", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,
                onClose: ()=>{
                    router.back();
                }
            });
        });
    };
    const accept = ()=>{
        handleRemove();
    };
    const confirmRemove = ()=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.confirmDialog)({
            message: "Bạn c\xf3 chắc muốn x\xf3a ?",
            header: "X\xf3a",
            icon: "pi pi-info-circle",
            acceptClassName: "p-button-danger",
            accept
        });
    };
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useUpdateEffect)(()=>{
        if (Object.keys(errors).length) return;
        //  CREATE   
        if (!id) {
            handleCreate();
        }
        // EDIT
        if (id) {
            handleUpdate();
        }
    }, [
        errors
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center py-[12px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title-1",
                            children: id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>router.back(),
                                className: " text-prime font-bold hover:text-prime-100 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                                        id: "page.admin.btn_update"
                                    }),
                                    " ",
                                    field.name,
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-black font-bold",
                                        children: "/"
                                    }),
                                    " ",
                                    id
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>router.back(),
                                className: "h5 text-prime font-bold hover:text-prime-100 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                                        id: "page.admin.btn_new"
                                    }),
                                    " ",
                                    field.name
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            label: "Lưu",
                            loading: isCreate ? false : loading,
                            onClick: submit
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-12 gap-[32px]",
                    children: [
                        children,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between w-full",
                                children: [
                                    id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        onClick: ()=>confirmRemove(),
                                        label: "X\xf3a",
                                        severity: "danger"
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        label: "Lưu",
                                        loading: isCreate ? false : loading,
                                        onClick: submit
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6593:
/***/ (() => {



/***/ })

};
;