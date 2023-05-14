"use strict";
exports.id = 8250;
exports.ids = [8250];
exports.modules = {

/***/ 8250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$g": () => (/* binding */ adminLogin),
/* harmony export */   "E7": () => (/* binding */ adminRegister),
/* harmony export */   "Pk": () => (/* binding */ adminProfile),
/* harmony export */   "rE": () => (/* binding */ adminLogout)
/* harmony export */ });
/* harmony import */ var _configAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9785);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);



const adminLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("admin/login", async (form, { rejectWithValue  })=>{
    try {
        const { data  } = await _configAxios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`admins/login`, {
            ...form
        });
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("adminToken", data.data.token);
        return data;
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
const adminRegister = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("admin/register", async (form, { rejectWithValue  })=>{
    try {
        await _configAxios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`admins/register`, {
            ...form
        });
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
const adminLogout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("admin/logout", async ({ rejectWithValue  })=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("adminToken");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        await _configAxios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`admins/logout`, {}, config);
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("adminToken");
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
const adminProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("admin/profile", async ({ rejectWithValue  })=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("adminToken");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const { data  } = await _configAxios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`admins/profile`, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});


/***/ })

};
;