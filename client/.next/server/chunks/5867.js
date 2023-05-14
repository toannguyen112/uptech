"use strict";
exports.id = 5867;
exports.ids = [5867];
exports.modules = {

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5767);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_2__);



function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full flex justify-center items-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_2__.ProgressSpinner, {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Table)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./configAxios.js
var configAxios = __webpack_require__(9785);
// EXTERNAL MODULE: ./event-bus.ts
var event_bus = __webpack_require__(5892);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "usehooks-ts"
var external_usehooks_ts_ = __webpack_require__(2140);
// EXTERNAL MODULE: external "primereact/checkbox"
var checkbox_ = __webpack_require__(7483);
;// CONCATENATED MODULE: ./components/Fields/Thead/TheadFilter.tsx





function TheadFilter({ col , arrFilters , onCheckHandler  }) {
    const ref = (0,external_react_.useRef)();
    const { 0: isShow , 1: setIsShow  } = (0,external_react_.useState)(false);
    const isChecked = (x)=>arrFilters.some((item)=>item.value === x.value);
    (0,external_usehooks_ts_.useOnClickOutside)(ref, ()=>setIsShow((pre)=>!pre));
    return col.filters ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-[40px] ",
                onClick: (e)=>{
                    setIsShow((pre)=>!pre);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/svg/icon-filter.svg",
                    alt: "icon-filter",
                    className: "cursor-pointer ",
                    width: 14,
                    height: 14
                })
            }),
            isShow && /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: ref,
                    className: "absolute inset-x-0 space-y-[10px] p-[10px] shadow-select min-w-[200px] border rounded-[8px] bg-white",
                    children: col.filters.map((x, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center space-x-[12px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(checkbox_.Checkbox, {
                                    inputId: x["name"],
                                    name: "category",
                                    value: x["value"],
                                    onChange: (e)=>onCheckHandler({
                                            name: x.name,
                                            value: x.value,
                                            field: col.field
                                        }),
                                    checked: isChecked(x)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: x["name"],
                                    className: " text-gray-900 cursor-pointer",
                                    children: x["name"]
                                })
                            ]
                        }, index);
                    })
                })
            })
        ]
    }) : null;
}
/* harmony default export */ const Thead_TheadFilter = (TheadFilter);

;// CONCATENATED MODULE: ./components/Option.tsx



function Option({ isLabel =false , option ={} , selectedOptions =[] , onOptionChange  }) {
    const isChecked = selectedOptions.some((item)=>item.id === option.id);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-[1rem]",
        children: [
            isLabel && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "text-gray-100 font-semibold",
                htmlFor: option.id,
                children: option.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(checkbox_.Checkbox, {
                inputId: option.id,
                name: option.name,
                value: option.id,
                onChange: ()=>onOptionChange(option),
                checked: isChecked
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
        ]
    });
}
/* harmony default export */ const components_Option = (Option);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Admin/Search.tsx



function Search() {
    const router = (0,router_.useRouter)();
    const handleOnChange = (e)=>{
        const searchValue = e.target.value;
        if (searchValue) {
            router.query.search = searchValue;
        } else {
            delete router.query["search"];
        }
        router_default().push({
            pathname: router.pathname,
            query: router.query
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " flex items-center space-x-[20px] border border-gray-300 rounded-[8px] pl-[10px] overflow-hidden min-w-[400px] bg-white text-gray-900",
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                onChange: (e)=>handleOnChange(e),
                type: "text",
                placeholder: "T\xecm kiếm",
                className: "border-none py-[8px] w-full focus:ring-0 focus:outline-none placeholder-gray-900"
            })
        })
    });
}
/* harmony default export */ const Admin_Search = (Search);

// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__(1088);
// EXTERNAL MODULE: external "primereact/image"
var image_ = __webpack_require__(9855);
// EXTERNAL MODULE: ./components/Loading.tsx
var Loading = __webpack_require__(4297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./hook/usePagiantion.tsx


const DOTS = "...";
const range = (start, end)=>{
    let length = end - start + 1;
    return Array.from({
        length
    }, (_, idx)=>idx + start);
};
const usePagination = ({ totalCount , pageSize , siblingCount =1 , currentPage  })=>{
    const paginationRange = (0,external_react_.useMemo)(()=>{
        const totalPageCount = Math.ceil(totalCount / pageSize);
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;
        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */ if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        /*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */ const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [
                ...leftRange,
                DOTS,
                totalPageCount
            ];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [
                firstPageIndex,
                DOTS,
                ...rightRange
            ];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                firstPageIndex,
                DOTS,
                ...middleRange,
                DOTS,
                lastPageIndex
            ];
        }
    }, [
        totalCount,
        pageSize,
        siblingCount,
        currentPage
    ]);
    return paginationRange;
};

;// CONCATENATED MODULE: ./components/PaginationV2.tsx




