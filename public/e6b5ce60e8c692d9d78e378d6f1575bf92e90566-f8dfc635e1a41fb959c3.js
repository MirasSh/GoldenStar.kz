(self.webpackChunkswiper_react_autoplay_progress=self.webpackChunkswiper_react_autoplay_progress||[]).push([[740],{4852:function(e){"use strict";e.exports=Object.assign},3439:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),i=n.p+"static/snapedit_1700651540572-removebg-preview-36437d36609fb3788abe5ab0da36c4b6.png",a=n(3556);function o(){const[e,t,n]=(0,a.cI)("xaygzgar");return e.succeeded?r.createElement("div",{className:"widht-messege bloc-bagraund"},r.createElement("div",{className:"flex-messege"},r.createElement("div",{className:"color-white"},r.createElement("h2",{className:"text-color-messege2"},"Сообщение отправлено!",r.createElement("br",null)," Вам перезвонят в ближайшее время")),r.createElement("img",{className:"wiaht-40",alt:"",src:i}))):r.createElement("div",{className:"widht-messege "},r.createElement("div",{className:"flex-messege"},r.createElement("form",{className:"color-white wiaht-550",onSubmit:async r=>{await t(r),e.succeeded&&n()}},r.createElement("div",{className:"flex-text"},r.createElement("h2",{className:"text-color-messege2 font1remreal"},"Оставьте заявку, и наш менеджер ",r.createElement("br",null)," свяжется с вами в кратчайшие сроки")),r.createElement("label",{className:"rem07",htmlFor:"name"},"Ваше имя"),r.createElement("input",{id:"name",type:"name",name:"name",autoComplete:"on"}),r.createElement("label",{className:"rem07",htmlFor:"email"},"Ваш Email адрес"),r.createElement("input",{id:"email",type:"email",name:"email",autoComplete:"on"}),r.createElement("label",{className:"rem07",htmlFor:"message"},"Введите сообщение"),r.createElement(a.p8,{prefix:"Message",field:"message",errors:e.errors}),r.createElement("textarea",{id:"message",name:"message"}),r.createElement("button",{className:"button1",type:"submit",disabled:e.submitting},"Отправить")),r.createElement("img",{className:"wiaht-40",alt:"",src:i})))}var l=function(){return r.createElement(o,null)}},5116:function(e,t,n){"use strict";n.d(t,{Z:function(){return Re}});var r,i,a,o,l=n(7294),c=n(5697),s=n.n(c),u=n(3524),d=n.n(u),m=n(9590),f=n.n(m),p=n(4852),v=n.n(p),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",w="href",N="http-equiv",C="innerHTML",x="itemprop",k="name",A="property",S="rel",O="src",j="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",Z="defer",I="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",_=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[y.NOSCRIPT,y.SCRIPT,y.STYLE],B="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=V(e,y.TITLE),n=V(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,P);return t||r||void 0},J=function(e){return V(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var l=a[o],c=l.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==C&&l!==T&&l!==x||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var l=a[o],c=v()({},r[l],i[l]);r[l]=c}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),Q=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:n.g.cancelAnimationFrame||Q,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;oe(y.BODY,r),oe(y.HTML,i),ae(d,m);var f={baseTag:le(y.BASE,n),linkTags:le(y.LINK,a),metaTags:le(y.META,o),noscriptTags:le(y.NOSCRIPT,l),scriptTags:le(y.SCRIPT,s),styleTags:le(y.STYLE,u)},p={},v={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(v[e]=f[e].oldTags)})),t&&t(),c(e,p,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),oe(y.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);i.length===a.length?n.removeAttribute(B):n.getAttribute(B)!==o.join(",")&&n.setAttribute(B,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+B+"]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(B,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=se(n,r),[l.createElement(y.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ce(n),a=ie(t);return i?"<"+e+" "+B+'="true" '+i+">"+q(a,r)+"</"+e+">":"<"+e+" "+B+'="true">'+q(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),l.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+" "+B+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:ue(y.BASE,t,r),bodyAttributes:ue(h,n,r),htmlAttributes:ue(g,i,r),link:ue(y.LINK,a,r),meta:ue(y.META,o,r),noscript:ue(y.NOSCRIPT,l,r),script:ue(y.SCRIPT,c,r),style:ue(y.STYLE,s,r),title:ue(y.TITLE,{title:d,titleAttributes:m},r)}},me=d()((function(e){return{baseTag:W([w,j],e),bodyAttributes:G(h,e),defer:V(e,Z),encode:V(e,I),htmlAttributes:G(g,e),linkTags:K(y.LINK,[S,w],e),metaTags:K(y.META,[k,E,N,A,x],e),noscriptTags:K(y.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:K(y.SCRIPT,[O,C],e),styleTags:K(y.STYLE,[T],e),title:z(e),titleAttributes:G(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=X((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),de)((function(){return null})),fe=(i=me,o=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case y.TITLE:return H({},i,((t={})[r.type]=o,t.titleAttributes=H({},a),t));case y.BODY:return H({},i,{bodyAttributes:H({},a)});case y.HTML:return H({},i,{htmlAttributes:H({},a)})}return H({},i,((n={})[r.type]=H({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(U(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);fe.renderStatic=fe.rewind;var pe=n(1883),ve=n.p+"static/logo-838baf29a184eddee2ec55b35a049c1f.png",he=n(1139),ge=n(9516),be=n(8934),ye=n(5904),Ee=n(6114),Te=n(3536),we=n(4564),Ne=n(7595),Ce=n(4979),xe=n(2107),ke=n.p+"static/Mal3-3fa172cfc251af2389c8c8a3f20d356e.jpg",Ae=n(7129),Se=n(5654),Oe=n(207),je=n(9208),Le=n(9063);var Pe=()=>{var e,t,n,r,i,a,o,c,s,u,d,m,f,p,v,h,g,b,y,E,T,w,N,C,x,k,A,S;const{0:O,1:j}=(0,l.useState)(null),{0:L,1:P}=(0,l.useState)(null),{0:Z,1:I}=(0,l.useState)(null),{0:M,1:R}=(0,l.useState)(null),_=[{id:5,Chapter:"GSTOWER",title:"GSTOWER — элегантный многоэтажный гостиничный комплекс, где каждый этаж предлагает великолепные виды, выдающийся дизайн и внимание к деталям. Насладитесь комфортом и роскошью в каждом номере, создавая неповторимый опыт для наших гостей.",image:ge.Z,buttontext:"Подробнее",link:"/AdministrativeBuilding"},{id:1,Chapter:"COMFORT JAGALAU",title:"TOO 'GS BUILDING' — это не просто строительная компания. Это сообщество талантливых профессионалов, объединенных общей страстью к строительству и стремлением к совершенству, которая входит в группу компании «ALTYN JULDYZ».",image:he.Z,buttontext:"Подробнее",link:"/Construction"},{id:2,Chapter:"Швейно-обувная фабрика",title:"Мы разрабатываем собственные уникальные модели, инновационные ткани, пропитки, красители, технологии производства. ",image:be.Z,buttontext:"Подробнее",title2:"Наша продукция служит дольше и повышает производительность труда. Производственная мощность насчитывает до 300 тысяч комплектов спецодежды в год",link:"/Fabrica"},{id:3,Chapter:"Средства Индивидуальной Защиты",title:"Группа компании «ALTYN JULDYZ» также специализируется по производству строительных  высоко качественных  технологических и механических инструментов.",image:ye.Z,buttontext:"Подробнее",title2:"Высокое качество от популярного бренда «GS» .Мы предлагаем вам большой ассортимент, где вы найдете все что вам нужно. ",link:"/Personal-protective"}],D=[{id:5,Chapter:"Строительные Инструменты и Материалы",title:"Наша компания — это объединение талантов, направленных на достижение выдающихся результатов.",image:Ee.Z,buttontext:"Подробнее",title2:"Мы гордимся тем, что каждый день вносим свой вклад в развитие индустрии и общества в целом",link:"/Tools"},{id:1,Chapter:"Строительное оборудование",title:"Группа компании «ALTYN JULDYZ» занимается продажей строительного оборудования применяемых в самых различных областях деятельности.",image:Te.Z,buttontext:"Подробнее",link:"/Equipment"},{id:2,Chapter:"Интенсивный яблочный сад",title:"Один из  наших  проектов для улучшения нашей страны  это растениеводство, а именно интенсивные сады.",image:we.Z,buttontext:"Подробнее",title2:"Интенсивные технологии позволяют получать максимальный урожай на ограниченной площади. ",link:"/Orchard"},{id:3,Chapter:"Разведение КРС 'Абердин Ангус' (племенной)",title:"На ферме «LAKE FARM» реализуется часть межрегионального проекта компании по выращиванию крупного рогатого скота специализированной породы Абердин — ангус.",image:Ne.Z,buttontext:"Подробнее",title2:"Постоянное улучшение условий содержания, ветеринарный контроль на всех этапах развития животного и планирование прироста поголовья ведут к снижению производственных издержек и работают на оптимизацию себестоимости конечного продукта – мраморной говядины. ",link:"/Angus"}],B=[{id:5,Chapter:"Коневодство",title:"Конный завод «ALTYN JULDYZ» – специализируется на разведении лошадей древнейшей Ахалтекинской породы.",image:Ce.Z,buttontext:"Подробнее",title2:"Ахалтекинская лошадь древнейшая чистокровная верховая порода, которая была выведена около 5 000 лет назад. Ахалтекинцы выделяются эффектным внешним видом и имеют достаточно крупный рост. ",link:"/BreedingHorse"},{id:1,Chapter:"Рыбоводство",title:"«FRESH FISH» — это проект по разведению форели который входит в группу компании «ALTYN JULDYZ». Производственная мощность на наших хозяйствах составляет 3000 тонн форели в год.",image:xe.Z,buttontext:"Подробнее",title2:"Форель — рыба семейства лососевых. Ее природная среда обитания — горные реки. Она нуждается в чистой проточной воде, в любой бочке или первом попавшемся пруду расти не будет. ",link:"/Farmingfish"},{id:2,Chapter:"Разведение МРС 'Романовские Овцы'",title:"Наша Фазенда была построена по всем стандартам мирового уровня , что бы наши овцы жили в комфорте тепле и уюте! Романовские овцы содержаться в комфортабельных павильонах. Есть большой манеж для прогулки овец.",image:ke,buttontext:"Подробнее",title2:"Наша фазенда по разведению «Романовских овец» одно из самых крупных хозяйств в Казахстане по разведению Романовской породы овец. На данный момент у нас более 3000 овец Романовской породы, которые соответствуют всем стандартам мирового уровня! ",link:"/RomanovSheep"},{id:3,Chapter:"Аренда Складских Помещений Класса «А» и «Б»",title:"Компания «ALTYN JULDYZ» предоставляет в аренду складские помещения «В и С» класса общей площадью 4000 кв. м, полностью асфальтированный парк, высота потолков 8м, офисные кабинеты при складах общей площадью- 500 м2.",image:Ae.Z,buttontext:"Подробнее",link:"/Rentalvisits"}],Y=[{id:5,Chapter:"Аренда VIP Авто",title:"Наша компания предоставляет широкий спектр роскошных автомобилей в аренду для клиентов, ценящих комфорт, стиль и первоклассное обслуживание.",image:Se.Z,buttontext:"Подробнее",title2:"Мы ориентированы на удовлетворение потребностей представителей высшего класса общества, корпоративных клиентов и тех, кто желает добавить особый шарм в свои события.",link:"/VIPCars"},{id:1,Chapter:"Школьное оборудование и кабинеты",title:"GSMektep — занимается поставкой инновационных товаров для образовательных учреждений.",image:Oe.Z,buttontext:"Подробнее",title2:"Мы продолжаем содействовать развитию нашей страны, предоставляя высококачественные решения для образовательных учреждений.",link:"/Schoolequipment"},{id:2,Chapter:"Спортивные Товары",title:"«GS SPORT» магазин спортивных товаров. Проект входит в группу компании «ALTYN JULDYZ» и имеет большой ассортимент в выборе товаров для спорта и дома.",image:je.Z,buttontext:"Подробнее",title2:"Наш спорт магазин для всей семьи! Все для спорта и активного отдыха – от самых простых спорт товаров до технологического оборудования последнего поколения.",link:"/Sports"},{id:3,Chapter:"Кинематография",title:"Наша компания занимается съемкой фильмов, сериалов и клипов. Мы работаем с настоящими профессионалами своего дела с многолетним опытом видео съемки. ",image:Le.Z,buttontext:"Подробнее",title2:"Как студия по производству видео, мы располагаем обширной студией с полным набором световых, видео и монтажных возможностей, зелеными экранами и разнообразным реквизитом, который может воспроизводить различные обстановки — от розничных магазинов до офисных помещений.",link:"/Cinematography"}];return l.createElement("div",{className:"newcenter"},l.createElement("div",{className:"gridNew"},_.map((e=>l.createElement("div",{className:"newBlok",key:e.id,onClick:()=>{return t=e.id,O&&j(null),void j(O===t?null:t);var t},style:{cursor:"pointer",padding:"5px",margin:"0px"}},l.createElement("img",{className:"CompantStyl",src:e.image,alt:e.title,style:{border:O===e.id?"2px solid white":"none"}}))))),O&&l.createElement("div",{className:"newFlex-blok1",style:{position:"relative"}},l.createElement("div",{className:"TopMinus"},l.createElement("h1",{className:"ChapterText padding5"},null===(e=_.find((e=>e.id===O)))||void 0===e?void 0:e.Chapter),l.createElement("h2",{className:"textDescription"},null===(t=_.find((e=>e.id===O)))||void 0===t?void 0:t.title),l.createElement("h2",{className:"textDescription"},null===(n=_.find((e=>e.id===O)))||void 0===n?void 0:n.title2),l.createElement(pe.Link,{to:null===(r=_.find((e=>e.id===O)))||void 0===r?void 0:r.link},l.createElement("button",{className:"newpositionRel newButton"},null===(i=_.find((e=>e.id===O)))||void 0===i?void 0:i.buttontext))),l.createElement("div",{className:"image-overlay"}),l.createElement("div",{className:"gradientOverlay"}),l.createElement("img",{className:"minHeight2",src:null===(a=_.find((e=>e.id===O)))||void 0===a?void 0:a.image,alt:null===(o=_.find((e=>e.id===O)))||void 0===o?void 0:o.title})),l.createElement("div",{className:"gridNew"},D.map((e=>l.createElement("div",{className:"newBlok",key:e.id,onClick:()=>{return t=e.id,L&&P(null),void P(L===t?null:t);var t},style:{cursor:"pointer",padding:"5px",margin:"0px"}},l.createElement("img",{className:"CompantStyl",src:e.image,alt:e.title,style:{border:L===e.id?"2px solid white":"none"}}))))),L&&l.createElement("div",{className:"newFlex-blok1",style:{position:"relative"}},l.createElement("div",{className:"TopMinus"},l.createElement("h1",{className:"ChapterText padding5"},null===(c=D.find((e=>e.id===L)))||void 0===c?void 0:c.Chapter),l.createElement("h2",{className:"textDescription"},null===(s=D.find((e=>e.id===L)))||void 0===s?void 0:s.title),l.createElement("h2",{className:"textDescription"},null===(u=D.find((e=>e.id===L)))||void 0===u?void 0:u.title2),l.createElement(pe.Link,{to:null===(d=D.find((e=>e.id===L)))||void 0===d?void 0:d.link},l.createElement("button",{className:"newpositionRel newButton"},null===(m=D.find((e=>e.id===L)))||void 0===m?void 0:m.buttontext))),l.createElement("div",{className:"image-overlay"}),l.createElement("div",{className:"gradientOverlay"}),l.createElement("img",{className:"minHeight2",src:null===(f=D.find((e=>e.id===L)))||void 0===f?void 0:f.image,alt:null===(p=D.find((e=>e.id===L)))||void 0===p?void 0:p.title})),l.createElement("div",{className:"gridNew"},B.map((e=>l.createElement("div",{className:"newBlok",key:e.id,onClick:()=>{return t=e.id,Z&&I(null),void I(Z===t?null:t);var t},style:{cursor:"pointer",padding:"5px",margin:"0px"}},l.createElement("img",{className:"CompantStyl",src:e.image,alt:e.title,style:{border:Z===e.id?"2px solid white":"none"}}))))),Z&&l.createElement("div",{className:"newFlex-blok1",style:{position:"relative"}},l.createElement("div",{className:"TopMinus"},l.createElement("h1",{className:"ChapterText padding5"},null===(v=B.find((e=>e.id===Z)))||void 0===v?void 0:v.Chapter),l.createElement("h2",{className:"textDescription"},null===(h=B.find((e=>e.id===Z)))||void 0===h?void 0:h.title),l.createElement("h2",{className:"textDescription"},null===(g=B.find((e=>e.id===Z)))||void 0===g?void 0:g.title2),l.createElement(pe.Link,{to:null===(b=B.find((e=>e.id===Z)))||void 0===b?void 0:b.link},l.createElement("button",{className:"newpositionRel newButton"},null===(y=B.find((e=>e.id===Z)))||void 0===y?void 0:y.buttontext))),l.createElement("div",{className:"image-overlay"}),l.createElement("div",{className:"gradientOverlay"}),l.createElement("img",{className:"minHeight2",src:null===(E=B.find((e=>e.id===Z)))||void 0===E?void 0:E.image,alt:null===(T=B.find((e=>e.id===Z)))||void 0===T?void 0:T.title})),l.createElement("div",{className:"gridNew "},Y.map((e=>l.createElement("div",{className:"newBlok",key:e.id,onClick:()=>{return t=e.id,M&&R(null),void R(M===t?null:t);var t},style:{cursor:"pointer",padding:"5px",margin:"0px"}},l.createElement("img",{className:"CompantStyl",src:e.image,alt:e.title,style:{border:M===e.id?"2px solid white":"none"}}))))),M&&l.createElement("div",{className:"newFlex-blok1",style:{position:"relative"}},l.createElement("div",{className:"TopMinus"},l.createElement("h1",{className:"ChapterText padding5"},null===(w=Y.find((e=>e.id===M)))||void 0===w?void 0:w.Chapter),l.createElement("h2",{className:"textDescription"},null===(N=Y.find((e=>e.id===M)))||void 0===N?void 0:N.title),l.createElement("h2",{className:"textDescription"},null===(C=Y.find((e=>e.id===M)))||void 0===C?void 0:C.title2),l.createElement(pe.Link,{to:null===(x=Y.find((e=>e.id===M)))||void 0===x?void 0:x.link},l.createElement("button",{className:"newpositionRel newButton"},null===(k=Y.find((e=>e.id===M)))||void 0===k?void 0:k.buttontext))),l.createElement("div",{className:"image-overlay"}),l.createElement("div",{className:"gradientOverlay"}),l.createElement("img",{className:"minHeight2",src:null===(A=Y.find((e=>e.id===M)))||void 0===A?void 0:A.image,alt:null===(S=Y.find((e=>e.id===M)))||void 0===S?void 0:S.title})))},Ze=n(3422),Ie=n(8398),Me=n(3439);var Re=e=>{var t;let{children:n}=e;const r=(0,pe.useStaticQuery)("3649515864");return l.createElement(l.Fragment,null,l.createElement(fe,null,l.createElement("script",{type:"text/javascript"},'\n            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n            m[i].l=1*new Date();\n            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n            ym(96135038, "init", {\n                  clickmap:true,\n                  trackLinks:true,\n                  accurateTrackBounce:true\n            });\n          ')),l.createElement("div",null,l.createElement("div",{className:"hero_area"},l.createElement("div",{className:"hero_bg_box"},l.createElement("img",{src:ve,alt:""})),l.createElement(Ze.Z,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),l.createElement("section",{className:"slider_section "},l.createElement("div",{id:"customCarousel1",className:"carousel slide","data-ride":"carousel"},l.createElement("div",{className:"carousel-inner"},l.createElement("div",{className:"carousel-item active"},l.createElement("div",{className:"container "},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-8 col-xl-6 mx-auto "},l.createElement("div",{className:"iMac:mb-8 iMac:text-9xl font-serif font-bold text-white lg:text-7xl"},l.createElement("h1",{className:"text"},"ALTYN   JULDYZ"),l.createElement("p",null,"Группа компаний в Казахстане, вносящая огромный вклад в развитие разных отраслей страны"))))))))))),l.createElement("div",{className:"backgroundWhite"},l.createElement("div",{className:"newcenter gridFlex marfintopbuttom"},l.createElement("h4",{className:"newColorWhite padding1"},l.createElement("noscript",null,l.createElement("img",{src:"https://mc.yandex.ru/watch/96135038",style:{position:"absolute",left:"0px"},alt:""})),"Наша компания — это объединение талантов, направленных на достижение выдающихся результатов, и мы гордимся тем, что каждый день вносим свой вклад в развитие индустрии и общества в целом."),l.createElement("div",{className:"newFlex2"},l.createElement("div",{id:"two",className:"otzyv widht-110"},l.createElement("h1",{className:"Newsize"},"1"),l.createElement("p",{className:"newPaddeing"},"ЛУЧШИЕ В СЕГМЕНТЕ")),l.createElement("div",{id:"One",className:"otzyv widht-110"},l.createElement("h1",{className:"Newsize"},"17"),l.createElement("p",{className:"newPaddeing"}," ЛЕТ ОПЫТА РАБОТЫ"))))),l.createElement("div",null,l.createElement("div",null,l.createElement("h1",{className:"newColorWhite newTextCenter padding1"},"Направления Компании")),l.createElement(Pe,null)),l.createElement("hr",null),l.createElement(Me.Z,null),l.createElement(Ie.Z,null))}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!a(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof o.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",l),d}}},1139:function(e,t,n){"use strict";t.Z=n.p+"static/15-aa5f0de3649dcf713c260d521d919d17.png"},207:function(e,t,n){"use strict";t.Z=n.p+"static/1582053988_17-p-dizain-kabinetov-nachalnikh-klassov-53-3345c4fd2aa5e92bd2f783bfa72d09f7.jpg"},9063:function(e,t,n){"use strict";t.Z=n.p+"static/1674910661_top-fon-com-p-fon-dlya-prezentatsii-po-kinoiskusstvu-118-8869d59f17afa687b3d68d3ca44274aa.jpg"},2107:function(e,t,n){"use strict";t.Z=n.p+"static/19741925018_97cb154c0d_b-6c71aafc95908deb0aec035a58275216.jpg"},9516:function(e,t,n){"use strict";t.Z=n.p+"static/2-a203dd9edebc43fd157e7f0b53e2be26.jpg"},4564:function(e,t,n){"use strict";t.Z=n.p+"static/256-bab4d458a35718efe9348c93b906f9c9.jpg"},4979:function(e,t,n){"use strict";t.Z=n.p+"static/Horses-2b4058af8d8f692de23ed8334bef8ecc.jpg"},9208:function(e,t,n){"use strict";t.Z=n.p+"static/Sport-tovar-2c534770f16581746d8acddd4003ad7f.jpg"},6114:function(e,t,n){"use strict";t.Z=n.p+"static/Stroi-mat-817fdf17d1fd75f107ef95867e21214f.jpg"},8934:function(e,t,n){"use strict";t.Z=n.p+"static/Svea-b8c036fd6a7f14b4be85f5d541edb44d.png"},5904:function(e,t,n){"use strict";t.Z=n.p+"static/Zahita-7f27ea15c3f5d3d8719ce673458a25b7.jpg"},7595:function(e,t,n){"use strict";t.Z=n.p+"static/angus-57565cf2a51e38bd87a450e79cae08bd.jpg"},7129:function(e,t,n){"use strict";t.Z=n.p+"static/peugeot-partner-load-01-f2bd8e0b2e2f7421256a39ee6b998263.jpg"},3536:function(e,t,n){"use strict";t.Z=n.p+"static/snapedit_1699681524244-5d84dd04159496cf61bd6d037d1e323f.png"},5654:function(e,t,n){"use strict";t.Z=n.p+"static/vip-ebb17f5e63c020c164d4d47c31ea6b7d.png"}}]);
//# sourceMappingURL=e6b5ce60e8c692d9d78e378d6f1575bf92e90566-f8dfc635e1a41fb959c3.js.map