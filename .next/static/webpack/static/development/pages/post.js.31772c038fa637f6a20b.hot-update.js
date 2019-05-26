webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);








var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("head", {
    className: "jsx-557742157"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-557742157"
  }, props.beer.name)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-557742157"
  }, props.beer.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: props.beer.image_url,
    className: "jsx-557742157"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-557742157"
  }, props.beer.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "557742157"
  }, "img.jsx-557742157{max-height:200px;float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnYmFudmlsbGUvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUcwQixpQkFDTixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kb3VnYmFudmlsbGUvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgUG9zdCA9IHByb3BzID0+IChcbiAgPExheW91dD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT57cHJvcHMuYmVlci5uYW1lfTwvdGl0bGU+XG4gICAgPC9oZWFkPlxuICAgIDxoMT57cHJvcHMuYmVlci5uYW1lfTwvaDE+XG4gICAgPGltZyBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxuICAgIDxwPntwcm9wcy5iZWVyLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnNvbGUubG9nKGNvbnRleHQucXVlcnkpO1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnMvJHtpZH1gKTtcbiAgY29uc3QgYmVlcnMgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBiZWVyID0gYmVlcnNbMF07XG4gIGNvbnNvbGUubG9nKGJlZXIpO1xuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBiZWVyOiAke2JlZXIubmFtZX1gKTtcblxuICByZXR1cm4geyBiZWVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBvc3QpO1xuIl19 */\n/*@ sourceURL=/Users/dougbanville/hello-next/pages/post.js */"));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, beers, beer;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(context.query);
            id = context.query.id;
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.punkapi.com/v2/beers/".concat(id));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            beers = _context.sent;
            beer = beers[0];
            console.log(beer);
            console.log("Fetched beer: ".concat(beer.name));
            return _context.abrupt("return", {
              beer: beer
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Post));

/***/ })

})
//# sourceMappingURL=post.js.31772c038fa637f6a20b.hot-update.js.map