const PaginationV2 = (props)=>{
    const { onPageChange , onPageSizeChange , totalCount , siblingCount =1 , currentPage , pageSize =5 , className  } = props;
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    }) ?? [];
    if (currentPage === 0 || paginationRange.length < 1) {
        return null;
    }
    const onNext = ()=>{
        onPageChange(currentPage + 1);
    };
    const onPrevious = ()=>{
        onPageChange(currentPage - 1);
    };
    const _handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            onPageChange(Number(e.target.value));
        }
    };
    const lastPage = paginationRange[paginationRange.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pagination bg-white w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-[8px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text text-[#4B5563]",
                        children: "Danh s\xe1ch hiển thị"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "select select-pagination",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                defaultValue: pageSize,
                                className: "max-h-[2.5rem] text-[#4B5563] bg-[#f6f6fa] rounded-[8px] text-[14px] px-[8px] py-[10px] w-full"
                            }, pageSize),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon dropdown"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "select-options",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "select-options-pagination-item",
                                        onClick: ()=>onPageSizeChange(10),
                                        children: "10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "select-options-pagination-item",
                                        onClick: ()=>onPageSizeChange(20),
                                        children: "20"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "select-options-pagination-item",
                                        onClick: ()=>onPageSizeChange(30),
                                        children: "30"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: external_classnames_default()("pagination-container", {
                    [className]: className
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: external_classnames_default()("pagination-item", {
                            disabled: currentPage === 1
                        }),
                        onClick: onPrevious,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow left"
                        })
                    }),
                    paginationRange.map((pageNumber, index)=>{
                        if (pageNumber === DOTS) {
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "pagination-item dots",
                                children: "…"
                            }, index);
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: external_classnames_default()("pagination-item", {
                                selected: pageNumber === currentPage
                            }),
                            onClick: ()=>onPageChange(pageNumber),
                            children: pageNumber
                        }, index);
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: external_classnames_default()("pagination-item", {
                            disabled: currentPage === lastPage
                        }),
                        onClick: onNext,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow right"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center body space-x-[8px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "number",
                        onKeyDown: (e)=>_handleKeyDown(e),
                        defaultValue: currentPage,
                        className: "text-center bg-gray-130 rounded-[8px] text-prime w-[2.5rem] p-[8px] border border-gray-300 focus:outline-none"
                    }, currentPage),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "body text-[#4B5563]",
                        children: [
                            "trong số ",
                            Math.ceil(totalCount / pageSize),
                            " "
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PaginationV2 = (PaginationV2);

;// CONCATENATED MODULE: ./components/Table.tsx















function Table({ loading , columns , dataSource , model , isShowCreateBtn =true  }) {
    const router = (0,router_.useRouter)();
    const { query , isReady  } = router;
    const { page , page_size , search  } = query;
    const setDefaultValue = ()=>{
        const initArray = [];
        for (const [key, value] of Object.entries(router.query)){
            const spliceValue = value?.split(",");
            spliceValue.forEach((element)=>{
                columns.find((item)=>{
                    if (item && item.filters) {
                        const colFound = item.filters.find((x)=>x.value === element);
                        if (colFound) {
                            const obj = {
                                name: colFound.name,
                                value: colFound.value,
                                field: key
                            };
                            initArray.push(obj);
                        }
                    }
                });
            });
        }
        return initArray;
    };
    const { 0: selectedOptions , 1: setSelectedOptions  } = (0,external_react_.useState)([]);
    const { 0: arrFilters , 1: setArrFilters  } = (0,external_react_.useState)([]);
    const { 0: checkedAll , 1: setCheckedAll  } = (0,external_react_.useState)(false);
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: pageSize , 1: setPageSize  } = (0,external_react_.useState)(10);
    external_react_default().useEffect(()=>{
        if (isReady) {
            setArrFilters(setDefaultValue());
            setCurrentPage(page ? Number(page) : 1);
            setPageSize(page_size ? Number(page_size) : 10);
        }
    }, [
        isReady
    ]);
    external_react_default().useEffect(()=>{
        if (dataSource && dataSource.data) {
            setCurrentPage(1);
        }
    }, [
        search,
        arrFilters,
        pageSize
    ]);
    (0,external_usehooks_ts_.useUpdateEffect)(()=>{
        const groupByField = arrFilters.reduce((group, item)=>{
            const { field , value  } = item;
            const array = group[field] ? group[field].split(",") : [];
            group[field] = group[field] ?? "";
            array.push(value);
            group[field] = array.join();
            return group;
        }, {});
        if (Object.values(router.query)) {
            router_default().push({
                pathname: router.pathname,
                query: {
                    ...groupByField,
                    page: currentPage,
                    page_size: pageSize
                }
            });
        }
    }, [
        isReady,
        arrFilters,
        currentPage,
        pageSize
    ]);
    const handleRemoveItem = async (item)=>{
        confirm("Bạn c\xf3 chắc muốn x\xf3a");
        await configAxios/* default.delete */.Z["delete"](`${model.route}/delete/${item.id}`).then((result)=>{
            event_bus/* default.$dispatch */.Z.$dispatch("refreshListData", "");
        }).catch((err)=>{
            console.log(err);
        });
    };
    const renderStatus = (field, col)=>{
        switch(field[col]){
            case "active":
                return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-[#00b69b] p-[6px] rounded-[4px] bg-[#EAF7F5]",
                    children: "Hoạt động"
                });
            case "inactive":
                return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-[#f576ad] p-[6px] rounded-[4px] bg-[#feebf3]",
                    children: "Ẩn"
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: field[col]
                });
        }
    };
    const checkHandler = (x)=>{
        const newArr = arrFilters.some((item)=>item.name === x.name) ? arrFilters.filter((cur)=>cur.name !== x.name) : [
            ...arrFilters,
            x
        ];
        setArrFilters(newArr);
    };
    const onOptionsChange = (x)=>{
        const newArr = selectedOptions.some((item)=>item.id === x.id) ? selectedOptions.filter((cur)=>cur.id !== x.id) : [
            ...selectedOptions,
            x
        ];
        setSelectedOptions(newArr);
    };
    const onSelectAll = (e)=>{
        if (e.checked) {
            setCheckedAll(true);
            setSelectedOptions(dataSource.data);
        } else {
            setCheckedAll(false);
            setSelectedOptions([]);
        }
    };
    const removeAllSelected = async ()=>{
        confirm("Bạn c\xf3 chắc muốn x\xf3a");
        const ids = selectedOptions.map((item)=>item.id);
        await configAxios/* default.post */.Z.post(`${model.route}/deleteMultipleIds`, {
            ids
        }).then((res)=>{
            if (res) {
                setCheckedAll(false);
                event_bus/* default.$dispatch */.Z.$dispatch("refreshListData", "");
            }
        });
    };
    const isShowCreateButton = ()=>{
        if (isShowCreateBtn) {
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/admin/${model && model.route ? model.route : ""}/form`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                    size: "small",
                    label: "Tạo Mới",
                    icon: "pi pi-plus"
                })
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center space-x-[12px]",
                        children: [
                            isShowCreateButton(),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title-1 font-bold",
                                children: model && model.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Admin_Search, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "overflow-x-auto bg-white rounded shadow",
                children: [
                    selectedOptions.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-[4px] px-[8px] flex items-center space-x-[12px] bg-prime text-white text-[12px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    " ",
                                    selectedOptions.length,
                                    " mục được chọn"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>removeAllSelected(),
                                className: "font-semibold cursor-pointer",
                                children: "X\xf3a tất cả"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "relative flex items-center space-x-[8px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(checkbox_.Checkbox, {
                                                    checked: checkedAll,
                                                    onChange: (e)=>onSelectAll(e)
                                                })
                                            })
                                        }),
                                        columns.map((col, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                id: col.field,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "space-x-[4px] inline-flex items-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: col.label
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Thead_TheadFilter, {
                                                            arrFilters: arrFilters,
                                                            onCheckHandler: (value)=>checkHandler(value),
                                                            col: col
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "py-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-center",
                                                children: "..."
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: !dataSource ? /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 100,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {})
                                    })
                                }) : dataSource && dataSource.data.map((datum, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Option, {
                                                    isLabel: false,
                                                    option: datum,
                                                    selectedOptions: selectedOptions,
                                                    onOptionChange: onOptionsChange
                                                })
                                            }),
                                            columns.map((col, index)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: col.field === "thumbnail" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "aspect-w-2 aspect-h-1 min-h-[60px] flex items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(image_.Image, {
                                                            zoomSrc: datum[col.field] ? datum[col.field].path : "",
                                                            src: datum[col.field] ? datum[col.field].path : "",
                                                            alt: "Image",
                                                            width: "100px",
                                                            height: "100px",
                                                            preview: true
                                                        })
                                                    }) : renderStatus(datum, [
                                                        col.field
                                                    ])
                                                }, index);
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center justify-center space-x-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "cursor-pointer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: {
                                                                    pathname: `/admin/${model && model.route ? model.route : ""}/form`,
                                                                    query: {
                                                                        id: datum["id"]
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "pi pi-file-edit"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "cursor-pointer",
                                                            onClick: ()=>handleRemoveItem(datum),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "pi pi-trash"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-[8px] w-full bg-white mt-[10px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full",
                    children: dataSource && /*#__PURE__*/ jsx_runtime_.jsx(components_PaginationV2, {
                        className: "pagination-bar",
                        currentPage: currentPage ?? 1,
                        totalCount: dataSource.totalItems,
                        pageSize: pageSize ?? 10,
                        onPageChange: (page)=>setCurrentPage(page),
                        onPageSizeChange: (pageSize)=>setPageSize(pageSize)
                    })
                })
            })
        ]
    });
};


/***/ }),

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


/***/ })

};
;