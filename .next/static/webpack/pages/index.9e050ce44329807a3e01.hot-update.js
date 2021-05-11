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

  var _s = $RefreshSig$(),
      _this = this;

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
  var rowMarkup = products.map(function (_ref, index) {
    var item = _ref.item;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Row, {
      id: item.node.id,
      selected: selectedResources.includes(item.node.id),
      position: index,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Thumbnail, {
          source: item.node.images.edges[0] ? item.node.images.edges[0].node.originalSrc : '',
          alt: item.node.images.edges[0] ? item.node.images.edges[0].node.altText : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: item.node.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: item.node.variants.edges[0].node.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, _this)]
    }, item.node.id, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this);
  });
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
      }],
      children: rowMarkup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwicmVzb3VyY2VOYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ1c2VFZmZlY3QiLCJ1c2VJbmRleFJlc291cmNlU3RhdGUiLCJzZWxlY3RlZFJlc291cmNlcyIsImFsbFJlc291cmNlc1NlbGVjdGVkIiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwicm93TWFya3VwIiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibm9kZSIsImlkIiwiaW5jbHVkZXMiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInZhcmlhbnRzIiwicHJpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHQywyREFBSCxtQkFBeEI7O0FBa0NBLFNBQVNDLFdBQVQsR0FBc0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNhQyxvRUFBUSxDQUFDSCxrQkFBRCxFQUFxQjtBQUFFSSxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFO0FBQVA7QUFBYixHQUFyQixDQURyQjtBQUFBLE1BQ1hDLE9BRFcsYUFDWEEsT0FEVztBQUFBLE1BQ0ZDLEtBREUsYUFDRkEsS0FERTtBQUFBLE1BQ0tDLElBREwsYUFDS0EsSUFETDs7QUFFbEIsTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxjQUFNQSxLQUFLLENBQUNFO0FBQVo7QUFBQTtB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aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZTA1MGNlNDQzMjk4MDdhM2UwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IENhcmQsSW5kZXhUYWJsZSx1c2VJbmRleFJlc291cmNlU3RhdGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuXHJcblxyXG5jb25zdCBHRVRfRklSU1RfUFJPRFVDVFMgPSBncWxgXHJcbnF1ZXJ5IGdldFByb2R1Y3RzKCRyb3c6SW50ISl7XHJcbiAgcHJvZHVjdHMoZmlyc3Q6JHJvdykge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGltYWdlcyhmaXJzdDoxKXtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDoxKXtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxJbnZlbnRvcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFnZUluZm8ge1xyXG4gICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICBoYXNQcmV2aW91c1BhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCl7ICAgIFxyXG4gICAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9GSVJTVF9QUk9EVUNUUywgeyB2YXJpYWJsZXM6IHsgcm93OiAyMCB9IH0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAvL2NvbnNvbGUubG9nKCdzdG9yZWQgcHJvZHVjdHMnLGRhdGEucHJvZHVjdHMuZWRnZXMpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLnByb2R1Y3RzLmVkZ2VzXHJcbiAgICBjb25zdCByZXNvdXJjZU5hbWUgPSB7XHJcbiAgICAgIHNpbmd1bGFyOiAnUHJvZHVjdCcsXHJcbiAgICAgIHBsdXJhbDogJ1Byb2R1Y3RzJyxcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtzZWxlY3RlZFJlc291cmNlcyxhbGxSZXNvdXJjZXNTZWxlY3RlZCxoYW5kbGVTZWxlY3Rpb25DaGFuZ2V9ID0gdXNlSW5kZXhSZXNvdXJjZVN0YXRlKHByb2R1Y3RzKTtcclxuICAgIH0sW3NlbGVjdGVkUmVzb3VyY2VzLGFsbFJlc291cmNlc1NlbGVjdGVkLGhhbmRsZVNlbGVjdGlvbkNoYW5nZV0pXHJcbiAgICBcclxuICAgIGNvbnN0IHJvd01hcmt1cCA9IHByb2R1Y3RzLm1hcChcclxuICAgICAgKHtpdGVtfSwgaW5kZXgpID0+IChcclxuICAgICAgICA8SW5kZXhUYWJsZS5Sb3dcclxuICAgICAgICAgIGlkPXtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICBrZXk9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZFJlc291cmNlcy5pbmNsdWRlcyhpdGVtLm5vZGUuaWQpfVxyXG4gICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgIDxUaHVtYm5haWwgXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmMgOicnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dCA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+e2l0ZW0ubm9kZS50aXRsZX08L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+e2l0ZW0ubm9kZS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlfTwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgIDwvSW5kZXhUYWJsZS5Sb3c+XHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPEluZGV4VGFibGVcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXtyZXNvdXJjZU5hbWV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17ZGF0YS5wcm9kdWN0cy5lZGdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnSW1hZ2UnfSxcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdUaXRsZSd9LFxyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ1ByaWNlJ30sXHJcbiAgICAgICAgICAgIF19ICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgIHtyb3dNYXJrdXB9XHJcbiAgICAgICAgICA8L0luZGV4VGFibGU+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==