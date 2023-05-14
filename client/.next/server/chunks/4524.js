"use strict";
exports.id = 4524;
exports.ids = [4524];
exports.modules = {

/***/ 6370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7483);
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_checkbox__WEBPACK_IMPORTED_MODULE_2__);



function Checkbox({ fieldId , field , emit , modelValue , disabled  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
            onChange: (e)=>emit(e.checked),
            checked: modelValue
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ 5669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3515);
/* harmony import */ var _Tnymce_CustomEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4946);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1859);
/* harmony import */ var _SelectSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1509);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6370);
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8513);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6125);
/* harmony import */ var _SectionCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputFile__WEBPACK_IMPORTED_MODULE_2__, _SectionCustom__WEBPACK_IMPORTED_MODULE_9__]);
([_InputFile__WEBPACK_IMPORTED_MODULE_2__, _SectionCustom__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Field({ field , updateModelValue , modelValue  }) {
    const fieldId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: field.placeholder,
                className: "font-bold text-gray-700 text-[14px] mb-[4px] block",
                children: [
                    field.title,
                    field.required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-red-500",
                        children: "*"
                    })
                ]
            }),
            (()=>{
                if (field.type === undefined || field.type === "text" || field.type === "password" || field.type === "number" || field.type === "email" || field.type === "datetime-local" || field.type === "date" || field.type === "time") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: fieldId,
                        value: modelValue,
                        onChange: (e)=>updateModelValue(e.target.value),
                        type: field.type,
                        className: field.className ?? "input",
                        placeholder: field.placeholder,
                        disabled: field.disable
                    });
                }
                if (field.type === "textarea") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: fieldId,
                        value: modelValue,
                        rows: field.rows ?? 5,
                        onChange: (e)=>updateModelValue(e.target.value),
                        className: field.className ?? "input",
                        placeholder: field.placeholder,
                        disabled: field.disable
                    });
                }
                if (field.type === "select_source") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SelectSource__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>updateModelValue(value),
                        modelValue: modelValue,
                        field: field
                    });
                }
                if (field.type === "checkbox") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            fieldId: fieldId,
                            field: field,
                            emit: (value)=>updateModelValue(value),
                            modelValue: modelValue
                        })
                    });
                }
                if (field.type === "radio") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Radio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            fieldId: fieldId,
                            field: field,
                            emit: (value)=>updateModelValue(value),
                            modelValue: modelValue
                        })
                    });
                }
                if (field.type === "select") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>updateModelValue(value),
                        modelValue: modelValue,
                        field: field
                    });
                }
                if (field.type === "rich_text") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tnymce_CustomEditor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        emit: (value)=>updateModelValue(value),
                        modelValue: modelValue
                    });
                }
                if (field.type === "input_file") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputFile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        field: field,
                        modelValue: modelValue,
                        emit: (file)=>updateModelValue(file)
                    });
                }
                if (field.type === "section_custom") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionCustom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        updateModelValue: (value)=>updateModelValue(value),
                        modelValue: modelValue,
                        field: field
                    });
                }
                if (field.type === "list") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_List__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            updateModelValue: (value)=>updateModelValue(value),
                            modelValue: modelValue,
                            field: field
                        })
                    });
                }
            })()
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5669);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Field__WEBPACK_IMPORTED_MODULE_2__]);
_Field__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function FieldSet({ field , updateModelValue , modelValue  }) {
    const error = ()=>{
        return field.fieldName ? field.errors[field.fieldName] : "";
    };
    const { 0: validate , 1: setValidate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!field.validate ? field.validate : true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValidate((0,_validator__WEBPACK_IMPORTED_MODULE_3__/* .validateField */ .O)(modelValue, field.rules[field.fieldName]));
    }, [
        modelValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkValidate();
    }, [
        field.errors
    ]);
    const checkValidate = ()=>{
        setValidate(!field.errors.hasOwnProperty(field.fieldName));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Field__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                field: field,
                updateModelValue: updateModelValue,
                modelValue: modelValue
            }),
            validate != true && validate != undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                className: "text-red-400 absolute inset-x-0 bottom-[-30px] font-bold",
                children: Array.isArray(error) ? error[0] : `${field.title} không hợp lệ`
            }) : ""
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldSet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputFile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MediaManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MediaManager__WEBPACK_IMPORTED_MODULE_3__]);
_MediaManager__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function InputFile({ field , emit , modelValue  }) {
    const { 0: isShowMedia , 1: setIsShowMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(modelValue);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(()=>{
        emit(field.multiple ? files : file);
    }, [
        file,
        files
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            files.length && field.multiple ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center flex-wrap",
                        children: files.map((file, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " group transition-all ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "aspect-w-1 relative aspect-h-1 w-[100px] h-[100px] mb-[10px] mr-[10px] bg-gray-200",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: file.path,
                                            alt: file.name,
                                            className: "w-full h-full object-cover"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setFiles(files.filter((item)=>item.id != file.id)),
                                            className: "absolute hidden group-hover:block bottom-1 right-1 border border-gray-900 bg-white text-gray-900 rounded-[4px] px-[10px] py-[4px] text-[10px]",
                                            children: "X\xf3a"
                                        })
                                    ]
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setIsShowMedia(true),
                        className: "border-dashed border-2 border-gray-200 w-[100px] h-[100px] flex items-center justify-center mb-[10px] mr-[10px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/admin/sidebar/plus.svg",
                            className: "text-gray-200"
                        })
                    })
                ]
            }) : "",
            file && !field.multiple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " group transition-all ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative aspect-w-1 aspect-h-1 mb-[10px] mr-[10px] bg-gray-200 h-[250px] w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: file.path,
                                alt: file.name,
                                className: "object-contain w-full h-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setFile(null),
                                className: "absolute hidden group-hover:block bottom-1 right-1 border border-gray-900 bg-white text-gray-900 rounded-[4px] px-[10px] py-[4px] text-[10px]",
                                children: "X\xf3a"
                            })
                        ]
                    })
                })
            }) : "",
            !files.length && field.multiple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "group",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setIsShowMedia(true),
                    className: "border-dashed border-2 border-gray-200 w-[100px] h-[100px] flex items-center justify-center mb-[10px] mr-[10px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/svg/admin/sidebar/plus.svg",
                        className: "text-gray-200"
                    })
                })
            }) : "",
            !file && !field.multiple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-gray-100 group p-[20px] opacity-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " border-dashed border-2 border-gray-700 w-full min-h-[150px] rounded-[4px] text-center p-[10px] flex items-center justify-center transition-all cursor-pointer relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute flex items-center justify-center inset-x-0 inset-y-0 text-center uppercase",
                        onClick: ()=>setIsShowMedia(true),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/image_folder.svg",
                            alt: ""
                        })
                    })
                })
            }) : "",
            isShowMedia && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute p-[20px] inset-x-0 inset-y-0 bg-white z-[99] h-full w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaManager__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    fileSelect: file,
                    filesSelect: files,
                    multiple: field.multiple,
                    onClose: (arg)=>setIsShowMedia(arg),
                    onSelectFile: (file)=>{
                        if (field.multiple) {
                            setFiles(file);
                        }
                        if (!field.multiple) {
                            setFile(file);
                        }
                    }
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2948);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_2__);



