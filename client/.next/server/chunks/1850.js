"use strict";
exports.id = 1850;
exports.ids = [1850];
exports.modules = {

/***/ 1850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4524);
/* harmony import */ var primereact_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9083);
/* harmony import */ var primereact_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_accordion__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__]);
_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Seo({ loading =false , form , onSetForm  }) {
    const { 0: formSeo , 1: setFormSeo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "custom_slug": form.custom_slug,
        "meta_title": form.meta_title,
        "meta_description": form.meta_description,
        "canonica_link": form.canonica_link,
        "meta_robots": form.meta_robots,
        "meta_image": form.meta_image
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        onSetForm(formSeo);
    }, [
        formSeo
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
        activeIndex: 0,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionTab, {
            header: "SEO",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-[32px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                custom_slug: value
                            }),
                        modelValue: formSeo.custom_slug,
                        field: {
                            title: "Custom slug",
                            fieldName: "custom_slug",
                            rules: {},
                            errors: {}
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                meta_title: value
                            }),
                        modelValue: formSeo.meta_title,
                        field: {
                            title: "Meta title",
                            fieldName: "meta_title",
                            rules: {},
                            errors: {}
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                meta_description: value
                            }),
                        modelValue: formSeo.meta_description,
                        field: {
                            title: "Meta description",
                            type: "textarea",
                            fieldName: "meta_description",
                            rules: {},
                            errors: {}
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                meta_robots: value
                            }),
                        modelValue: formSeo.meta_robots,
                        field: {
                            title: "Meta robots",
                            fieldName: "meta_robots",
                            rules: {},
                            errors: {}
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                canonica_link: value
                            }),
                        modelValue: formSeo.canonica_link,
                        field: {
                            title: "Canonical Link",
                            fieldName: "canonica_link",
                            rules: {},
                            errors: {}
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fields_FieldSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>setFormSeo({
                                ...formSeo,
                                meta_image: value
                            }),
                        modelValue: formSeo.meta_image,
                        field: {
                            title: "Meta image",
                            fieldName: "meta_image",
                            rules: {},
                            errors: {}
                        }
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;