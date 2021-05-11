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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");



var _jsxFileName = "E:\\mahendra\\shopify app\\cj-cps\\components\\ProductList.js",
    _s2 = $RefreshSig$();

function _templateObject() {
  var data = Object(E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery getProducts($row:Int!){\n  products(first:$row) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        images(first:1){\n          edges{\n            node{\n              id\n              originalSrc\n            }\n          }\n        }\n        variants(first:1){\n          edges{\n            node{\n              price\n            }\n          }\n        }\n        totalInventory\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_FIRST_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject());

function ProductList() {
  _s2();

  var _s = $RefreshSig$(),
      _this = this;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_FIRST_PRODUCTS, {
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
    lineNumber: 43,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 23
  }, this); //console.log('stored products',data.products.edges);

  var products = data.products.edges;
  var resourceName = {
    singular: 'Product',
    plural: 'Products'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(_s(function (products) {
    _s();

    var _useIndexResourceStat = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["useIndexResourceState"])(products),
        selectedResources = _useIndexResourceStat.selectedResources,
        allResourcesSelected = _useIndexResourceStat.allResourcesSelected,
        handleSelectionChange = _useIndexResourceStat.handleSelectionChange;
  }, "aW0OQZVksJPnKWI3ci5XhAmZC1g=", false, function () {
    return [_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["useIndexResourceState"]];
  }), [selectedResources, allResourcesSelected, handleSelectionChange]);
  var rowMarkup = products.map(function (_ref, index) {
    var item = _ref.item;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Row, {
      id: item.node.id,
      selected: selectedResources.includes(item.node.id),
      position: index,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Cell, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Thumbnail, {
          source: item.node.images.edges[0] ? item.node.images.edges[0].node.originalSrc : '',
          alt: item.node.images.edges[0] ? item.node.images.edges[0].node.altText : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Cell, {
        children: item.node.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Cell, {
        children: item.node.variants.edges[0].node.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this)]
    }, item.node.id, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"], {
      resourceName: resourceName,
      itemCount: data.products.edges.length,
      headings: [{
        title: 'Image'
      }, {
        title: 'Title'
      }, {
        title: 'Price'
      }],
      children: rowMarkup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

_s2(ProductList, "VYbJ2PNFRnZLwgQxf4n3HAWwtMU=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwicmVzb3VyY2VOYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ1c2VFZmZlY3QiLCJ1c2VJbmRleFJlc291cmNlU3RhdGUiLCJzZWxlY3RlZFJlc291cmNlcyIsImFsbFJlc291cmNlc1NlbGVjdGVkIiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwicm93TWFya3VwIiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibm9kZSIsImlkIiwiaW5jbHVkZXMiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInZhcmlhbnRzIiwicHJpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxrQkFBa0IsR0FBR0MsMkRBQUgsbUJBQXhCOztBQWtDQSxTQUFTQyxXQUFULEdBQXNCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDYUMsb0VBQVEsQ0FBQ0gsa0JBQUQsRUFBcUI7QUFBRUksYUFBUyxFQUFFO0FBQUVDLFNBQUcsRUFBRTtBQUFQO0FBQWIsR0FBckIsQ0FEckI7QUFBQSxNQUNYQyxPQURXLGFBQ1hBLE9BRFc7QUFBQSxNQUNGQyxLQURFLGFBQ0ZBLEtBREU7QUFBQSxNQUNLQyxJQURMLGFBQ0tBLElBREw7O0FBRWxCLE1BQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsY0FBTUEsS0FBSyxDQUFDRTtBQUFa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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzMzk0ZTUzZWQ2OGYxYTRiZTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQ2FyZCxJbmRleFRhYmxlLHVzZUluZGV4UmVzb3VyY2VTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuXHJcbmNvbnN0IEdFVF9GSVJTVF9QUk9EVUNUUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJHJvdzpJbnQhKXtcclxuICBwcm9kdWN0cyhmaXJzdDokcm93KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbEludmVudG9yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXsgICAgXHJcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX0ZJUlNUX1BST0RVQ1RTLCB7IHZhcmlhYmxlczogeyByb3c6IDIwIH0gfSk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICAgIC8vY29uc29sZS5sb2coJ3N0b3JlZCBwcm9kdWN0cycsZGF0YS5wcm9kdWN0cy5lZGdlcyk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMuZWRnZXNcclxuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHtcclxuICAgICAgc2luZ3VsYXI6ICdQcm9kdWN0JyxcclxuICAgICAgcGx1cmFsOiAnUHJvZHVjdHMnLFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgocHJvZHVjdHMpID0+IHtcclxuICAgICAgY29uc3Qge3NlbGVjdGVkUmVzb3VyY2VzLGFsbFJlc291cmNlc1NlbGVjdGVkLGhhbmRsZVNlbGVjdGlvbkNoYW5nZX0gPSB1c2VJbmRleFJlc291cmNlU3RhdGUocHJvZHVjdHMpO1xyXG4gICAgfSxbc2VsZWN0ZWRSZXNvdXJjZXMsYWxsUmVzb3VyY2VzU2VsZWN0ZWQsaGFuZGxlU2VsZWN0aW9uQ2hhbmdlXSlcclxuICAgIFxyXG4gICAgY29uc3Qgcm93TWFya3VwID0gcHJvZHVjdHMubWFwKFxyXG4gICAgICAoe2l0ZW19LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxJbmRleFRhYmxlLlJvd1xyXG4gICAgICAgICAgaWQ9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgIGtleT17aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkUmVzb3VyY2VzLmluY2x1ZGVzKGl0ZW0ubm9kZS5pZCl9XHJcbiAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEluZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgPFRodW1ibmFpbCBcclxuICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyYyA6JydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0IDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgPEluZGV4VGFibGUuQ2VsbD57aXRlbS5ub2RlLnRpdGxlfTwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgPEluZGV4VGFibGUuQ2VsbD57aXRlbS5ub2RlLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2V9PC9JbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgPC9JbmRleFRhYmxlLlJvdz5cclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8SW5kZXhUYWJsZVxyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU9e3Jlc291cmNlTmFtZX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtkYXRhLnByb2R1Y3RzLmVkZ2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdJbWFnZSd9LFxyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ1RpdGxlJ30sXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnUHJpY2UnfSxcclxuICAgICAgICAgICAgXX0gIFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAge3Jvd01hcmt1cH1cclxuICAgICAgICAgIDwvSW5kZXhUYWJsZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9