function Radio({ fieldId , field , emit , modelValue , disabled  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-wrap gap-[2rem]",
            children: field.options.map((option, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_2__.RadioButton, {
                            inputId: option.name,
                            value: option.value,
                            onChange: (e)=>emit(e.value),
                            checked: option.value === modelValue
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: option.name,
                            className: "ml-2",
                            children: option.name
                        })
                    ]
                }, index);
            })
        })
    });
};


/***/ }),

/***/ 1859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9325);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__);



function Select({ field , modelValue , updateModelValue  }) {
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(modelValue ?? []);
    const panelFooterTemplate = ()=>{
        const length = selected ? selected.length : 0;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-2 px-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: length
                }),
                " item",
                length > 1 ? "s" : "",
                " selected."
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, {
            value: selected,
            options: field.options,
            onChange: (e)=>setSelected(e.value),
            optionValue: "id",
            optionLabel: "name",
            placeholder: "Select",
            panelFooterTemplate: panelFooterTemplate,
            className: "w-full md:w-20rem"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ 1509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9325);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_6__);







function SelectSource({ field , modelValue , updateModelValue  }) {
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(modelValue ?? []);
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const transformOptions = (option)=>{
        if (!option) return [];
        return option.map((option)=>{
            return {
                id: option.id,
                name: option.name
            };
        });
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const locale = router.locale;
    const headers = {
        "Accept-Language": locale
    };
    const fetchData = async ()=>{
        if (field && field.source) {
            return _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`${field.source.model}?` + field.source.query, {
                headers
            }).then((res)=>{
                const { data  } = res.data.data;
                const options = transformOptions(data);
                setOptions(options);
            });
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        fetchData();
    }, []);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useUpdateEffect)(()=>{
        updateModelValue(selected);
    }, [
        selected
    ]);
    const panelFooterTemplate = ()=>{
        const length = selected ? selected.length : 0;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-2 px-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: length
                }),
                " item",
                length > 1 ? "s" : "",
                " selected."
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-content-center",
        children: [
            field.source?.multiple && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_multiselect__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, {
                value: selected,
                options: options,
                onChange: (e)=>{
                    setSelected(e.value);
                },
                optionLabel: "name",
                optionValue: "id",
                placeholder: "Select",
                panelFooterTemplate: panelFooterTemplate,
                className: "w-full"
            }),
            !field.source?.multiple && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {
                value: modelValue,
                onChange: (e)=>updateModelValue(e.value),
                options: options,
                optionValue: "id",
                optionLabel: "name",
                placeholder: "Thể loại",
                className: "w-full"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectSource);


