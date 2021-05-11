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

    var fetchObj = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["useIndexResourceState"])(products);
    var selectedResources = fetchObj.selectedResources;
    var allResourcesSelected = fetchObj.allResourcesSelected;
    var handleSelectionChange = fetchObj.handleSelectionChange;
  }, "bcKwADgbMZP/XZmpPIfR9/EIDfE=", false, function () {
    return [_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["useIndexResourceState"]];
  }));
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
          lineNumber: 67,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Cell, {
        children: item.node.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["IndexTable"].Cell, {
        children: item.node.variants.edges[0].node.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, _this)]
    }, item.node.id, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 83,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwicmVzb3VyY2VOYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ1c2VFZmZlY3QiLCJmZXRjaE9iaiIsInVzZUluZGV4UmVzb3VyY2VTdGF0ZSIsInNlbGVjdGVkUmVzb3VyY2VzIiwiYWxsUmVzb3VyY2VzU2VsZWN0ZWQiLCJoYW5kbGVTZWxlY3Rpb25DaGFuZ2UiLCJyb3dNYXJrdXAiLCJtYXAiLCJpbmRleCIsIml0ZW0iLCJub2RlIiwiaWQiLCJpbmNsdWRlcyIsImltYWdlcyIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInRpdGxlIiwidmFyaWFudHMiLCJwcmljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHQywyREFBSCxtQkFBeEI7O0FBa0NBLFNBQVNDLFdBQVQsR0FBc0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNhQyxvRUFBUSxDQUFDSCxrQkFBRCxFQUFxQjtBQUFFSSxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFO0FBQVA7QUFBYixHQUFyQixDQURyQjtBQUFBLE1BQ1hDLE9BRFcsYUFDWEEsT0FEVztBQUFBLE1BQ0ZDLEtBREUsYUFDRkEsS0FERTtBQUFBLE1BQ0tDLElBREwsYUFDS0EsSUFETDs7QUFFbEIsTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxjQUFNQSxLQUFL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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzNWUzOTg0OWFjZWI3YzJhMDI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQ2FyZCxJbmRleFRhYmxlLHVzZUluZGV4UmVzb3VyY2VTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuXHJcbmNvbnN0IEdFVF9GSVJTVF9QUk9EVUNUUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJHJvdzpJbnQhKXtcclxuICBwcm9kdWN0cyhmaXJzdDokcm93KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbEludmVudG9yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXsgICAgXHJcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX0ZJUlNUX1BST0RVQ1RTLCB7IHZhcmlhYmxlczogeyByb3c6IDIwIH0gfSk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICAgIC8vY29uc29sZS5sb2coJ3N0b3JlZCBwcm9kdWN0cycsZGF0YS5wcm9kdWN0cy5lZGdlcyk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMuZWRnZXNcclxuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHtcclxuICAgICAgc2luZ3VsYXI6ICdQcm9kdWN0JyxcclxuICAgICAgcGx1cmFsOiAnUHJvZHVjdHMnLFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgocHJvZHVjdHMpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hPYmogPSB1c2VJbmRleFJlc291cmNlU3RhdGUocHJvZHVjdHMpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFJlc291cmNlcyA9IGZldGNoT2JqLnNlbGVjdGVkUmVzb3VyY2VzO1xyXG4gICAgICBjb25zdCBhbGxSZXNvdXJjZXNTZWxlY3RlZCA9IGZldGNoT2JqLmFsbFJlc291cmNlc1NlbGVjdGVkO1xyXG4gICAgICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UgPSBmZXRjaE9iai5oYW5kbGVTZWxlY3Rpb25DaGFuZ2U7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCByb3dNYXJrdXAgPSBwcm9kdWN0cy5tYXAoXHJcbiAgICAgICh7aXRlbX0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEluZGV4VGFibGUuUm93XHJcbiAgICAgICAgICBpZD17aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAga2V5PXtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRSZXNvdXJjZXMuaW5jbHVkZXMoaXRlbS5ub2RlLmlkKX1cclxuICAgICAgICAgIHBvc2l0aW9uPXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlsIFxyXG4gICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5ub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjIDonJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5ub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHQgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgICA8SW5kZXhUYWJsZS5DZWxsPntpdGVtLm5vZGUudGl0bGV9PC9JbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgICA8SW5kZXhUYWJsZS5DZWxsPntpdGVtLm5vZGUudmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZX08L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICA8L0luZGV4VGFibGUuUm93PlxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlXHJcbiAgICAgICAgICAgIHJlc291cmNlTmFtZT17cmVzb3VyY2VOYW1lfVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e2RhdGEucHJvZHVjdHMuZWRnZXMubGVuZ3RofVxyXG4gICAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ0ltYWdlJ30sXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnVGl0bGUnfSxcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdQcmljZSd9LFxyXG4gICAgICAgICAgICBdfSAgXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICB7cm93TWFya3VwfVxyXG4gICAgICAgICAgPC9JbmRleFRhYmxlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=