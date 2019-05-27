webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyBeer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyBeer */ "./components/MyBeer.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/dist/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);










var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_8___default.a, {
    config: {
      title: "Simple Usage Example",
      description: "A short description goes here."
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-2867480869"
  }, "Beers!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2867480869" + " " + "grid-container"
  }, props.beers.map(function (beer) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: beer.id,
      className: "jsx-2867480869" + " " + "grid-x grid-margin-x"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: beer.id,
      className: "jsx-2867480869" + " " + "cell small-12 large-6"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: "".concat(beer.image_url),
      className: "jsx-2867480869"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      as: "/p/".concat(beer.id),
      href: "/post?id=".concat(beer.id)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-2867480869"
    }, beer.name))));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2867480869"
  }, "img.jsx-2867480869{max-height:100px;float:left;}h1.jsx-2867480869,a.jsx-2867480869{font-family:\"Arial\";}ul.jsx-2867480869{padding:0;}li.jsx-2867480869{list-style:none;margin:5px 0;height:120px;}a.jsx-2867480869{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2867480869:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnYmFudmlsbGUvbmV4dC5qcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBRzBCLEFBS0csQUFJVixBQUlNLEFBTUssQUFLVCxVQWRkLEVBZUEsSUFYZSxDQWJGLEdBS2IsUUFKQSxDQWFlLGFBQ2YsUUFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kb3VnYmFudmlsbGUvbmV4dC5qcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTXlCZWVyIGZyb20gXCIuLi9jb21wb25lbnRzL015QmVlclwiO1xuaW1wb3J0IE5leHRTZW8gZnJvbSBcIm5leHQtc2VvXCI7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxOZXh0U2VvXG4gICAgICBjb25maWc9e3tcbiAgICAgICAgdGl0bGU6IFwiU2ltcGxlIFVzYWdlIEV4YW1wbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUuXCJcbiAgICAgIH19XG4gICAgLz5cbiAgICA8aDE+QmVlcnMhPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMuYmVlcnMubWFwKGJlZXIgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBncmlkLW1hcmdpbi14XCIga2V5PXtiZWVyLmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTIgbGFyZ2UtNlwiIGtleT17YmVlci5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7YmVlci5pbWFnZV91cmx9YH0gLz5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtiZWVyLmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke2JlZXIuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntiZWVyLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnM/cGFnZT0yJnBlcl9wYWdlPTgwXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIGJlZXJzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/dougbanville/next.js/pages/index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.punkapi.com/v2/beers?page=2&per_page=80");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            beers: data.map(function (entry) {
              return entry;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e0628878010dafe40bbb.hot-update.js.map