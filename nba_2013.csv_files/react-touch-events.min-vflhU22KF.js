define(["external/react"],function(e){return(function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)})([function(n,t){n.exports=e},function(e,n,t){"use strict";(function(e){var r,o,u,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(a,c){"object"===i(n)&&"object"===i(e)?e.exports=c(t(0)):(o=[t(0)],r=c,u="function"==typeof r?r.apply(n,o):r,void 0!==u&&(e.exports=u))})(void 0,function(e){return(function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=8)})([function(e,n,t){function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,n,t){function r(e,n,t,r,u,i,a,c){if(o(n),!e){var f;if(void 0===n)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,r,u,i,a,c],l=0;f=new Error(n.replace(/%s/g,function(){return s[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var o=function(e){};o=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")},e.exports=r},function(e,n,t){var r=t(0),o=r;(function(){var e=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=0,u="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.error(u);try{throw new Error(u)}catch(e){}};o=function(n,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!n){for(var r=arguments.length,o=Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];e.apply(void 0,[t].concat(o))}}})(),e.exports=o},function(e,n,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===(void 0===e?"undefined":i(e))&&null!==e&&e.$$typeof===r};e.exports=t(7)(o,!0)},function(n,t){n.exports=e},function(e,n,t){function r(e,n,t,r,f){for(var s in e)if(e.hasOwnProperty(s)){var l;try{o("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",r||"React class",t,s),l=e[s](n,s,r,t,null,a)}catch(e){l=e}if(u(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",t,s,void 0===l?"undefined":i(l)),l instanceof Error&&!(l.message in c)){c[l.message]=!0;var p=f?f():"";u(!1,"Failed %s type: %s%s",t,l.message,null!=p?p:"")}}}var o=t(1),u=t(2),a=t(3),c={};e.exports=r},function(e,n,t){var r=t(0),o=t(1),u=t(2),a=t(3),c=t(6);e.exports=function(e,n){function t(e){var n=e&&(E&&e[E]||e["@@iterator"]);if("function"==typeof n)return n}function f(e,n){return e===n?0!==e||1/e===1/n:e!==e&&n!==n}function s(e){this.message=e,this.stack=""}function l(e){function t(t,c,f,l,p,d,y){if(l=l||"<<anonymous>>",d=d||f,y!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var h=l+":"+f;!r[h]&&i<3&&(u(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,l),r[h]=!0,i++)}return null==c[f]?t?new s(null===c[f]?"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(c,f,l,p,d)}var r={},i=0,c=t.bind(null,!1);return c.isRequired=t.bind(null,!0),c}function p(e){function n(n,t,r,o,u,i){var a=n[t];if(S(a)!==e)return new s("Invalid "+o+" `"+u+"` of type `"+P(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(n)}function d(){return l(r.thatReturnsNull)}function y(e){function n(n,t,r,o,u){if("function"!=typeof e)return new s("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=n[t];if(!Array.isArray(i)){return new s("Invalid "+o+" `"+u+"` of type `"+S(i)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<i.length;c++){var f=e(i,c,r,o,u+"["+c+"]",a);if(f instanceof Error)return f}return null}return l(n)}function h(){function n(n,t,r,o,u){var i=n[t];if(!e(i)){return new s("Invalid "+o+" `"+u+"` of type `"+S(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(n)}function v(e){function n(n,t,r,o,u){if(!(n[t]instanceof e)){var i=e.name||"<<anonymous>>";return new s("Invalid "+o+" `"+u+"` of type `"+j(n[t])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return l(n)}function b(e){function n(n,t,r,o,u){for(var i=n[t],a=0;a<e.length;a++)if(f(i,e[a]))return null;return new s("Invalid "+o+" `"+u+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(n):(u(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(e){function n(n,t,r,o,u){if("function"!=typeof e)return new s("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=n[t],c=S(i);if("object"!==c)return new s("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in i)if(i.hasOwnProperty(f)){var l=e(i,f,r,o,u+"."+f,a);if(l instanceof Error)return l}return null}return l(n)}function g(e){function n(n,t,r,o,u){for(var i=0;i<e.length;i++){if(null==(0,e[i])(n,t,r,o,u,a))return null}return new s("Invalid "+o+" `"+u+"` supplied to `"+r+"`.")}return Array.isArray(e)?l(n):(u(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull)}function w(){function e(e,n,t,r,o){return x(e[n])?null:new s("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}return l(e)}function T(e){function n(n,t,r,o,u){var i=n[t],c=S(i);if("object"!==c)return new s("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(i,f,r,o,u+"."+f,a);if(p)return p}}return null}return l(n)}function x(n){switch(void 0===n?"undefined":i(n)){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(x);if(null===n||e(n))return!0;var r=t(n);if(!r)return!1;var o,u=r.call(n);if(r!==n.entries){for(;!(o=u.next()).done;)if(!x(o.value))return!1}else for(;!(o=u.next()).done;){var a=o.value;if(a&&!x(a[1]))return!1}return!0;default:return!1}}function O(e,n){return"symbol"===e||("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}function S(e){var n=void 0===e?"undefined":i(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":O(n,e)?"symbol":n}function P(e){var n=S(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function j(e){return e.constructor&&e.constructor.name?e.constructor.name:"<<anonymous>>"}var E="function"==typeof Symbol&&Symbol.iterator,R={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:y,element:h(),instanceOf:v,node:w(),objectOf:m,oneOf:b,oneOfType:g,shape:T};return s.prototype=Error.prototype,R.checkPropTypes=c,R.PropTypes=R,R}},function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":i(n))&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":i(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return e.touches[0].clientX}function c(e){return e.touches[0].clientY}var f=(function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}})(),s=t(5),l=t(4),p=(function(e){function n(){var e,t,u,i;r(this,n);for(var f=arguments.length,s=Array(f),l=0;l<f;l++)s[l]=arguments[l];return t=u=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),u.handleTouchStart=function(e){u.touchStarted||(u.touchStarted=!0,u.touchMoved=!1,u.swipeOutBounded=!1,u.startX=a(e),u.startY=c(e),u.currentX=0,u.currentY=0)},u.handleTouchMove=function(e){if(u.currentX=a(e),u.currentY=c(e),u.touchMoved){if(!u.swipeOutBounded){var n=u.props.swipeTolerance;u.swipeOutBounded=Math.abs(u.startX-u.currentX)>n&&Math.abs(u.startY-u.currentY)>n}}else{var t=u.props.tapTolerance;u.touchMoved=Math.abs(u.startX-u.currentX)>t||Math.abs(u.startY-u.currentY)>t}},u.handleTouchCancel=function(){u.touchStarted=u.touchMoved=!1,u.startX=u.startY=0},u.handleTouchEnd=function(e){if(u.touchStarted=!1,u.touchMoved){if(!u.swipeOutBounded&&u.props.onSwipe){var n=u.props.swipeTolerance,t=void 0;t=Math.abs(u.startX-u.currentX)<n?u.startY>u.currentY?"top":"bottom":u.startX>u.currentX?"left":"right",u.props.onSwipe(t,e)}}else u.props.onTap&&u.props.onTap(e)},i=t,o(u,i)}return u(n,e),f(n,[{key:"render",value:function(){var e=this.props.children,n=e?s.Children.only(e):s.createElement("button",null);return s.cloneElement(n,{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchCancel:this.handleTouchCancel,onTouchEnd:this.handleTouchEnd})}}]),n})(s.Component);p.defaultProps={tapTolerance:10,swipeTolerance:30},p.propTypes={children:l.node,tapTolerance:l.number,swipeTolerance:l.number,onTap:l.func,onSwipe:l.func},e.exports=p}])})}).call(n,t(2)(e))},function(e,n,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});
//# sourceMappingURL=react-touch-events.bundled.min.js-vflOQAXlW.map