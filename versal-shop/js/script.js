function initMap(){var t={lat:46.478747,lng:30.723505},e={center:t,zoom:14},n=new google.maps.Map(document.getElementById("map"),e);new google.maps.Marker({map:n,position:t,title:"Мы здесь!",icon:"i/marker.svg"})}!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ssm=e()}(this,function(){"use strict";function t(t,e){t.forEach(function(t){return t(e)})}var e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=[],o=function(){},a=function(){function a(t){if(e(this,a),this.id=t.id||Math.random().toString(36).substr(2,9),this.query=t.query||"all",this.options=Object.assign({},{onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},t),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once"))return this.valid=!1,!1;this.valid=!0,this.active=!1,this.init()}return n(a,[{key:"init",value:function(){var t=this;this.test=window.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(e){var n=!1;e.matches?t.testConfigOptions("match")&&(t.enterState(),n=!0):(t.leaveState(),n=!0),n&&o()},this.test.addListener(this.listener)}},{key:"enterState",value:function(){t(this.options.onFirstRun,this.eventData("firstRun")),t(this.options.onEnter,this.eventData("enter")),this.options.onFirstRun=[],this.active=!0}},{key:"leaveState",value:function(){t(this.options.onLeave,this.eventData("leave")),this.active=!1}},{key:"resizeState",value:function(){this.testConfigOptions("resize")&&t(this.options.onResize,this.eventData("resize"))}},{key:"destroy",value:function(){this.test.removeListener(this.listener)}},{key:"attachCallback",value:function(t,e,n){switch(t){case"enter":this.options.onEnter.push(e);break;case"leave":this.options.onLeave.push(e);break;case"resize":this.options.onResize.push(e)}"enter"===t&&n&&this.active&&e(this.eventData(t))}},{key:"testConfigOptions",value:function(t){var e=this,n=!0;return i.forEach(function(i){void 0!==e.options[i.name]&&i.when===t&&!1===i.test.bind(e)()&&(n=!1)}),n}},{key:"eventData",value:function(t){return{eventType:t,state:this}}}],[{key:"addConfigOption",value:function(t){i.push(t)}},{key:"getConfigOptions",value:function(){return i}},{key:"removeConfigOption",value:function(t){i.forEach(function(e,n){e.name===t&&i.splice(n,1)})}},{key:"setStateChangeMethod",value:function(t){if("function"!=typeof t)throw new Error("Not a function");o=t}}]),a}();return new(function(){function t(){e(this,t),this.states=[],this.resizeTimer=null,this.configOptions=[],window.addEventListener("resize",function(t){var e=this,n=void 0;return function(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame(function(){n=null,t.apply(e,o)})}}(this.resizeBrowser.bind(this)),!0)}return n(t,[{key:"addState",value:function(t){var e=new a(t);return e.valid&&this.states.push(e),e}},{key:"addStates",value:function(t){var e=this;t.forEach(function(t){return e.addState(t)})}},{key:"getState",value:function(t){return this.states.filter(function(e){return e.id===t})[0]||!1}},{key:"isActive",value:function(t){return(this.getState(t)||{}).active||!1}},{key:"getStates",value:function(t){var e=this;return void 0===t?this.states:t.map(function(t){return e.getState(t)})}},{key:"removeState",value:function(t){var e=this;this.states.forEach(function(n,i){n.id===t&&(n.destroy(),e.states.splice(i,1))})}},{key:"removeStates",value:function(t){var e=this;t.forEach(function(t){return e.removeState(t)})}},{key:"removeAllStates",value:function(){this.states.forEach(function(t){return t.destroy()}),this.states=[]}},{key:"addConfigOption",value:function(t){var e=t.name,n=void 0===e?"":e,i=t.test,o=void 0===i?null:i,s=t.when,c=void 0===s?"resize":s;""!==n&&null!==o&&a.addConfigOption({name:n,test:o,when:c})}},{key:"removeConfigOption",value:function(t){a.removeConfigOption(t)}},{key:"getConfigOptions",value:function(t){var e=a.getConfigOptions();return"string"==typeof t?e.filter(function(e){return e.name===t}):e}},{key:"resizeBrowser",value:function(){var t,e;(t=this.states,e="active",!0,t.filter(function(t){return t[e]&&!0===t[e]})).forEach(function(t){t.resizeState()})}},{key:"stateChange",value:function(t){a.setStateChangeMethod(t)}}]),t}())}),$("document").ready(function(){let t,e;document.documentElement.clientHeight;$("#arrowUp").on("click",function(){t=window.pageYOffset,scrollToTop()}),scrollToTop=(()=>{t>0?(window.scrollTo(0,t),t-=20,e=setTimeout(scrollToTop,10)):(window.scrollTo(0,0),clearTimeout(e))}),$(".slider").slick({dots:!1,slidesToShow:2,slidesToScroll:1,prevArrow:$(".saleBlock__arrows_left"),nextArrow:$(".saleBlock__arrows_right"),mobileFirst:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:1200,settings:{slidesToShow:4}}]}),$(".topBlock__burgerMenu").on("click",function(t){t.preventDefault(),$(this).toggleClass("topBlock__burgerMenu_active")}),$(".topBlock__burgerMenu").on("click",function(){$(".topBlock__mobileMenu").toggleClass("topBlock__mobileMenu_visible")});let n={};function i(){let t=$(this).attr("data-art");void 0!=n[t]?n[t]++:n[t]=1,localStorage.setItem("basket",JSON.stringify(n)),a()}function o(){null!=localStorage.getItem("basket")&&(n=JSON.parse(localStorage.getItem("basket")))}function a(){let t="";t+=Object.keys(n).length,s(),$(".miniCart__qty").html(t)}function s(){localStorage.setItem("basket",JSON.stringify(n))}$.getJSON("doors.json",function(t){let e="";for(let n in t)e+=`\n          <div class="catalog__card">\n            <img src="${t[n].image}" class="catalog__card_door" alt="" />\n            <div class="catalog__card_content">\n              <h3 class="catalog__card_h3">${t[n].name}</h3>\n              <p class="catalog__card_p">${t[n].description}</p>\n              <p class="catalog__card_price">${t[n].price} p.</p>\n              <button class="catalog__card_btn" data-art="${n}">Заказать</button>\n            </div>\n          </div>\n        `;$(".catalog__mainBlock").html(e),$(".catalog__card_btn").on("click",i)}),o(),a(),$(".saleBlock__card_btn").on("click",i),$.getJSON("doors.json",function(t){let e=t;function i(){if($.isEmptyObject(n)){let t="Корзина пуста. Перейдите к <a href='catalog.html'>Каталогу</a>";$(".cart__mainBlock").html(t)}else{let t="";for(let i in n)t+=`\n\n            <div class="cart__mainBlock_item">\n              \n              <img class="cart__mainBlock_img" src="${e[i].image}" alt="">\n              <span class="cart__mainBlock_name">${e[i].name}</span>\n\n              <div class="cart__mainBlock_box">\n                  <span class="cart__mainBlock_minus cart__mainBlock_calc" data-art="${i}">-</span>\n                  <span class="cart__mainBlock_qty">${n[i]}</span>\n                  <span class="cart__mainBlock_plus cart__mainBlock_calc" data-art="${i}">+</span>\n              </div>\n\n              <div class="cart__mainBlock_price">${e[i].price} руб.</div>\n              <div class="cart__mainBlock_sum">${n[i]*e[i].price} руб.</div>\n              <span class="cart__mainBlock_del" data-art="${i}">Удалить</span>\n            </div>\n          `;t+='\n          <div class=\'cart__form\'>\n            \n            <form action="#" method="POST" id="form" autocomplete="off" class="cart__form_request">\n\n              <input type="text" class="cart__form_userName cart__form_field" placeholder="Имя">\n\n              <input type="tel" class="cart__form_userPhone cart__form_field"  placeholder="Номер телефона">\n\n              <input type="noSpam" class="cart__form_noSpam">\n\n              <img id="loadImg" src="i/load.gif" alt="" class="cart__form_loadImg">\n\n              <div id="answerText"></div>\n\n              <button type="submit" class=\'cart__form_btn\'>\n                Сделать заказ\n              </button>\n\n            <form>\n\n          </div>\n        ',$(".cart__mainBlock").html(t),$(".cart__mainBlock_plus").on("click",c),$(".cart__mainBlock_minus").on("click",r),$(".cart__mainBlock_del").on("click",l)}}function c(){let t=$(this).attr("data-art");n[t]++,s(),i()}function r(){let t=$(this).attr("data-art");n[t]>1?(n[t]--,localStorage.setItem("basket",JSON.stringify(n))):delete n[t],s(),i()}function l(){let t=$(this).attr("data-art");delete n[t],s(),i(),a()}o(),i()}),$(".callBack__form_tel").on("input",function(t){const e=t.target,n=e.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.value=n[2]?"( "+n[1]+" ) "+n[2]+(n[3]?" "+n[3]:""):n[1]}),$(".cart__form_userPhone").on("input",function(t){const e=t.target,n=e.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.value=n[2]?"( "+n[1]+" ) "+n[2]+(n[3]?" "+n[3]:""):n[1]})});const els=$(".invalidate"),f=$(".callBack__form"),elsForm=f.find('input:not([type="submit"])');els.hide(),elsForm.on("input",function(){$(this).next(".invalidate").hide()}),f.submit(function(t){els.hide();let e=!0;elsForm.each(function(t,n){const i=$(n);switch(n.type){case"text":case"tel":const t=$(n).val().trim();t.length||(i.next(".invalidate").html(i.data("message")).show(),e=!1),"tel"===n.type&&(/(\d{0,3})(\d{0,3})(\d{0,4})/.test(t)||i.next(".invalidate").html("неверный номер").show());break;case"checkbox":i.prop("checked")||(e=!1)}}),e?(f.hide(),$(".mainBlock__successMessage").show(),localStorage.setItem("successTime",Date.now()+2e3)):t.preventDefault()});const diff=parseInt(localStorage.getItem("successTime"));diff&&(f.hide(),$(".mainBlock__successMessage").show());const intv=setInterval(()=>{const t=Date.now();parseInt(diff-t)<=0&&(localStorage.removeItem("successTime"),f.show(),$(".mainBlock__successMessage").hide(),clearInterval(intv))},3e3);