"use strict";
exports.id = 7138;
exports.ids = [7138];
exports.modules = {

/***/ 7138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Authenticated)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(5120);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./store/hooks.ts
var hooks = __webpack_require__(1361);
// EXTERNAL MODULE: ./store/auth/authAction.ts
var authAction = __webpack_require__(8250);
;// CONCATENATED MODULE: ./components/Sidebar.tsx









function Sidebar() {
    const { locale , asPath , pathname  } = (0,router_.useRouter)();
    const { info , token  } = (0,hooks/* useAppSelector */.C)((state)=>state.auth);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const checkPermission = (permission)=>{
        return info?.permissions?.includes(permission);
    };
    (0,external_react_.useEffect)(()=>{
        if (token) {
            dispatch((0,authAction/* adminProfile */.Pk)({}));
        }
    }, [
        dispatch,
        token
    ]);
    const currentRoute = pathname;
    const activeClass = (url)=>{
        return currentRoute.includes(url) ? "nav-link active" : "nav-link";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "sidebar w-[var(--sidebar-width)] ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center text-center px-5 pt-5 text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center text-[#212121] text-center px-5 pt-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center space-x-[12px] text-[12px] uppercase",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: locale === "vi" ? "text-prime text-[16px]" : "text-[16px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `${asPath}`,
                                children: "Vi"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: locale === "en" ? "text-prime text-[16px]" : "text-[16px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `/en/${asPath}`,
                                children: "En"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: locale === "ja" ? "text-prime text-[16px]" : "text-[16px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `/ja/${asPath}`,
                                children: "JA"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-6 space-y-2",
                        children: [
                            checkPermission("dasboard") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/dashboard",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/dashboard"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/dashboard.svg",
                                            width: 20,
                                            height: 20,
                                            alt: "",
                                            className: "text-white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.das"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-header ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                        id: "page.sidebar.content"
                                    })
                                })
                            }),
                            checkPermission("banners") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/banners",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/banners"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.banner"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("services") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/services/form",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/services"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.services"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("branchs") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/branchs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/branchs"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.branchs"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("projects") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/projects",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/projects"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                    id: "page.sidebar.project"
                                                }),
                                                " "
                                            ]
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("posts") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/posts",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/posts"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/post.svg",
                                            width: 20,
                                            height: 20,
                                            alt: "",
                                            className: "text-white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.post"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("categories") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/categories",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/categories"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/post-category.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.categories"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("jobs") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/jobs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/jobs"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/job.svg",
                                            width: 20,
                                            height: 20,
                                            alt: "",
                                            className: "text-white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.job"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("recruitments") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/recruitments",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/recruitments"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.recruitments"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("contacts") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/contacts",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/contacts"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.contacts"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("ceos") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/ceos",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/ceos"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/post.svg",
                                            width: 20,
                                            height: 20,
                                            alt: "",
                                            className: "text-white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.ceo"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-header ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                        id: "page.sidebar.setting"
                                    })
                                })
                            }),
                            checkPermission("files") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/medias",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/medias"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/media.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.folder"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("roles") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/roles",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/roles"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/rule.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.role"
                                            })
                                        })
                                    ]
                                })
                            }) : "",
                            checkPermission("accounts") ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/accounts",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: activeClass("/admin/accounts"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/svg/admin/sidebar/product.svg",
                                            width: 20,
                                            height: 20,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "page.sidebar.account"
                                            })
                                        })
                                    ]
                                })
                            }) : ""
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-6 space-y-4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-auto inset-x-0 border-t border-gray-200 absolute bottom-0",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nav-link",
                            onClick: ()=>{
                                dispatch((0,authAction/* adminLogout */.rE)({})).then((res)=>{
                                    router_default().push("/admin/login");
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/svg/admin/sidebar/logout.svg",
                                    width: 20,
                                    height: 20,
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                        id: "page.sidebar.logout"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Sidebar = (Sidebar);

// EXTERNAL MODULE: external "primereact/confirmdialog"
var confirmdialog_ = __webpack_require__(4179);
;// CONCATENATED MODULE: ./Layout/Authenticated.tsx




function Authenticated({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "ml-[var(--sidebar-width)] md:flex-1 bg-gray-50 text-black ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(confirmdialog_.ConfirmDialog, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "py-8 px-4 min-h-screen",
                            children: children
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 1361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;