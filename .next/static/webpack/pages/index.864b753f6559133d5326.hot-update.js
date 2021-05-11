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
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery getProducts($row:Int!){\n  products(first:$row) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        images(first:1){\n          edges{\n            node{\n              id\n              originalSrc\n            }\n          }\n        }\n        variants(first:1){\n          edges{\n            node{\n              price\n            }\n          }\n        }\n        totalInventory\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_FIRST_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject());

function ProductList() {
  _s();

  var _this = this;

  var resourceName = {
    singular: 'Product',
    plural: 'Products'
  };

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
    lineNumber: 47,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 23
  }, this); //console.log('stored products',data.products.edges);  

  var _useIndexResourceStat = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["useIndexResourceState"])(data.products.edges),
      selectedResources = _useIndexResourceStat.selectedResources,
      allResourcesSelected = _useIndexResourceStat.allResourcesSelected,
      handleSelectionChange = _useIndexResourceStat.handleSelectionChange;

  var rowMarkup = data.products.edges.map(function (_ref, index) {
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
          lineNumber: 65,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: item.node.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: item.node.variants.edges[0].node.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this)]
    }, item.node.id, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"], {
      resourceName: resourceName,
      itemCount: data.products.edges.length,
      selectedItemsCount: allResourcesSelected ? 'All' : selectedResources.length,
      onSelectionChange: handleSelectionChange,
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
      lineNumber: 81,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, this);
}

_s(ProductList, "LY4s6mgmYKebAVeC6wkkf5a3IDk=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"], _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["useIndexResourceState"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInJlc291cmNlTmFtZSIsInNpbmd1bGFyIiwicGx1cmFsIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJyb3ciLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInVzZUluZGV4UmVzb3VyY2VTdGF0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJzZWxlY3RlZFJlc291cmNlcyIsImFsbFJlc291cmNlc1NlbGVjdGVkIiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwicm93TWFya3VwIiwibWFwIiwiaW5kZXgiLCJpdGVtIiwibm9kZSIsImlkIiwiaW5jbHVkZXMiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInZhcmlhbnRzIiwicHJpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHQywyREFBSCxtQkFBeEI7O0FBa0NBLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDbkIsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxZQUFRLEVBQUUsU0FEUztBQUVuQkMsVUFBTSxFQUFFO0FBRlcsR0FBckI7O0FBRG1CLGtCQU1ZQyxvRUFBUSxDQUFDTixrQkFBRCxFQUFxQjtBQUFFTyxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFO0FBQVA7QUFBYixHQUFyQixDQU5wQjtBQUFBLE1BTVpDLE9BTlksYUFNWkEsT0FOWTtBQUFBLE1BTUhDLEtBTkcsYUFNSEEsS0FORztBQUFBLE1BTUlDLElBTkosYUFNSUEsSUFOSjs7QUFPbkIsTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFD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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBDYXJkLEluZGV4VGFibGUsdXNlSW5kZXhSZXNvdXJjZVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcblxyXG5cclxuY29uc3QgR0VUX0ZJUlNUX1BST0RVQ1RTID0gZ3FsYFxyXG5xdWVyeSBnZXRQcm9kdWN0cygkcm93OkludCEpe1xyXG4gIHByb2R1Y3RzKGZpcnN0OiRyb3cpIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6MSl7XHJcbiAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6MSl7XHJcbiAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsSW52ZW50b3J5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBhZ2VJbmZvIHtcclxuICAgICAgaGFzTmV4dFBhZ2VcclxuICAgICAgaGFzUHJldmlvdXNQYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCAoKXtcclxuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHtcclxuICAgICAgc2luZ3VsYXI6ICdQcm9kdWN0JyxcclxuICAgICAgcGx1cmFsOiAnUHJvZHVjdHMnLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9GSVJTVF9QUk9EVUNUUywgeyB2YXJpYWJsZXM6IHsgcm93OiAyMCB9IH0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAvL2NvbnNvbGUubG9nKCdzdG9yZWQgcHJvZHVjdHMnLGRhdGEucHJvZHVjdHMuZWRnZXMpOyAgXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlbGVjdGVkUmVzb3VyY2VzLFxyXG4gICAgICBhbGxSZXNvdXJjZXNTZWxlY3RlZCxcclxuICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlLFxyXG4gICAgfSA9IHVzZUluZGV4UmVzb3VyY2VTdGF0ZShkYXRhLnByb2R1Y3RzLmVkZ2VzKTtcclxuXHJcbiAgICBjb25zdCByb3dNYXJrdXAgPSBkYXRhLnByb2R1Y3RzLmVkZ2VzLm1hcChcclxuICAgICAgKHtpdGVtfSwgaW5kZXgpID0+IChcclxuICAgICAgICA8SW5kZXhUYWJsZS5Sb3dcclxuICAgICAgICAgIGlkPXtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICBrZXk9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZFJlc291cmNlcy5pbmNsdWRlcyhpdGVtLm5vZGUuaWQpfVxyXG4gICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgIDxUaHVtYm5haWwgXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmMgOicnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dCA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+e2l0ZW0ubm9kZS50aXRsZX08L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+e2l0ZW0ubm9kZS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlfTwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgIDwvSW5kZXhUYWJsZS5Sb3c+XHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPEluZGV4VGFibGVcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXtyZXNvdXJjZU5hbWV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17ZGF0YS5wcm9kdWN0cy5lZGdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXNDb3VudD17XHJcbiAgICAgICAgICAgICAgYWxsUmVzb3VyY2VzU2VsZWN0ZWQgPyAnQWxsJyA6IHNlbGVjdGVkUmVzb3VyY2VzLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnSW1hZ2UnfSxcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdUaXRsZSd9LFxyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ1ByaWNlJ30sXHJcbiAgICAgICAgICAgIF19ICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgIHtyb3dNYXJrdXB9XHJcbiAgICAgICAgICA8L0luZGV4VGFibGU+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==