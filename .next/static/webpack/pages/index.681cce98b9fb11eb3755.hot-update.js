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
  var rowMarkup = customers.map(function (_ref, index) {
    var id = _ref.id,
        name = _ref.name,
        location = _ref.location,
        orders = _ref.orders,
        amountSpent = _ref.amountSpent;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Row, {
      id: id,
      selected: selectedResources.includes(id),
      position: index,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          variation: "strong",
          children: name
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
        children: location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: orders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["IndexTable"].Cell, {
        children: amountSpent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, _this)]
    }, id, true, {
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
      lineNumber: 73,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwicmVzb3VyY2VOYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ1c2VFZmZlY3QiLCJ1c2VJbmRleFJlc291cmNlU3RhdGUiLCJzZWxlY3RlZFJlc291cmNlcyIsImFsbFJlc291cmNlc1NlbGVjdGVkIiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwicm93TWFya3VwIiwiY3VzdG9tZXJzIiwibWFwIiwiaW5kZXgiLCJpZCIsIm5hbWUiLCJsb2NhdGlvbiIsIm9yZGVycyIsImFtb3VudFNwZW50IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsa0JBQWtCLEdBQUdDLDJEQUFILG1CQUF4Qjs7QUFrQ0EsU0FBU0MsV0FBVCxHQUFzQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ2FDLG9FQUFRLENBQUNILGtCQUFELEVBQXFCO0FBQUVJLGFBQVMsRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBUDtBQUFiLEdBQXJCLENBRHJCO0FBQUEsTUFDWEMsT0FEVyxhQUNYQSxPQURXO0FBQUEsTUFDRkMsS0FERSxhQUNGQSxLQURFO0FBQUEsTUFDS0MsSUFETCxhQUNLQSxJQURMOztBQUVsQixNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGNBQU1BLEtBQUssQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FITyxDQUlsQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxLQUEvQjtBQUNBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsWUFBUSxFQUFFLFNBRFM7QUFFbkJDLFVBQU0sRUFBRTtBQUZXLEdBQXJCO0FBSUFDLFdBQVMsSUFBQyxVQUFDTCxRQUFELEVBQWM7QUFBQTs7QUFBQSxnQ0FDaURNLDhFQUFxQixDQUFDTixRQUFELENBRHRFO0FBQUEsUUFDZk8saUJBRGUseUJBQ2ZBLGlCQURlO0FBQUEsUUFDR0Msb0JBREgseUJBQ0dBLG9CQURIO0FBQUEsUUFDd0JDLHFCQUR4Qix5QkFDd0JBLHFCQUR4QjtBQUV2QixHQUZRO0FBQUEsWUFDZ0VILHNFQURoRTtBQUFBLE1BRVAsQ0FBQ0MsaUJBQUQsRUFBbUJDLG9CQUFuQixFQUF3Q0MscUJBQXhDLENBRk8sQ0FBVDtBQUlBLE1BQU1DLFNBQVMsR0FBR0MsU0FBUyxDQUFDQyxHQUFWLENBQ2hCLGdCQUE0Q0MsS0FBNUM7QUFBQSxRQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxRQUFNQyxJQUFOLFFBQU1BLElBQU47QUFBQSxRQUFZQyxRQUFaLFFBQVlBLFFBQVo7QUFBQSxRQUFzQkMsTUFBdEIsUUFBc0JBLE1BQXRCO0FBQUEsUUFBOEJDLFdBQTlCLFFBQThCQSxXQUE5QjtBQUFBLHdCQUNFLHFFQUFDLDJEQUFELENBQVksR0FBWjtBQUNFLFFBQUUsRUFBRUosRUFETjtBQUdFLGNBQVEsRUFBRVAsaUJBQWlCLENBQUNZLFFBQWxCLENBQTJCTCxFQUEzQixDQUhaO0FBSUUsY0FBUSxFQUFFRCxLQUpaO0FBQUEsOEJBTUUscUVBQUMsMkRBQUQsQ0FBWSxJQUFaO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFXLG1CQUFTLEVBQUMsUUFBckI7QUFBQSxvQkFBK0JFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFTRSxxRUFBQywyREFBRCxDQUFZLElBQVo7QUFBQSxrQkFBa0JDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLHFFQUFDLDJEQUFELENBQVksSUFBWjtBQUFBLGtCQUFrQkM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBV0UscUVBQUMsMkRBQUQsQ0FBWSxJQUFaO0FBQUEsa0JBQWtCQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQSxPQUVPSixFQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBLEdBRGdCLENBQWxCO0FBaUJBLHNCQUNJLHFFQUFDLHFEQUFEO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxrQkFBWSxFQUFFWixZQURoQjtBQUVFLGVBQVMsRUFBRUosSUFBSSxDQUFDRSxRQUFMLENBQWNDLEtBQWQsQ0FBb0JtQixNQUZqQztBQUdFLGNBQVEsRUFBRSxDQUNSO0FBQUNDLGFBQUssRUFBRTtBQUFSLE9BRFEsRUFFUjtBQUFDQSxhQUFLLEVBQUU7QUFBUixPQUZRLEVBR1I7QUFBQ0EsYUFBSyxFQUFFO0FBQVIsT0FIUSxDQUhaO0FBQUEsZ0JBU0NYO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7SUEvQ1FsQixXO1VBQzBCQyw0RDs7O0tBRDFCRCxXO0FBZ0RNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ODFjY2U5OGI5ZmIxMWViMzc1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IENhcmQsSW5kZXhUYWJsZSx1c2VJbmRleFJlc291cmNlU3RhdGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuXHJcblxyXG5jb25zdCBHRVRfRklSU1RfUFJPRFVDVFMgPSBncWxgXHJcbnF1ZXJ5IGdldFByb2R1Y3RzKCRyb3c6SW50ISl7XHJcbiAgcHJvZHVjdHMoZmlyc3Q6JHJvdykge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGltYWdlcyhmaXJzdDoxKXtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDoxKXtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxJbnZlbnRvcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFnZUluZm8ge1xyXG4gICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICBoYXNQcmV2aW91c1BhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCl7ICAgIFxyXG4gICAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9GSVJTVF9QUk9EVUNUUywgeyB2YXJpYWJsZXM6IHsgcm93OiAyMCB9IH0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAvL2NvbnNvbGUubG9nKCdzdG9yZWQgcHJvZHVjdHMnLGRhdGEucHJvZHVjdHMuZWRnZXMpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLnByb2R1Y3RzLmVkZ2VzXHJcbiAgICBjb25zdCByZXNvdXJjZU5hbWUgPSB7XHJcbiAgICAgIHNpbmd1bGFyOiAnUHJvZHVjdCcsXHJcbiAgICAgIHBsdXJhbDogJ1Byb2R1Y3RzJyxcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtzZWxlY3RlZFJlc291cmNlcyxhbGxSZXNvdXJjZXNTZWxlY3RlZCxoYW5kbGVTZWxlY3Rpb25DaGFuZ2V9ID0gdXNlSW5kZXhSZXNvdXJjZVN0YXRlKHByb2R1Y3RzKTtcclxuICAgIH0sW3NlbGVjdGVkUmVzb3VyY2VzLGFsbFJlc291cmNlc1NlbGVjdGVkLGhhbmRsZVNlbGVjdGlvbkNoYW5nZV0pXHJcbiAgICBcclxuICAgIGNvbnN0IHJvd01hcmt1cCA9IGN1c3RvbWVycy5tYXAoXHJcbiAgICAgICh7aWQsIG5hbWUsIGxvY2F0aW9uLCBvcmRlcnMsIGFtb3VudFNwZW50fSwgaW5kZXgpID0+IChcclxuICAgICAgICA8SW5kZXhUYWJsZS5Sb3dcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRSZXNvdXJjZXMuaW5jbHVkZXMoaWQpfVxyXG4gICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+e25hbWV9PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICA8L0luZGV4VGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxJbmRleFRhYmxlLkNlbGw+e2xvY2F0aW9ufTwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgPEluZGV4VGFibGUuQ2VsbD57b3JkZXJzfTwvSW5kZXhUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgPEluZGV4VGFibGUuQ2VsbD57YW1vdW50U3BlbnR9PC9JbmRleFRhYmxlLkNlbGw+XHJcbiAgICAgICAgPC9JbmRleFRhYmxlLlJvdz5cclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8SW5kZXhUYWJsZVxyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU9e3Jlc291cmNlTmFtZX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtkYXRhLnByb2R1Y3RzLmVkZ2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgICB7dGl0bGU6ICdJbWFnZSd9LFxyXG4gICAgICAgICAgICAgIHt0aXRsZTogJ1RpdGxlJ30sXHJcbiAgICAgICAgICAgICAge3RpdGxlOiAnUHJpY2UnfSxcclxuICAgICAgICAgICAgXX0gIFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAge3Jvd01hcmt1cH1cclxuICAgICAgICAgIDwvSW5kZXhUYWJsZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9