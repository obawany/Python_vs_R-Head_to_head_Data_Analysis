// @generated
(function(){var exports = {};(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, frame_messenger_client_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    // NOTE: this file is built outside of static build pipeline, and therefore don't have access
	    // to many of the bells and whistles
	    var PreviewFrameMessengerClient = (function (_super) {
	        __extends(PreviewFrameMessengerClient, _super);
	        function PreviewFrameMessengerClient() {
	            return _super.call(this, [
	                "https://www.dropbox.com",
	                "https://www.dropbox.com:443",
	                /^https:\/\/meta-[a-zA-Z0-9]+(-dbx)?\.dev\.corp\.dropbox\.com(:443)?$/,
	            ]) || this;
	        }
	        return PreviewFrameMessengerClient;
	    }(frame_messenger_client_1.FrameMessengerClient));
	    exports.PreviewFrameMessengerClient = PreviewFrameMessengerClient;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, frame_messenger_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var FrameMessengerClient = (function (_super) {
	        __extends(FrameMessengerClient, _super);
	        function FrameMessengerClient() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this._trustedOriginForPosting = null;
	            _this._validActions = [];
	            _this._parentMessageQueue = []; // Messages waiting to send once a verified parent origin is determined
	            _this._onParentReady = null; // called when the parent origin is validated and set
	            return _this;
	        }
	        // trustedMessageFromParentHandler: method to call to handle trusted messages from parent
	        // validActionsFromParent: array of action names from parent that should be processed.
	        FrameMessengerClient.prototype.configureParentMessaging = function (trustedMessageHandler, validActions, onParentReady) {
	            if (onParentReady === void 0) { onParentReady = null; }
	            this._trustedOriginForPosting = null;
	            this._validActions = validActions;
	            this._trustedMessageHandler = trustedMessageHandler;
	            this._onParentReady = onParentReady;
	        };
	        FrameMessengerClient.prototype.startListening = function () {
	            _super.prototype.startListening.call(this);
	            this.requestParentOrigin();
	        };
	        FrameMessengerClient.prototype.postMessageToParent = function (action, parameterJson) {
	            if (parameterJson === void 0) { parameterJson = {}; }
	            var message = this.packagePostMessage(action, parameterJson);
	            if (this._trustedOriginForPosting === null) {
	                this._parentMessageQueue.push(message);
	            }
	            else {
	                this.getWindow().parent.postMessage(message, this._trustedOriginForPosting);
	            }
	        };
	        FrameMessengerClient.prototype.dispatchMessage = function (event, messageJson) {
	            if (messageJson.action === "parent-ready") {
	                // This is a special message that is just for validating the parent origin.
	                this.updateParentOrigin(event.origin);
	            }
	            else if (__in__(messageJson.action, this._validActions) && (this._trustedMessageHandler !== null)) {
	                this._trustedMessageHandler(messageJson);
	            }
	        };
	        // Resets origin domains that we've identified for sending postMessage to
	        FrameMessengerClient.prototype.resetOriginsForPosting = function () {
	            this._trustedOriginForPosting = null;
	        };
	        FrameMessengerClient.prototype.updateParentOrigin = function (origin) {
	            var previousParentOrigin = this._trustedOriginForPosting;
	            if (!this.isOriginAllowed(origin)) {
	                return false;
	            }
	            this._trustedOriginForPosting = origin;
	            // Send any pending messages first
	            if (this._parentMessageQueue.length > 0) {
	                for (var i = 0; i < this._parentMessageQueue.length; i++) {
	                    var message = this._parentMessageQueue[i];
	                    var messageJson = JSON.parse(message);
	                    this.postMessageToParent(messageJson.action, messageJson.parameters);
	                }
	                this._parentMessageQueue = [];
	            }
	            if (this._trustedOriginForPosting != null && previousParentOrigin == null && this._onParentReady !== null) {
	                this._onParentReady();
	            }
	            return true;
	        };
	        FrameMessengerClient.prototype.requestParentOrigin = function () {
	            var _this = this;
	            // This is the only postMessage that is allowed '*' origin. It does not contain any
	            // sensitive information, rather, informs the parent to send a message so the child
	            // can register the parent's origin.
	            this.getWindow().parent.postMessage('{"action": "child-requesting-parent-origin"}', '*');
	            var tryRequestParentOrigin = function () {
	                if (_this._trustedOriginForPosting === null) {
	                    _this.requestParentOrigin();
	                }
	            };
	            this.getWindow().setTimeout(tryRequestParentOrigin, FrameMessengerClient._REQUEST_PARENT_ORIGIN_POLL_DELAY);
	        };
	        return FrameMessengerClient;
	    }(frame_messenger_base_1.FrameMessengerBase));
	    FrameMessengerClient._REQUEST_PARENT_ORIGIN_POLL_DELAY = 100; // in msec
	    exports.FrameMessengerClient = FrameMessengerClient;
	    function __in__(needle, haystack) {
	        return haystack.indexOf(needle) >= 0;
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Handles messaging between frames (to/from child frames and parent frame)
	// Note: FrameMessenger can support communication with a parent frame and child iframes (as is
	//     the case for the progressive preview iframe). Therefore, child and parent members can both
	//     be valid.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var FrameMessengerBase = (function () {
	        function FrameMessengerBase(allowedOrigins) {
	            var _this = this;
	            this._window = window;
	            this.handleUntrustedMessage = function (event) {
	                // Check if origin in parent + child whitelist
	                if (!_this.isOriginAllowed(event.origin)) {
	                    return;
	                }
	                var messageJson;
	                try {
	                    messageJson = JSON.parse(event.data);
	                }
	                catch (error) {
	                    return; // Bail if the message isn't proper JSON
	                }
	                if (!messageJson.action) {
	                    return;
	                }
	                _this.dispatchMessage(event, messageJson);
	            };
	            this.allowedOrigins = allowedOrigins;
	        }
	        FrameMessengerBase.prototype.getWindow = function () {
	            return this._window;
	        };
	        FrameMessengerBase.prototype.setWindow = function (window) {
	            this._window = window;
	        };
	        FrameMessengerBase.prototype.startListening = function () {
	            this.getWindow().addEventListener('message', this.handleUntrustedMessage);
	        };
	        FrameMessengerBase.prototype.stopListening = function () {
	            this.getWindow().removeEventListener('message', this.handleUntrustedMessage);
	        };
	        FrameMessengerBase.prototype.regexIn = function (needle, haystack) {
	            if (haystack.indexOf(needle) > -1) {
	                return true;
	            }
	            for (var _i = 0, haystack_1 = haystack; _i < haystack_1.length; _i++) {
	                var item = haystack_1[_i];
	                if (item instanceof RegExp && needle.match(item)) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        /**
	         * Strip standard port from origin. https://a.com:443 becomes https://a.com
	         * @param origin
	         */
	        FrameMessengerBase.stripStandardPort = function (origin) {
	            if (origin.substr(0, 7) === 'http://') {
	                return origin.replace(/:80/, '');
	            }
	            if (origin.substr(0, 8) === 'https://') {
	                return origin.replace(/:443$/, '');
	            }
	            return origin;
	        };
	        FrameMessengerBase.prototype.isOriginAllowed = function (origin) {
	            return this.regexIn(FrameMessengerBase.stripStandardPort(origin), this.allowedOrigins);
	        };
	        FrameMessengerBase.prototype.packagePostMessage = function (action, parameters) {
	            var message = { action: action, parameters: parameters };
	            return JSON.stringify(message);
	        };
	        return FrameMessengerBase;
	    }());
	    exports.FrameMessengerBase = FrameMessengerBase;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])));;window.FrameMessenger = exports.PreviewFrameMessengerClient;})();