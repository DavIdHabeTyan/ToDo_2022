/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/posts.js":
/*!*********************************!*\
  !*** ./src/js/modules/posts.js ***!
  \*********************************/
/***/ ((module) => {

module.exports = function posts(parent, postTitle, postText) {
   const post = document.createElement("div");
   const h3 = document.createElement("h3");
   const p = document.createElement("p");

   parent.append(post);
   post.append(h3);
   post.append(p);

   post.classList.add("post");
   h3.classList.add("post_title");
   p.classList.add("post_text");

   h3.textContent = postTitle;
   p.textContent = postText;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
const posts = __webpack_require__(/*! ./modules/posts */ "./src/js/modules/posts.js");


const root = document.querySelector("#root");
const input = document.querySelector("#root input");
const text = document.querySelector("#root textarea");


posts(document.querySelector(".posts"), input.value, text.value);

root.addEventListener("submit", (e) => {
   e.preventDefault();
})
})();

/******/ })()
;
//# sourceMappingURL=build.js.map