/***/ }),

/***/ 6125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_3__);




function List({ field , modelValue , updateModelValue  }) {
    const filterDataEmpty = ()=>{
        return modelValue.filter((item)=>item.title);
    };
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(modelValue ? filterDataEmpty() : []);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(()=>{
        updateModelValue(data);
    }, [
        data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-[12px]",
            children: [
                data.map((item, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-[12px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                defaultValue: item.title,
                                onChange: (e)=>{
                                    data[index]["title"] = e.target.value;
                                    setData(data);
                                },
                                type: "text",
                                className: "w-full input"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                onClick: ()=>{
                                    setData(data.filter((x)=>x.title !== item.title));
                                },
                                size: "small",
                                label: "X\xf3a",
                                severity: "danger",
                                icon: "pi pi-trash"
                            })
                        ]
                    }, index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    onClick: ()=>{
                        setData([
                            ...data,
                            {
                                title: ""
                            }
                        ]);
                    },
                    className: "mt-[12px]",
                    size: "small",
                    label: "Th\xeam mới",
                    icon: "pi pi-plus"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ 5803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9083);
/* harmony import */ var primereact_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MediaManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MediaManager__WEBPACK_IMPORTED_MODULE_5__]);
_MediaManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SectionCustom({ field , modelValue , updateModelValue  }) {
    const initValue = ()=>{
        return modelValue ? modelValue : {
            header: "",
            text_small: "",
            sub_text: ""
        };
    };
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [indexImage, setIndexImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [isShowMedia, setIsShowMedia] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setData(initValue);
    }, [
        modelValue
    ]);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(()=>{
        updateModelValue(data);
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            isShowMedia && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute p-[20px] inset-x-0 inset-y-0 bg-white z-[99] h-full w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    fileSelect: data.file,
                    multiple: field.multiple,
                    onClose: (arg)=>setIsShowMedia(arg),
                    onSelectFile: (file)=>{
                        data["sections"][indexImage]["file"] = file.path;
                        setData(data);
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                activeIndex: 0,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionTab, {
                    header: "Nội dung",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[12px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Text nhỏ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultValue: data.text_small,
                                        onChange: (e)=>{
                                            setData({
                                                ...data,
                                                text_small: e.target.value
                                            });
                                        },
                                        type: "text",
                                        className: "input"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-[12px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Header"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultValue: data.header,
                                        onChange: (e)=>{
                                            setData({
                                                ...data,
                                                header: e.target.value
                                            });
                                        },
                                        type: "text",
                                        className: "input"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-[12px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Sub Text"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultValue: data.sub_text,
                                        onChange: (e)=>{
                                            setData({
                                                ...data,
                                                sub_text: e.target.value
                                            });
                                        },
                                        type: "text",
                                        className: "input"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    data && data.sections ? data.sections.map((item, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "font-bold text-gray-700 text-[14px] my-[12px] block",
                                                            children: [
                                                                "Nội dung ",
                                                                index + 1
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "space-y-[12px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    children: "Ti\xeau đề"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        defaultValue: item.title,
                                                                        onChange: (e)=>{
                                                                            data["sections"][index]["title"] = e.target.value;
                                                                            setData(data);
                                                                        },
                                                                        type: "text",
                                                                        className: "input"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: "Image"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-start justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "aspect-w-1 aspect-h-1 max-w-[200px] ",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: item.file ?? "",
                                                                                        alt: "",
                                                                                        className: "w-full h-full object-containt"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                                    onClick: ()=>{
                                                                                        setIndexImage(index);
                                                                                        setIsShowMedia(true);
                                                                                    },
                                                                                    icon: "pi pi-cloud-upload",
                                                                                    className: "mt-[12px]",
                                                                                    size: "small",
                                                                                    label: "Chọn h\xecnh ảnh",
                                                                                    severity: "help"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            children: "Gi\xe1 trị"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                            rows: 4,
                                                                            defaultValue: item.value,
                                                                            onChange: (e)=>{
                                                                                data["sections"][index]["value"] = e.target.value;
                                                                                setData(data);
                                                                            },
                                                                            className: "input"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                        onClick: ()=>{
                                                            setData({
                                                                ...data,
                                                                sections: data.sections.filter((item, i, arr)=>i != index)
                                                            });
                                                        },
                                                        className: "mt-[12px]",
                                                        size: "small",
                                                        label: "X\xf3a",
                                                        severity: "danger",
                                                        icon: "pi pi-trash"
                                                    })
                                                })
                                            ]
                                        }, index);
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        onClick: ()=>{
                                            if (!data.sections) {
                                                data.sections = [];
                                            }
                                            setData({
                                                ...data,
                                                sections: [
                                                    ...data.sections,
                                                    {
                                                        title: "",
                                                        file: "",
                                                        value: ""
                                                    }
                                                ]
                                            });
                                        },
                                        className: "mt-[12px]",
                                        size: "small",
                                        label: "Tạo Mới Section",
                                        icon: "pi pi-plus"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionCustom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6451);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_3__);




const CustomEditor = ({ modelValue , emit  })=>{
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(modelValue ?? "");
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(()=>{
        emit(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__.Editor, {
            apiKey: "kk8b71st8g7se8kra0do3fzsckuxv92i3y7p7onfzof65jwh",
            onInit: (evt, editor)=>editorRef.current = editor,
            initialValue: modelValue,
            onChange: (e)=>setValue(e.target.getContent()),
            init: {
                height: 600,
                menubar: true,
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "file image media",
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                    "image"
                ],
                toolbar: "undo redo | formatselect" + "bold italic backcolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | " + "removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }"
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomEditor);


/***/ }),

/***/ 9127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ validateForm),
/* harmony export */   "O": () => (/* binding */ validateField)
/* harmony export */ });

