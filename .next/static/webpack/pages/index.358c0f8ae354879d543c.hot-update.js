webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");



var _jsxFileName = "E:\\mahendra\\shopify app\\cj-cps\\components\\ProductList.js",
    _s2 = $RefreshSig$();

function _templateObject() {
  var data = Object(E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery getProducts($row:Int!){\n  products(first:$row) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        images(first:1){\n          edges{\n            node{\n              id\n              originalSrc\n            }\n          }\n        }\n        variants(first:1){\n          edges{\n            node{\n              price\n            }\n          }\n        }\n        totalInventory\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_FIRST_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject());

function ProductList() {
  _s2();

  var _s = $RefreshSig$();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_FIRST_PRODUCTS, {
    variables: {
      row: 20
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 23
  }, this); //console.log('stored products',data.products.edges);

  var products = data.products.edges;
  var resourceName = {
    singular: 'Product',
    plural: 'Products'
  };
  useEffect(_s(function (products) {
    _s();

    var _useIndexResourceStat = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["useIndexResourceState"])(products),
        selectedResources = _useIndexResourceStat.selectedResources,
        allResourcesSelected = _useIndexResourceStat.allResourcesSelected,
        handleSelectionChange = _useIndexResourceStat.handleSelectionChange;
  }, "aW0OQZVksJPnKWI3ci5XhAmZC1g=", false, function () {
    return [_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["useIndexResourceState"]];
  }), [selectedResources, allResourcesSelected, handleSelectionChange]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"], {
      resourceName: resourceName,
      itemCount: data.products.edges.length,
      headings: [{
        title: 'Image'
      }, {
        title: 'Title'
      }, {
        title: 'Price'
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

_s2(ProductList, "VYbJ2PNFRnZLwgQxf4n3HAWwtMU=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwicmVzb3VyY2VOYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ1c2VFZmZlY3QiLCJ1c2VJbmRleFJlc291cmNlU3RhdGUiLCJzZWxlY3RlZFJlc291cmNlcyIsImFsbFJlc291cmNlc1NlbGVjdGVkIiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwibGVuZ3RoIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHQywyREFBSCxtQkFBeEI7O0FBa0NBLFNBQVNDLFdBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsb0VBQVEsQ0FBQ0gsa0JBQUQsRUFBcUI7QUFBRUksYUFBUyxFQUFFO0FBQUVDLFNBQUcsRUFBRTtBQUFQO0FBQWIsR0FBckIsQ0FEckI7QUFBQSxNQUNYQyxPQURXLGFBQ1hBLE9BRFc7QUFBQSxNQUNGQyxLQURFLGFBQ0ZBLEtBREU7QUFBQSxNQUNLQyxJQURMLGFBQ0tBLElBREw7O0FBRWxCLE1BQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsY0FBTUEsS0FBSyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQUhPLENBSWxCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEtBQS9CO0FBQ0EsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxZQUFRLEVBQUUsU0FEUztBQUVuQkMsVUFBTSxFQUFFO0FBRlcsR0FBckI7QUFJQUMsV0FBUyxJQUFDLFVBQUNMLFFBQUQsRUFBYztBQUFBOztBQUFBLGdDQUNpRE0sOEVBQXFCLENBQUNOLFFBQUQsQ0FEdEU7QUFBQSxRQUNmTyxpQkFEZSx5QkFDZkEsaUJBRGU7QUFBQSxRQUNHQyxvQkFESCx5QkFDR0Esb0JBREg7QUFBQSxRQUN3QkMscUJBRHhCLHlCQUN3QkEscUJBRHhCO0FBRXZCLEdBRlE7QUFBQSxZQUNnRUgsc0VBRGhFO0FBQUEsTUFFUCxDQUFDQyxpQkFBRCxFQUFtQkMsb0JBQW5CLEVBQXdDQyxxQkFBeEMsQ0FGTyxDQUFUO0FBTUEsc0JBQ0kscUVBQUMscURBQUQ7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUNFLGtCQUFZLEVBQUVQLFlBRGhCO0FBRUUsZUFBUyxFQUFFSixJQUFJLENBQUNFLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQlMsTUFGakM7QUFHRSxjQUFRLEVBQUUsQ0FDUjtBQUFDQyxhQUFLLEVBQUU7QUFBUixPQURRLEVBRVI7QUFBQ0EsYUFBSyxFQUFFO0FBQVIsT0FGUSxFQUdSO0FBQUNBLGFBQUssRUFBRTtBQUFSLE9BSFE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztJQWhDUW5CLFc7VUFDMEJDLDREOzs7S0FEMUJELFc7QUFpQ01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1OGMwZjhhZTM1NDg3OWQ1NDNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQ2FyZCxJbmRleFRhYmxlLHVzZUluZGV4UmVzb3VyY2VTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuXHJcbmNvbnN0IEdFVF9GSVJTVF9QUk9EVUNUUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJHJvdzpJbnQhKXtcclxuICBwcm9kdWN0cyhmaXJzdDokcm93KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbEludmVudG9yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXsgICAgXHJcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX0ZJUlNUX1BST0RVQ1RTLCB7IHZhcmlhYmxlczogeyByb3c6IDIwIH0gfSk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICAgIC8vY29uc29sZS5sb2coJ3N0b3JlZCBwcm9kdWN0cycsZGF0YS5wcm9kdWN0cy5lZGdlcyk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMuZWRnZXNcclxuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHtcclxuICAgICAgc2luZ3VsYXI6ICdQcm9kdWN0JyxcclxuICAgICAgcGx1cmFsOiAnUHJvZHVjdHMnLFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgocHJvZHVjdHMpID0+IHtcclxuICAgICAgY29uc3Qge3NlbGVjdGVkUmVzb3VyY2VzLGFsbFJlc291cmNlc1NlbGVjdGVkLGhhbmRsZVNlbGVjdGlvbkNoYW5nZX0gPSB1c2VJbmRleFJlc291cmNlU3RhdGUocHJvZHVjdHMpO1xyXG4gICAgfSxbc2VsZWN0ZWRSZXNvdXJjZXMsYWxsUmVzb3VyY2VzU2VsZWN0ZWQsaGFuZGxlU2VsZWN0aW9uQ2hhbmdlXSlcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPEluZGV4VGFibGVcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXtyZXNvdXJjZU5hbWV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17ZGF0YS5wcm9kdWN0cy5lZGdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnSW1hZ2UnfSxcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdUaXRsZSd9LFxyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ1ByaWNlJ30sXHJcbiAgICAgICAgICAgIF19ICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9JbmRleFRhYmxlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=