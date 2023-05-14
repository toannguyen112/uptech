"use strict";
exports.id = 1461;
exports.ids = [1461];
exports.modules = {

/***/ 2188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function MediaItem({ onSelectFile , onRemoveFile , file  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                onClick: ()=>onSelectFile(file),
                src: file.path,
                alt: file.name,
                className: "w-full h-full"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>onRemoveFile(file),
                className: "text-[12px] absolute z-[10] font-bold hidden group-hover:block bottom-1 right-1 py-[4px] px-[20px] text-black border border-black rounded-[4px] bg-white uppercase shadow-input",
                children: "X\xf3a"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaItem);


/***/ }),

/***/ 1461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var _MediaItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2188);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1532);
/* harmony import */ var primereact_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_tree__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
react_toastify__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function MediaManager({ multiple =false , filesSelect =[] , fileSelect ={} , onClose , onSelectFile  }) {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { id  } = router.query;
    const { 0: selectFiles , 1: setSelectFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(multiple ? filesSelect : fileSelect);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: medias , 1: setMedias  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: nodes , 1: setNodes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: selectedKey , 1: setSelectedKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: folderName , 1: setFolderName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOpenFileInput = ()=>inputRef.current.click();
    const fetchTreeFolder = async ()=>{
        try {
            const res = await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get("/folders");
            setNodes(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };
    const fetchMediasFolder = async ()=>{
        try {
            setLoading(true);
            await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post("/folders/get-medias", {
                folderId: selectedKey
            }).then((res)=>{
                setMedias(res.data.data);
                setLoading(false);
            });
        } catch (err) {
            setLoading(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchTreeFolder();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (files.length) createMedia();
    }, [
        files
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchMediasFolder();
    }, [
        selectedKey
    ]);
    const createMedia = async ()=>{
        try {
            const formData = new FormData();
            const folderId = selectedKey;
            Array.from(files).forEach((file)=>{
                formData.append("files", file);
            });
            formData.append("folderId", folderId);
            await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post("/medias/create", formData).then((res)=>{
                fetchMediasFolder();
            });
        } catch (err) {
            console.error(err);
        }
    };
    const handleSelectFile = (file)=>{
        if (multiple) {
            const fileFoud = selectFiles.find((item)=>item.id === file.id);
            if (fileFoud) {
                setSelectFiles(selectFiles.filter((item)=>item.id != file.id));
            } else {
                setSelectFiles([
                    ...selectFiles,
                    file
                ]);
            }
        } else {
            if (router.pathname != "/admin/medias") {
                onSelectFile(file);
                onClose(false);
            }
        }
    };
    const handleRemoveFile = async (file)=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"](`medias/delete/${file.id}`).then((result)=>{
            fetchMediasFolder();
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("X\xf3a File th\xe0nh c\xf4ng !", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.POSITION.TOP_CENTER
            });
        }).catch((err)=>{});
    };
    const onDeleteFolder = async ()=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"](`/folders/delete/${selectedKey}`).then((res)=>{
            if (res.data) {
                fetchTreeFolder();
            }
        });
    };
    const onCreateFolder = async ()=>{
        await _configAxios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post("/folders/create", {
            parent_id: selectedKey,
            label: folderName
        }).then((res)=>{
            setVisible(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Th\xeam thư mục th\xe0nh c\xf4ng !", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.POSITION.TOP_CENTER
            });
            fetchTreeFolder();
            setFolderName("");
        });
    };
    const onRemoveSelect = ()=>{
        setSelectFiles([]);
    };
    const onEmitFiles = ()=>{
        onSelectFile(selectFiles);
        onClose(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
                header: "Tạo Folder",
                visible: visible,
                style: {
                    width: "50vw"
                },
                onHide: ()=>setVisible(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[8px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "",
                                children: "T\xean Folder:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                value: folderName,
                                onChange: (e)=>setFolderName(e.target.value),
                                className: "w-full"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-prime mt-[20px]",
                            onClick: ()=>onCreateFolder(),
                            children: "Tạo"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed top-0 bottom-0 right-0 z-50 overflow-hidden bg-white left-from-sidebar",
                children: [
                    multiple && selectFiles.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute z-[10] bottom-0 inset-x-0 bg-white border-t border-gray-200 flex items-center justify-center py-[1rem] space-x-[12px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>onRemoveSelect(),
                                className: "btn-gray-outline uppercase",
                                children: "Bỏ chọn"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>onEmitFiles(),
                                className: "btn-gray-outline uppercase",
                                children: [
                                    "Chọn (",
                                    selectFiles.length,
                                    ")"
                                ]
                            })
                        ]
                    }) : "",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute inset-x-0 h-[80px] flex justify-between bg-white border-b border-gray-200 py-[1rem] px-[2rem] items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-gray-900 font-medium flex items-center space-x-[10px]",
                                children: [
                                    router.pathname !== "/admin/medias" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>onClose(false),
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/svg/arrow.svg",
                                            className: "rotate-90"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "File Maneger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-[8px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-[8px] border border-gray-400 rounded-[12px] min-w-[400px] bg-white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "border-none w-full focus:outline-none placeholder:text-gray-400",
                                            multiple: true,
                                            placeholder: "Nhập t\xean tệp...",
                                            type: "text"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setVisible(true),
                                        className: "btn-prime",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                                            id: "page.admin.btn_create_folder"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: handleOpenFileInput,
                                        className: "btn-prime",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/svg/upload.svg",
                                                alt: "upload",
                                                width: "20",
                                                height: "20",
                                                className: "text-white"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                                                    id: "page.admin.btn_choosen_folder"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: inputRef,
                        style: {
                            display: "none"
                        },
                        multiple: true,
                        type: "file",
                        onChange: (e)=>{
                            setFiles(e.target.files);
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-[80px] grid grid-cols-12 bg-white h-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-4 border-r border-gray-200 py-[20px] px-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tree__WEBPACK_IMPORTED_MODULE_6__.Tree, {
                                    value: nodes,
                                    selectionMode: "single",
                                    selectionKeys: selectedKey,
                                    onSelectionChange: (e)=>setSelectedKey(e.value),
                                    className: "w-full md:w-30rem"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-8 overflow-y-auto py-[20px] px-4 h-screen max-h-screen pb-[200px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-4 gap-[8px] ",
                                    children: medias && medias.length ? medias.map((file, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `col-span-1 h-[200px] 
                      flex items-center justify-center bg-gray-100
                      group aspect-w-1 aspect-h-1 border border-gray-300 rounded-[8px] 
                      overflow-hidden  
                      cursor-pointer group-hover:border-prime relative 
                      ${multiple && selectFiles.find((item)=>item.id === file.id) ? "border-prime" : ""}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onSelectFile: handleSelectFile,
                                                onRemoveFile: handleRemoveFile,
                                                file: file
                                            })
                                        }, index);
                                    }) : ""
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;