function validateForm(formFields, rules) {
    let errors = {};
    for (const field of Object.entries(formFields)){
        if (!validateField(field[1], rules[field[0]])) {
            errors[field[0]] = "";
        }
    }
    return errors;
}
function validateField(value, rules) {
    if (rules === undefined) return true;
    let fieldIsValid = true;
    for (const rule of rules.split("|")){
        const valid = validate(value, rule);
        if (!valid) {
            fieldIsValid = false;
            break;
        }
    }
    return fieldIsValid;
}
function validate(value, rule) {
    const type = rule.split(":")[0];
    const condition = rule.split(":")[1] ?? null;
    switch(type){
        case "array":
            return Array.isArray(value);
        case "email":
            const regEx = /^[\w.!?#$%&'=~|{}`+*^][\w\-.!?#$%&'=~|{}`+*^]*@((xn--)?[\w]+([-][\w]+)*\.)+[a-z]{2,}$/i;
            return regEx.test(value);
        case "date":
            const regexDate = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
            const dateOk = regexDate.test(value);
            if (dateOk) return true;
            return false;
        case "string":
            return typeof value === "string";
        case "required":
            return !!value;
        case "phone":
            const regex = /^(84|19|0[2|3|5|7|8|9])+([0-9]{6,10})\b/g;
            return regex.test(value);
        case "in":
            const conditions = condition.split(",");
            if (Array.isArray(value)) {
                return value.every((element)=>conditions.includes(element.toString()));
            } else {
                return value && conditions.includes(value.toString());
            }
        case "integer":
            return !isNaN(value);
        case "min":
            return value.length >= parseInt(condition);
        case "max":
            return value.length <= parseInt(condition);
        default:
            return true;
    }
}


/***/ })

};
;