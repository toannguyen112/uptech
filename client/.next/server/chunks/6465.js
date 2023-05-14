"use strict";
exports.id = 6465;
exports.ids = [6465];
exports.modules = {

/***/ 7656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function SocialMeta({ title ="" , description =""  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        title,
                        " "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width"
                }, description)
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialMeta);


/***/ }),

/***/ 6794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Techs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/TechItem.tsx



function TechItem({ item  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " xl:py-[24px] h-[248px] max-xl:p-[1rem] xl:px-[2rem] overflow-hidden transition-all group-hover:bg-gradient items-center rounded-[12px] flex group-hover:items-start",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-[28px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: item.image,
                            alt: item.name,
                            width: 48,
                            height: 48
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "title-3 text-black group-hover:text-white space-y-[1rem]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    " ",
                                    item.name,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden group-hover:block",
                                children: [
                                    " ",
                                    item.description,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_TechItem = (TechItem);

// EXTERNAL MODULE: ./seeds/home.ts
var home = __webpack_require__(2825);
;// CONCATENATED MODULE: ./components/Techs.tsx




function Techs() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-[2rem] md:py-[72px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center space-y-[12px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-primary font-semibold",
                            children: "C\xf4ng nghệ"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h1 text-gray-900",
                            children: "Tự Tin L\xe0m Chủ C\xf4ng nghệ"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-4 mt-[48px] max-md:gap-[12px]",
                    children: home/* tech.map */.Oc.map((item, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-full md:col-span-2 lg:col-span-1 group",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_TechItem, {
                                item: item
                            })
                        }, index);
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_Techs = (Techs);


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EP": () => (/* binding */ field),
/* harmony export */   "Oc": () => (/* binding */ tech),
/* harmony export */   "UN": () => (/* binding */ logos)
/* harmony export */ });
/* unused harmony export solutions */
const logos = [
    {
        name: "vnpt",
        image: "/images/logos/vnpt.png"
    },
    {
        name: "sabeco",
        image: "/images/logos/sabeco.png"
    },
    {
        name: "baoviet",
        image: "/images/logos/baoviet.png"
    },
    {
        name: "msb",
        image: "/images/logos/msb.png"
    },
    {
        name: "th",
        image: "/images/logos/th.png"
    },
    {
        name: "dat xanh",
        image: "/images/logos/datxanh.png"
    },
    {
        name: "viettel",
        image: "/images/logos/viettel.png"
    },
    {
        name: "vietcombank",
        image: "/images/logos/vietcom.png"
    },
    {
        name: "agribank",
        image: "/images/logos/agribank.png"
    },
    {
        name: "petro",
        image: "/images/logos/petro.png"
    },
    {
        name: "vingroup",
        image: "/images/logos/vingroup.png"
    },
    {
        name: "mobi",
        image: "/images/logos/mobi.png"
    },
    {
        name: "habeco",
        image: "/images/logos/habeco.png"
    },
    {
        name: "vinhome",
        image: "/images/logos/vinhome.png"
    },
    {
        name: "vinhome",
        image: "/images/logos/agribank.png"
    }, 
];
const field = [
    {
        name: "B\xe1n lẻ & Ti\xeau d\xf9ng",
        image: "/svg/home/consumption.svg"
    },
    {
        name: "Bất động sản",
        image: "/svg/home/real_estate.svg"
    },
    {
        name: "Logistics & Vận tải",
        image: "/svg/home/logistic.svg"
    },
    {
        name: "C\xf4ng nghệ Th\xf4ng tin",
        image: "/svg/home/it.svg"
    },
    {
        name: "Chăm s\xf3c Sức khỏe",
        image: "/svg/home/healthy.svg"
    },
    {
        name: "C\xf4ng nghiệp Sản xuất",
        image: "/svg/home/inductry.svg"
    },
    {
        name: "Gi\xe1o dục & Đ\xe0o tạo",
        image: "/svg/home/education.svg"
    },
    {
        name: "T\xe0i ch\xednh & Ng\xe2n h\xe0ng",
        image: "/svg/home/money.svg"
    },
    {
        name: "N\xf4ng - L\xe2m - Nghư nghiệp",
        image: "/svg/home/agriculture.svg"
    }, 
];
const tech = [
    {
        name: "Ph\xe1t triển phần mềm Back- end",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/backend.svg"
    },
    {
        name: "Ph\xe1t triển phần mềm Front- end",
        description: "Angular – ReactJS – Typescript – VueJS – HTML5",
        image: "/svg/home/fe.svg"
    },
    {
        name: "Ph\xe1t triển phần mềm di động",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/android.svg"
    },
    {
        name: "AI",
        description: "AI",
        image: "/svg/home/it.svg"
    },
    {
        name: "Test Automation",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/test.svg"
    },
    {
        name: "Big Data",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/data.svg"
    },
    {
        name: "DevOps",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/devop.svg"
    },
    {
        name: "Kh\xe1c",
        description: ".NET – Java – NodeJS – Python – Golang – PHP",
        image: "/svg/home/orther.svg"
    }, 
];
const solutions = [
    {
        name: "Thiết kế & Ph\xe1t triển <br/> Sản phẩm số",
        image: "/images/home/solution_1.png",
        child: [
            "Website",
            "Ứng dụng di động",
            "Mobile game",
            "Hệ thống nghiệp vụ",
            "Tr\xed tuệ nh\xe2n tạo",
            "Blockchain",
            "VR/AR", 
        ]
    },
    {
        name: "Tư vấn v\xe0 Ph\xe1t triển <br/> Doanh nghiệp số",
        image: "/images/home/solution_2.png",
        child: [
            "Website",
            "Ứng dụng di động",
            "Mobile game",
            "Hệ thống nghiệp vụ",
            "Tr\xed tuệ nh\xe2n tạo",
            "Blockchain",
            "VR/AR", 
        ]
    },
    {
        name: `Giải pháp <br/> Nhân sự Thông minh`,
        image: "/images/home/solution_3.png",
        child: [
            "Website",
            "Ứng dụng di động",
            "Mobile game",
            "Hệ thống nghiệp vụ",
            "Tr\xed tuệ nh\xe2n tạo",
            "Blockchain",
            "VR/AR", 
        ]
    }, 
];


/***/ })

};
;