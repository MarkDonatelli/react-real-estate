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
      name: "Mark"
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "section",
        { id: "filter" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "inside" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            null,
            "Filter"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "select",
            {
              name: "neighborhood",
              className: "filters neighborhood",
              onChange: this.props.change
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Ridgewood" },
              "Ridgewood"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Boston" },
              "Boston"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Miami" },
              "Miami"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "select",
            {
              name: "housetype",
              className: "filters housetype",
              onChange: this.props.change
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Ranch" },
              "Ranch"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Apartment" },
              "Apartment"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Studio" },
              "Studio"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "Room" },
              "Room"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms",
              onChange: this.props.change
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "1" },
              "1 BR"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "2" },
              "2 BR"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "3" },
              "3 BR"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "option",
              { value: "4" },
              "4 BR"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "filters price" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "filters floor-space" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "filters extras" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "extras" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                null,
                "Elevators"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                name: "elevator",
                value: "elevator",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "extras" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                name: "swimming_pool",
                value: "swimming_pool",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "extras" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                name: "finished_basement",
                value: "finished-basement",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "extras" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                null,
                "Gym"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                name: "gym",
                value: "gym",
                type: "checkbox",
                onChange: this.props.change
              })
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
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: "loopListings",
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      return listingsData.map(function (listing, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "col-md-3", key: index },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "listing" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              {
                className: "listing-img",
                style: {
                  background: "url(\"" + listing.image + "\")\n        no-repeat center center"
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { className: "address" },
                listing.address
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
                        listing.bedrooms,
                        " bedrooms"
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
                "$",
                listing.price
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { className: "location" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                listing.city,
                ", ",
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
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
          this.loopListings()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { id: "pagination" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            { className: "pages" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              "Prev"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              { className: "active" },
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listingsData = [{
  address: "675 Bennington",
  city: "East Boston",
  state: "MA",
  rooms: 3,
  price: 220000,
  floorspace: 2000,
  extras: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://www.nreionline.com/sites/nreionline.com/files/styles/article_featured_standard/public/apartment%20building%20white%20modern-ts-680603734.jpg?itok=S6dFFnxu"
}, {
  address: "80 Ridge Street",
  city: "New York",
  state: "NY",
  rooms: 7,
  price: 620000,
  floorspace: 6000,
  extras: ["elevator", "gym"],
  homeType: "House",
  image: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-j1fayld7-edgewood-management-client/g5-cl-1gw3pfzyew-the-grove-at-parkside/uploads/hero.jpg"
}, {
  address: "34 Grand ave",
  city: "Minneapolis",
  state: "MN",
  rooms: 6,
  price: 620000,
  floorspace: 1000,
  extras: ["elevator", "gym"],
  homeType: "House",
  image: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg"
}, {
  address: "300 Park Street",
  city: "San Diego",
  state: "CA",
  rooms: 4,
  price: 420000,
  floorspace: 5000,
  extras: ["elevator", "gym"],
  homeType: "Condo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1aQsRzntyTvyGe_PVaaKiDJ-N68lwFQyEE0cjME0GByYnZwS"
}, {
  address: "8000 Miami Blvd",
  city: "Miami",
  state: "FL",
  rooms: 6,
  price: 720000,
  floorspace: 6000,
  extras: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://www.poconnor.com/wp-content/uploads/2006/03/Apartment.jpg"
}, {
  address: "30 Guitar Way",
  city: "Atlanta",
  state: "GA",
  rooms: 8,
  price: 720000,
  floorspace: 6000,
  extras: ["elevator", "gym"],
  homeType: "Condo",
  image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/community/camden-phipps/headers/camden-phipps-apartments-buckhead-georgia-pool.jpg"
}, {
  address: "34 Mark Ave",
  city: "Winthrop",
  state: "MA",
  rooms: 6,
  price: 420000,
  floorspace: 5000,
  extras: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://weleaseocala.com/wp-content/uploads/2016/11/Ocala-apartments-for-rent.jpg"
}, {
  address: "10 Laurel",
  city: "Revere",
  state: "MA",
  rooms: 3,
  price: 920000,
  floorspace: 8000,
  extras: ["elevator", "gym"],
  homeType: "House",
  image: "https://photos.zillowstatic.com/p_e/IS62966drj26pp0000000000.jpg"
}, {
  address: "3000 Eh Street",
  city: "Los Angeles",
  state: "CA",
  rooms: 7,
  price: 920000,
  floorspace: 8000,
  extras: ["elevator", "gym"],
  homeType: "House",
  image: "https://cdn.geekwire.com/wp-content/uploads/2018/05/ISm2ws8xojvwbs1000000000.jpg"
}];

/* harmony default export */ __webpack_exports__["a"] = (listingsData);

/***/ }),

/***/ 237:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__ = __webpack_require__(233);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Mark",
      listingsData: __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__["a" /* default */],
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false
    };
    _this.change = _this.change.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "section",
          { id: "content-area" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Filter_js__["a" /* default */], { change: this.change, globalState: this.state }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Listings_js__["a" /* default */], { listingsData: this.state.listingsData })
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var app = document.getElementById("app");

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), app);

/***/ })

},[237]);