/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/Dropdown.tsx":
/*!****************************************!*\
  !*** ./components/Navbar/Dropdown.tsx ***!
  \****************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/Navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ \"./components/Navbar/Dropdown.tsx\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dropdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavItems */ \"./components/Navbar/NavItems.tsx\");\n\n// Components\n\n\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-11/12 max-w-7xl pt-6 flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sduration-300 hover:-translate-y-1 hover:cursor-pointer sm:inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-icon\",\n                        children: \"Scarlett H.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/honghong/Documents/GitHub/Portfolio/components/Navbar/Navbar.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBREEsYUFBYTtBQUNxQjtBQUNBO0FBRWxDLFNBQVNFLE1BQU0sR0FBRztJQUNkLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxrRUFBa0U7OzhCQUM3RSw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHlFQUF5RTs4QkFDcEYsNEVBQUNDLE1BQUk7d0JBQUNELFNBQVMsRUFBQyxhQUFhO2tDQUFDLGFBQVc7Ozs7OzRCQUFPOzs7Ozt3QkFDOUM7OEJBQ04sOERBQUNKLGlEQUFROzs7O3dCQUFHOzhCQUtaLDhEQUFDRCxrREFBUTs7Ozt3QkFBRzs7Ozs7O2dCQUNWOzs7OztZQUNKLENBQ1I7Q0FDTDtBQWhCUUUsS0FBQUEsTUFBTTtBQWtCZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/NjdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnRzXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vRHJvcGRvd25cIjtcbmltcG9ydCBOYXZJdGVtcyBmcm9tIFwiLi9OYXZJdGVtc1wiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTExLzEyIG1heC13LTd4bCBwdC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2R1cmF0aW9uLTMwMCBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpjdXJzb3ItcG9pbnRlciBzbTppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLWljb25cIj5TY2FybGV0dCBILjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbXMgLz5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIm1lbnUgYnV0dG9uXCI+XG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYmFyXCI+XG5cdFx0XHRcdCAgICA8L2Rpdj5cblx0XHRcdCAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiTmF2SXRlbXMiLCJOYXZiYXIiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.tsx\n");

/***/ })

});