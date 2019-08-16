webpackJsonp([0],{

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Mark'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'filter' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'inside' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Filter'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'neighborhood', className: 'filters neighborhood' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'Ridgewood'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'housetype', className: 'filters housetype' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'Ranch'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              '2 BR'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters price' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min-price', className: 'min-price' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max-price', className: 'max-price' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters floor-space' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min-floor-space', className: 'min-floor-space' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max-floor-space', className: 'max-floor-space' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters extras' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { 'for': 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Elevators'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'extras', value: 'elevator', type: 'checkbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { 'for': 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'extras', value: 'swimming-pool', type: 'checkbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { 'for': 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'extras', value: 'finished-basement', type: 'checkbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { 'for': 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Gym'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'extras', value: 'gym', type: 'checkbox' })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Mark'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Create ads'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'About us'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: "Mark"
    };
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "section",
        { id: "listings" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { className: "search-area" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "search" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { className: "sortby-area" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "results" },
            "390 results found"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "sort-options" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "select",
              { name: "sortby", className: "sortby" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "price-asc" },
                "Lowest Price"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "view" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-th-list", "aria-hidden": "true" }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-th", "aria-hidden": "true" })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { className: "listings-results" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "col-md-3" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "listing" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "listing-img" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "address" },
                  "75 Temple Ave"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "details" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "user-img" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-9" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "user-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "user-name" },
                        "Mark Donatelli"
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "post-date" },
                        "05/08/19"
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "listing-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "floor-space" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bedrooms" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "bottom-info" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "location" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  "Ridgewood, NY"
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "col-md-3" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "listing" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "listing-img" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "address" },
                  "75 Temple Ave"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "details" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "user-img" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-9" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "user-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "user-name" },
                        "Mark Donatelli"
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "post-date" },
                        "05/08/19"
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "listing-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "floor-space" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bedrooms" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "bottom-info" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "location" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  "Ridgewood, NY"
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "col-md-3" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "listing" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "listing-img" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "address" },
                  "75 Temple Ave"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "details" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "user-img" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-9" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "user-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "user-name" },
                        "Mark Donatelli"
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "post-date" },
                        "05/08/19"
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "listing-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "floor-space" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bedrooms" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "bottom-info" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "location" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  "Ridgewood, NY"
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "col-md-3" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "listing" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "listing-img" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "address" },
                  "75 Temple Ave"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "details" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "user-img" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-9" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "user-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "user-name" },
                        "Mark Donatelli"
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "post-date" },
                        "05/08/19"
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "listing-details" },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "floor-space" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bedrooms" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "bottom-info" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "location" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  "Ridgewood, NY"
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { className: "pagination" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            { className: "pagination-numbers" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "Prev"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "1"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "2"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "3"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "4"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "5"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Listings);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter_js__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Listings_js__ = __webpack_require__(232);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Mark'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { id: 'content-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Filter_js__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Listings_js__["a" /* default */], null)
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), app);

/***/ })

},[236]);