import e from"react";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach(function(n){t(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}class o extends e.Component{constructor(t){super(t),this._ref=e.createRef()}componentDidMount(){l.call(this,null)}componentDidUpdate(e){let t;e.style!==this.props.style&&(Object.keys(e.style).forEach(n=>{t=e.style[n],this.props.style.hasOwnProperty(n)||t.instance.removeCallbackWithKey(n)}),l.call(this,t))}componentWillUnmount(){let e;Object.keys(this.props.style).forEach(t=>{"function"==typeof(e=this.props.style[t]).run&&e.instance.removeCallbackWithKey(t)})}render(){const t=this.props,{animatedProps:n,children:r,forwaredRef:o,style:l,type:c}=t,u=i(t,["animatedProps","children","forwaredRef","style","type"]);return e.createElement(c,s({},u,{style:a(l),ref:e=>{o&&(o.current=e),this._ref.current=e}}),r)}}function l(e){Object.keys(this.props.style).forEach(t=>{"function"==typeof(e=this.props.style[t]).run&&e.instance.addCallbackWithKey(t,e.run(this._ref.current,t))})}function a(e){return Object.keys(e).reduce((t,n)=>("string"==typeof e[n]&&(t[n]=e[n]),t),{})}const c={};var u=new Proxy(o,{get:(t,r)=>c[r]||(c[r]=e.forwardRef((t,s)=>{let{children:l}=t,a=i(t,["children"]);return e.createElement(o,n({forwaredRef:s,type:r},a),l)}))});class f{get length(){return this._keys.length}get config(){return this._config}constructor(e,t){this._callbacks=new Map,this._done=!1,this._keys=[],this._values={},this._config=s({initialVelocity:0,friction:26,mass:1,precision:.01,tension:170,onEnd:h},t);for(let t in e)this._values[t]={done:!1,toValue:e[t],lastPosition:e[t],lastTime:void 0,lastVelocity:void 0},this._keys.push(t)}removeCallbackWithKey(e){this._callbacks.delete(e)}addCallbackWithKey(e,t){this._callbacks.set(e,t),t(this._values)}onEnd(){this._done=!0,this._config.onEnd()}updateValue(){for(let[e,t]of this._callbacks)t(this._values)}set(e){for(let t in e)this._values.hasOwnProperty(t)&&this._values[t]!==e[t]&&(this._done=!1,this._values[t]=s({},this._values[t],{done:!1,lastVelocity:void 0,toValue:e[t]}))}get(e){return this._values[e].lastPosition}pause(){for(let e in this._values)this._values[e]=s({},this._values[e],{done:!0})}resume(){for(let e in this._values)this._values[e]=s({},this._values[e],{done:!1})}getValues(e){return this._values[this._keys[e]]}}function h(){}class p{static getInstance(){return p._instance||(p._instance=new p)}constructor(){t(this,"update",()=>{let e,t,n=!1,r=Date.now();for(let s=0;s<p.QUEUE.length;s++){const i=p.QUEUE[s];let o=i.config;e=!0;for(let s=0;s<i.length;s++){const l=i.getValues(s);if(l.done)continue;e=!1;let a=l.toValue,c=l.lastPosition,u=o.initialVelocity;if(o.easing)l.startTime||(l.from=l.lastPosition,l.startTime=r),c=l.from+o.easing((r-l.startTime)/o.duration)*(a-l.from),(n=r>=l.startTime+o.duration)&&(l.startTime=0);else{t=void 0!==l.lastTime?l.lastTime:r,u=void 0!==l.lastVelocity?l.lastVelocity:o.initialVelocity,r>t+64&&(t=r);let e=Math.floor(r-t);for(let t=0;t<e;++t){c+=1*(u+=1*((-o.tension*(c-a)+-o.friction*u)/o.mass)/1e3)/1e3}n=Math.abs(u)<=o.precision&&Math.abs(a-c)<=o.precision,l.lastVelocity=u,l.lastTime=r}n&&(l.value!==a&&(c=a),l.done=!0),l.lastPosition=c}!e&&i.updateValue(),e&&!i._done&&i.onEnd()}requestAnimationFrame(this.update)}),"function"==typeof requestAnimationFrame&&requestAnimationFrame(this.update)}add(e){return e instanceof f&&p.QUEUE.push(e),this}remove(e){for(let t=0;t<p.QUEUE.length;t++)p.QUEUE[t]===e&&p.QUEUE.splice(t,1);return this}}function y(t,n){const r=e.useRef(null),[s,i]=e.useState(null);return r.current||(r.current=new f(t,n),p.getInstance().add(r.current)),e.useEffect(()=>()=>{p.getInstance().remove(r.current)},[]),[s||r.current,e=>{r.current.set(e),i(r.current)}]}function d(e,t){return{instance:e,run:(e,n)=>-1===n.indexOf("--")?r=>{e.style[n]=t(r)}:r=>{e.style.setProperty(n,t(r))}}}t(p,"QUEUE",[]),t(p,"_instance",null);export{u as Animated,f as Animation,p as AnimationManager,d as interpolate,y as useSpring};