webpackHotUpdate(0,{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://newsapi.org/v2/everything?';
const apiKey = 'e79543cdac79424d903e67af4125a6d4';

const httpClient = {
  getParams() {
    const articleName = __WEBPACK_IMPORTED_MODULE_0__index__["newsPagination"].sourceId;
    const page = __WEBPACK_IMPORTED_MODULE_0__index__["newsPagination"].pageNumber;
    const params = `sources=${articleName}&apiKey=${apiKey}&page=${page}`;
    return proxyurl + apiUrl + params;
  },
  get() {
    const url = this.getParams();
    fetch(url)
      .then(resp => resp.json())
      .then(data => Object(__WEBPACK_IMPORTED_MODULE_0__index__["appendNews"])(data))
      .catch((error) => {
        console.log(error);
      });
  },

};
/* harmony default export */ __webpack_exports__["a"] = (httpClient);


/***/ })

})