var Spring=function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function y(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return function(){var e,n=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return y(this,e)}}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(i,e.Component);var r=p(i);function i(t){var o;return n(this,i),(o=r.call(this,t))._ref=e.createRef(),o}return o(i,[{key:"componentDidMount",value:function(){var t,e=this;Object.keys(this.props.style).forEach(function(n){"function"==typeof(t=e.props.style[n]).run&&t.instance.addCallbackWithKey(n,t.run(e._ref.current,n))})}},{key:"componentDidUpdate",value:function(t){var e,n=this;t.style!==this.props.style&&(Object.keys(t.style).forEach(function(r){e=t.style[r],n.props.style.hasOwnProperty(r)||e.instance.removeCallbackWithKey(r)}),Object.keys(this.props.style).forEach(function(t){"function"==typeof(e=n.props.style[t]).run&&e.instance.addCallbackWithKey(t,e.run(n._ref.current,t))}))}},{key:"componentWillUnmount",value:function(){var t,e=this;Object.keys(this.props.style).forEach(function(n){"function"==typeof(t=e.props.style[n]).run&&t.instance.removeCallbackWithKey(n)})}},{key:"render",value:function(){var t=this.props,n=t.children,r=t.type,o=(t.animatedProps,t.style),i=f(t,["children","type","animatedProps","style"]);return e.createElement(r,c({},i,{style:m(o),ref:this._ref}),n)}}]),i}();function m(t){return Object.keys(t).reduce(function(e,n){return"string"==typeof t[n]&&(e[n]=t[n]),e},{})}var O={},g=new Proxy(d,{get:function(t,n){return O[n]||(O[n]=e.forwardRef(function(t,r){var o=t.children,i=f(t,["children"]);return e.createElement(d,a({ref:r,type:n},i),o)}))}}),j=function(){function t(){var e=this;n(this,t),i(this,"update",function(){for(var n=Date.now(),r=0;r<t.QUEUE.length;r++)for(var o=t.QUEUE[r],i=o.config,a=void 0,u=0;u<o.length;u++){var c=o.getValues(u);if(!c.done){var l=c.toValue,s=c.lastPosition,f=i.initialVelocity;a=void 0!==c.lastTime?c.lastTime:n,f=void 0!==c.lastVelocity?c.lastVelocity:i.initialVelocity,n>a+64&&(a=n);for(var y=Math.floor(n-a),p=0;p<y;++p){s+=1*(f+=1*((-i.tension*(s-l)+-i.friction*f)/i.mass)/1e3)/1e3}var h=Math.abs(f)<=i.precision,v=Math.abs(l-s)<=i.precision;c.lastVelocity=f,c.lastTime=n,h&&v&&(c.value!==l&&(s=l),c.done=!0),c.lastPosition=s,o.updateValue()}}requestAnimationFrame(e.update)}),"function"==typeof requestAnimationFrame&&requestAnimationFrame(this.update)}return o(t,null,[{key:"getInstance",value:function(){return t._instance||(t._instance=new t)}}]),o(t,[{key:"add",value:function(e){return e instanceof k&&t.QUEUE.push(e),this}},{key:"remove",value:function(e){for(var n=0;n<t.QUEUE.length;n++)t.QUEUE[n]===e&&t.QUEUE.splice(n,1);return this}}]),t}();i(j,"QUEUE",[]),i(j,"_instance",null);var k=function(){function t(e,r){for(var o in n(this,t),this._callbacks=new Map,this._keys=[],this._values={},this._config=c({initialVelocity:0,friction:26,mass:1,precision:.01,tension:170},r),e)this._values[o]={done:!1,toValue:e[o],lastPosition:e[o],lastTime:void 0,lastVelocity:void 0},this._keys.push(o)}return o(t,[{key:"length",get:function(){return this._keys.length}},{key:"config",get:function(){return this._config}}]),o(t,[{key:"removeCallbackWithKey",value:function(t){this._callbacks.delete(t)}},{key:"addCallbackWithKey",value:function(t,e){this._callbacks.set(t,e)}},{key:"updateValue",value:function(){var t,e=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=v(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}(this._callbacks);try{for(e.s();!(t=e.n()).done;){var n=h(t.value,2);n[0];(0,n[1])(this._values)}}catch(t){e.e(t)}finally{e.f()}}},{key:"set",value:function(t){for(var e in t)this._values.hasOwnProperty(e)&&this._values[e]!==t[e]&&(this._values[e]=c({},this._values[e],{done:!1,lastVelocity:void 0,toValue:t[e]}))}},{key:"getValues",value:function(t){return this._values[this._keys[t]]}}]),t}();return t.Animated=g,t.Animation=k,t.AnimationManager=j,t.interpolate=function(t,e){return{instance:t,run:function(t,n){return-1===n.indexOf("--")?function(r){t.style[n]=e(r)}:function(r){t.style.setProperty(n,e(r))}}}},t.useSpring=function(t,n){var r=e.useRef(null),o=h(e.useState(null),2),i=o[0],a=o[1];return r.current||(r.current=new k(t,n),j.getInstance().add(r.current)),e.useEffect(function(){return function(){j.getInstance().remove(r.current)}},[]),[i||r.current,function(t){r.current.set(t),a(r.current)}]},t}({},React);