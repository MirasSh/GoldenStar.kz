(self.webpackChunkswiper_react_autoplay_progress=self.webpackChunkswiper_react_autoplay_progress||[]).push([[351],{7012:function(e){var t,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i=(e,t,n)=>new Promise(((r,a)=>{var o=e=>{try{c(n.next(e))}catch(t){a(t)}},i=e=>{try{c(n.throw(e))}catch(t){a(t)}},c=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);c((n=n.apply(e,t)).next())})),c={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(c,{SubmissionError:()=>f,appendExtraData:()=>v,createClient:()=>S,getDefaultClient:()=>N,isSubmissionError:()=>m}),e.exports=(t=c,((e,t,i,c)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))!o.call(e,s)&&s!==i&&n(e,s,{get:()=>t[s],enumerable:!(c=r(t,s))||c.enumerable});return e})(n({},"__esModule",{value:!0}),t));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!l.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,a="",o=0;o<e.length;)t=s.indexOf(e.charAt(o++))<<18|s.indexOf(e.charAt(o++))<<12|(n=s.indexOf(e.charAt(o++)))<<6|(r=s.indexOf(e.charAt(o++))),a+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return a}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom;function m(e){return"error"===e.kind}var f=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let n of e){if(!n.field){this.formErrors.push({code:n.code&&p(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let e=null!=(t=this.fieldErrors.get(n.field))?t:[];e.push({code:n.code&&E(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function p(e){return e in d}var d={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function E(e){return e in y}var y={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var h=e=>function(e){for(var t,n,r,a,o="",i=0,c=(e=String(e)).length%3;i<e.length;){if((n=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(a=e.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");o+=s.charAt((t=n<<16|r<<8|a)>>18&63)+s.charAt(t>>12&63)+s.charAt(t>>6&63)+s.charAt(63&t)}return c?o.slice(0,c-3)+"===".substring(c):o}(JSON.stringify(e)),g=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function v(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}function b(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var w,S=e=>new class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}})}submitForm(e,t){return i(this,arguments,(function*(e,t,n={}){let r=n.endpoint||"https://formspree.io",a=this.project?`${r}/p/${this.project}/f/${e}`:`${r}/f/${e}`,o={Accept:"application/json","Formspree-Client":g(n.clientName)};function c(e){return i(this,null,(function*(){try{let t=yield(yield fetch(a,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:o})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new f(...t.errors):new f({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}}(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new class{constructor(e){this.kind="success",this.next=e.next}}({next:t.next})}return new f({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new f({message:e})}}))}if(this.session&&(o["Formspree-Session-Data"]=h(this.session.data())),t instanceof FormData||(o["Content-Type"]="application/json"),this.stripe&&n.createPaymentMethod){let e=yield n.createPaymentMethod();if(e.error)return new f({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});v(t,"paymentMethod",e.paymentMethod.id);let r=yield c(t);if("error"===r.kind)return r;if("stripePluginPending"===r.kind){let e=yield this.stripe.handleCardAction(r.paymentIntentClientSecret);if(e.error)return new f({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,v(t,"paymentIntent",e.paymentIntent.id),v(t,"resubmitKey",r.resubmitKey);let n=yield c(t);return b(n),n}return r}let s=yield c(t);return b(s),s}))}}(e),N=()=>(w||(w=S()),w)},6664:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return c(e)||s(e,t)||l(e,t)||m()}function c(e){if(Array.isArray(e))return e}function s(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function E(){}E.resetWarningCache=d;var y=function(){function e(e,t,n,r,a,o){if(o!==p){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:E,resetWarningCache:d};return n.PropTypes=n,n},h=f((function(e){e.exports=y()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},v=function(e){return null!==e&&"object"===a(e)},b=function(e){return v(e)&&"function"==typeof e.then},w=function(e){return v(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},S="[object Object]",N=function e(t,n){if(!v(t)||!v(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a=Object.prototype.toString.call(t)===S;if(a!==(Object.prototype.toString.call(n)===S))return!1;if(!a&&!r)return t===n;var o=Object.keys(t),i=Object.keys(n);if(o.length!==i.length)return!1;for(var c={},s=0;s<o.length;s+=1)c[o[s]]=!0;for(var l=0;l<i.length;l+=1)c[i[l]]=!0;var u=Object.keys(c);if(u.length!==o.length)return!1;var m=t,f=n,p=function(t){return e(m[t],f[t])};return u.every(p)},C=function(e,t,n){return v(e)?Object.keys(e).reduce((function(a,i){var c=!v(t)||!N(e[i],t[i]);return n.includes(i)?(c&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),a):c?r(r({},a||{}),{},o({},i,e[i])):a}),null):null},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){if(null===e||w(e))return e;throw new Error(O)},_=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(k)};var t=k(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},I=t.createContext(null);I.displayName="CartElementContext";var x=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},j=function(e){var n=e.stripe,r=e.options,a=e.children,o=t.useMemo((function(){return _(n)}),[n]),c=i(t.useState(null),2),s=c[0],l=c[1],u=i(t.useState(null),2),m=u[0],f=u[1],p=i(t.useState((function(){return{stripe:"sync"===o.tag?o.stripe:null,elements:"sync"===o.tag?o.stripe.elements(r):null}})),2),d=p[0],E=p[1];t.useEffect((function(){var e=!0,t=function(e){E((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==o.tag||d.stripe?"sync"!==o.tag||d.stripe||t(o.stripe):o.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[o,d,r]);var y=g(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var h=g(r);return t.useEffect((function(){if(d.elements){var e=C(r,h,["clientSecret","fonts"]);e&&d.elements.update(e)}}),[r,h,d.elements]),t.useEffect((function(){var e=d.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[d.stripe]),t.createElement(P.Provider,{value:d},t.createElement(I.Provider,{value:{cart:s,setCart:l,cartState:m,setCartState:f}},a))};j.propTypes={stripe:h.any,options:h.object};var L=function(e){var n=t.useContext(P);return A(n,e)},T=function(e){var n=t.useContext(I);return x(n,e)},F=function(){return L("calls useElements()").elements},R=function(){return L("calls useStripe()").stripe},D=function(){return T("calls useCartElement()").cart},M=function(){return T("calls useCartElementState()").cartState},B=function(e){return(0,e.children)(L("mounts <ElementsConsumer>"))};B.propTypes={children:h.func.isRequired};var U=function(e,n,r){var a=!!r,o=t.useRef(r);t.useEffect((function(){o.current=r}),[r]),t.useEffect((function(){if(!a||!e)return function(){};var t=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[a,n,e,o])},Y=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},$=function(e,n){var r="".concat(Y(e),"Element"),a=n?function(e){L("mounts <".concat(r,">")),T("mounts <".concat(r,">"));var n=e.id,a=e.className;return t.createElement("div",{id:n,className:a})}:function(n){var a,o=n.id,c=n.className,s=n.options,l=void 0===s?{}:s,u=n.onBlur,m=n.onFocus,f=n.onReady,p=n.onChange,d=n.onEscape,E=n.onClick,y=n.onLoadError,h=n.onLoaderStart,v=n.onNetworksChange,b=n.onCheckout,w=n.onLineItemClick,S=n.onConfirm,N=n.onCancel,O=n.onShippingAddressChange,k=n.onShippingRateChange,_=L("mounts <".concat(r,">")).elements,P=i(t.useState(null),2),A=P[0],I=P[1],x=t.useRef(null),j=t.useRef(null),F=T("mounts <".concat(r,">")),R=F.setCart,D=F.setCartState;U(A,"blur",u),U(A,"focus",m),U(A,"escape",d),U(A,"click",E),U(A,"loaderror",y),U(A,"loaderstart",h),U(A,"networkschange",v),U(A,"lineitemclick",w),U(A,"confirm",S),U(A,"cancel",N),U(A,"shippingaddresschange",O),U(A,"shippingratechange",k),"cart"===e?a=function(e){D(e),f&&f(e)}:f&&(a="payButton"===e?f:function(){f(A)}),U(A,"ready",a),U(A,"change","cart"===e?function(e){D(e),p&&p(e)}:p),U(A,"checkout","cart"===e?function(e){D(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===x.current&&_&&null!==j.current){var t=_.create(e,l);"cart"===e&&R&&R(t),x.current=t,I(t),t.mount(j.current)}}),[_,l,R]);var M=g(l);return t.useEffect((function(){if(x.current){var e=C(l,M,["paymentRequest"]);e&&x.current.update(e)}}),[l,M]),t.useLayoutEffect((function(){return function(){x.current&&(x.current.destroy(),x.current=null)}}),[]),t.createElement("div",{id:o,className:c,ref:j})};return a.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},a.displayName=r,a.__elementType=e,a},W="undefined"==typeof window,q=$("auBankAccount",W),z=$("card",W),V=$("cardNumber",W),K=$("cardExpiry",W),J=$("cardCvc",W),Z=$("fpxBank",W),G=$("iban",W),Q=$("idealBank",W),H=$("p24Bank",W),X=$("epsBank",W),ee=$("payment",W),te=$("payButton",W),ne=$("paymentRequestButton",W),re=$("linkAuthentication",W),ae=$("address",W),oe=$("shippingAddress",W),ie=$("cart",W),ce=$("paymentMethodMessaging",W),se=$("affirmMessage",W),le=$("afterpayClearpayMessage",W);e.AddressElement=ae,e.AffirmMessageElement=se,e.AfterpayClearpayMessageElement=le,e.AuBankAccountElement=q,e.CardCvcElement=J,e.CardElement=z,e.CardExpiryElement=K,e.CardNumberElement=V,e.CartElement=ie,e.Elements=j,e.ElementsConsumer=B,e.EpsBankElement=X,e.FpxBankElement=Z,e.IbanElement=G,e.IdealBankElement=Q,e.LinkAuthenticationElement=re,e.P24BankElement=H,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ce,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=oe,e.useCartElement=D,e.useCartElementState=M,e.useElements=F,e.useStripe=R,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},7597:function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,a="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,s=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();r&&e?console.warn(i):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(c){return void n(c)}else t(null)}))),c},l=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var a=Date.now();return s(r).then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,a)}))};m.setLoadParameters=function(e){if(u&&r){var t=l(e);if(Object.keys(t).reduce((function(t,n){var a;return t&&e[n]===(null===(a=r)||void 0===a?void 0:a[n])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");r=l(e)}},7894:function(e,t,n){n(7597)},3826:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),a=n.p+"static/free-icon-location-5988775-83dd19eef86b787007f2dd2c21879f73.png",o=n.p+"static/logo-light-a80184b2d21c7507caac137616644c3a.svg",i=n.p+"static/free-icon-whatsapp-3670051-d026940870fb334920b73f57daa34a46.png",c=n.p+"static/free-icon-facebook-5968764-49e67d43221b6bb1aa8624ebad043209.png",s=n.p+"static/free-icon-instagram-2111463-e719d8b29f452a16302dde353806c1fa.png",l=n(1883),u=n(3556);function m(){const[e]=(0,u.cI)("xaygzgar");return e.succeeded?r.createElement(r.Fragment,null):r.createElement(r.Fragment,null,r.createElement("div",{className:"bloc-bagraund2"},r.createElement("div",{className:"widht-messege width15 "},r.createElement("div",{className:"flex-contact"},r.createElement("div",null,r.createElement("img",{className:"widht35img",alt:"Логотип",src:o})),r.createElement("div",{className:"fontsize35"},r.createElement("h2",{id:"textFooter"},"Контакты"),r.createElement("a",{className:"text-color-messege font18",href:"tel:+77273178549"},"+ 7 (727) 317-85-49",r.createElement("br",null)),r.createElement("a",{className:"text-color-messege font18",href:"tel:+77024813949"},"+ 7 (702) 481-39-49",r.createElement("br",null)),r.createElement("a",{className:"text-color-messege font18",href:"tel:+77028053347"},"+ 7 (702) 805-33-47",r.createElement("br",null)),r.createElement("a",{className:"text-color-messege font18",href:"tel:+77751676040"},"+ 7 (775) 167-60-40")),r.createElement("div",{className:"fontsize35 none11"},r.createElement("h2",{id:"textFooter"},"Направление"),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/AdministrativeBuilding"},"Строительство Административных Зданий")),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/Fabrica"},"Швейно-обувная фабрика")),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/Angus"},'Разведение КРС "Абердин Ангус"')),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/Schoolequipment"},"Школьное оборудование и кабинеты")),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/VIPCars"},"Аренда VIP Авто")),r.createElement("div",{className:"text-color-messege3",href:"tel:+77273178549"},r.createElement(l.Link,{to:"/Cinematography"},"Кинематография"))),r.createElement("div",{className:"logoFlex2 "},r.createElement("div",{className:"flexNewLogo"},r.createElement("a",{href:"#"},r.createElement("img",{className:"logo12",src:s,alt:"Instagram"})),r.createElement("a",{href:"#"},r.createElement("img",{className:"logo12",src:c,alt:"Facebook"})),r.createElement("a",{href:"#"},r.createElement("img",{className:"logo12",src:i,alt:"WhatsApp"}))),r.createElement("h1",{className:"widht80newlogo"},r.createElement("a",{className:"new-class font1rem time",href:"mailto:info@goldenstar.kz"},"info@goldenstar.kz"),r.createElement("br",null),r.createElement("a",{className:"new-class font1rem time",href:"mailto:a.janat@hotmail.com"},"a.janat@hotmail.com"),r.createElement("br",null),r.createElement("a",{className:"new-class time",href:"https://go.2gis.com/ef5eb4i"},"Бокейханова 152",r.createElement("img",{className:"location",alt:"",src:a}))))))))}var f=function(){return r.createElement(m,null)}},3422:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(1883),o=n.p+"static/logo-light-a80184b2d21c7507caac137616644c3a.svg";var i=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("header",{className:"header_section"},r.createElement("div",{className:"container"},r.createElement("nav",{className:"navbar navbar-expand-lg custom_nav-container "},r.createElement(a.Link,{to:"/",className:"navbar-brand"},r.createElement("img",{src:o,alt:""})),r.createElement("button",{className:"navbar-toggler",onClick:()=>{t(!e)},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":e,"aria-label":"Toggle navigation"},r.createElement("span",{className:""}," ")),r.createElement("div",{className:"collapse navbar-collapse "+(e?"active":""),id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav"},r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link",to:"/"},"Главная")),r.createElement("li",{className:"nav-item"},r.createElement("div",{className:"dropdown5"},r.createElement("span",{className:"dropbtn5"},"Направления",r.createElement("i",{className:"fa fa-caret-down"})),r.createElement("div",{className:"dropdown-content5"},r.createElement("ul",{className:"menu"},r.createElement("li",null,r.createElement("a",{href:"#"},"Производство и Торговля"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Fabrica"},"Швейно-обувная Фабрика")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Personal-protective"},"Средства Индивидуальной Защиты")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Tools"},"Строительные Инструменты и Материалы")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Equipment"},"Строительное Оборудование")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Sports"},"Спортивные Товары")))),r.createElement("li",{className:"listNone"},r.createElement("a",{href:"#"},"Строительство и Проектирование"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/AdministrativeBuilding"},"Строительство Административных Зданий")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Construction"},"Жилищное Строительство")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Rentalvisits"},"Аренда Складских Помещений Класса А и С")))),r.createElement("li",{className:"listNone"},r.createElement("a",{href:"#"},"Сельское Хозяйство"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Angus"},'Разведение КРС "Абердин Ангус" (племенной)')),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Orchard"},"Интенсивный Яблочный Сад")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Farmingfish"},"Рыбоводство")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/RomanovSheep"},'Разведение МРС "Романовские Овцы"')),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/BreedingHorse"},"Коневодство")),r.createElement("li",null,r.createElement(a.Link,{className:"",to:"/Fertilizer"},"Органическое Удобрение Биогумус (Вермикост)"))))),r.createElement(a.Link,{className:"",to:"/Schoolequipment"},"Школьное оборудование и кабинеты"),r.createElement(a.Link,{className:"",to:"/VIPCars"},"Аренда VIP Авто"),r.createElement(a.Link,{className:"",to:"/Cinematography"},"Кинематография")))),r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link",to:"/About/"},"О компании")),r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link",to:"/Contact/"},"Контакты")))))))}},3556:function(e,t,n){"use strict";n.d(t,{cI:function(){return f},p8:function(){return i}});var r=n(6664),a=n(7294),o=n(7012);n(7894);function i(e){let{prefix:t,field:n,errors:r,...o}=e;if(null==r)return null;let i=n?r.getFieldErrors(n):r.getFormErrors();return 0===i.length?null:a.createElement("div",{...o},t?`${t} `:null,i.map((e=>e.message)).join(", "))}var c=a.createContext(null);var s="@formspree/react@2.5.1";function l(e,t={}){let n=(0,a.useContext)(c)??{client:(0,o.getDefaultClient)()},{client:i=n.client,extraData:l,onError:m,onSuccess:f,origin:p}=t,{stripe:d}=i,E=(0,a.useMemo)((()=>d?.elements().getElement(r.CardElement)),[d]);return async function(t){let n=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof l)for(let[e,a]of Object.entries(l)){let t;t="function"==typeof a?await a():a,void 0!==t&&(0,o.appendExtraData)(n,e,t)}let r=await i.submitForm(e,n,{endpoint:p,clientName:s,createPaymentMethod:d&&E?()=>d.createPaymentMethod({type:"card",card:E,billing_details:u(n)}):void 0});(0,o.isSubmissionError)(r)?m?.(r):f?.(r)}}function u(e){let t={address:m(e)};for(let n of["name","email","phone"]){let r=e instanceof FormData?e.get(n):e[n];r&&"string"==typeof r&&(t[n]=r)}return t}function m(e){let t={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=e instanceof FormData?e.get(n):e[n];a&&"string"==typeof a&&(t[r]=a)}return t}function f(e,t={}){let[n,r]=(0,a.useState)(null),[o,i]=(0,a.useState)(null),[c,s]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let f=l(e,{client:t.client,extraData:t.data,onError(e){r(e),s(!1),m(!1)},onSuccess(e){r(null),i(e),s(!1),m(!0)},origin:t.endpoint});return[{errors:n,result:o,submitting:c,succeeded:u},async function(e){s(!0),await f(e)},function(){r(null),i(null),s(!1),m(!1)}]}}}]);
//# sourceMappingURL=commons-3d83b82c240f53c2b92f.js.map