(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[6],{196:function(e,t,n){"use strict";var r=n(93),c=n(105),a=n(2),i=n(882),o=n(250);t.a=function(e){var t,n=Object(a.useMemo)((function(){return new o.c}),[]),s=Object(i.a)([n,e],(function(t){return n[e].apply(n,Object(c.a)(t))}));return Object.assign({},s,(t={},Object(r.a)(t,e,s.mutate),Object(r.a)(t,"".concat(e,"Async"),s.mutateAsync),t))}},250:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(89),c=n(90),a=n(190),i=n(189),o=n(56),s=n(11),u=n(31),l=n.n(u),f=n(53),h=n(58),v=n.n(h),d=n(370);var p,b,m=function(e){return encodeURIComponent((n=e)!==Object(n)?e:(t=e,JSON.stringify(t,(function(e,t){if(null!==t&&""!==t)return t}))));var t,n},j=function(e){return Object.keys(e||{}).filter((function(t){return""!==(null===e||void 0===e?void 0:e[t])&&null!==(null===e||void 0===e?void 0:e[t])&&void 0!==(null===e||void 0===e?void 0:e[t])})).map((function(t){return v()(null===e||void 0===e?void 0:e[t])?function(e,t){return t.map((function(t,n){return"".concat(m("".concat(e,"[").concat(n,"]")),"=").concat(m(t))})).join("&")}(t,null===e||void 0===e?void 0:e[t]):"".concat(t,"=").concat(m(null===e||void 0===e?void 0:e[t]))})).join("&")},k=function(){function e(t){Object(r.a)(this,e),this.baseUrl=void 0,this.baseUrl=t.startsWith("http")?t:window.location.protocol.startsWith("http")?"".concat(window.location.protocol,"//").concat(t):"http://".concat(t)}return Object(c.a)(e,[{key:"request",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n,r,c){var a,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=this.getAccessToken())&&(r=Object(s.a)(Object(s.a)({},r),{},{access_token:a})),e.prev=2,e.next=5,fetch("".concat(this.baseUrl).concat(n,"?").concat(j(r)),{method:t,body:c&&Object(d.serialize)(c)});case 5:return 401===(i=e.sent).status&&this.clearTokens(),e.next=9,i.json();case 9:return o=e.sent,e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",{error:e.t0.toString()});case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t,n,r,c){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){return this.request("GET",e,t)}},{key:"post",value:function(e,t,n){return this.request("POST",e,n,t)}},{key:"getAccessToken",value:function(){throw new Error("not implemented")}},{key:"getRefreshToken",value:function(){throw new Error("not implemented")}},{key:"saveTokens",value:function(e){e.access_token,e.refresh_token,e.expires_in;throw new Error("not implemented")}},{key:"clearTokens",value:function(){throw new Error("not implemented")}}]),e}();!function(e){e[e.True=1]="True",e[e.False=0]="False"}(p||(p={})),function(e){e[e.NoWatched=-1]="NoWatched",e[e.Watching=0]="Watching",e[e.Watched=1]="Watched"}(b||(b={}));var O=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_BASE_URL||"api.service-kp.com",g=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_ID||"xbmc",y=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_SECRET||"cgg3gtifu46urtfp2zp1nqtba0k2ezxh",_=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.call(this,"xbmc","cgg3gtifu46urtfp2zp1nqtba0k2ezxh","api.service-kp.com")}return Object(c.a)(n,[{key:"isLogged",value:function(){return o.a.getItem("is_logged")}},{key:"getAccessToken",value:function(){return o.a.getItem("access_token")}},{key:"getRefreshToken",value:function(){return o.a.getItem("refresh_token")}},{key:"saveTokens",value:function(e){var t=e.access_token,n=e.refresh_token,r=e.expires_in;o.a.setItem("is_logged",!0,2592e3),o.a.setItem("access_token",t,r),o.a.setItem("refresh_token",n,2592e3)}},{key:"clearTokens",value:function(){["is_logged","access_token","refresh_token"].forEach(o.a.removeItem)}}]),n}(function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return Object(r.a)(this,n),(e=t.call(this,i)).clientId=void 0,e.clientSecret=void 0,e.accessTokenCheckIntervaId=void 0,e.clientId=c,e.clientSecret=a,e}return Object(c.a)(n,[{key:"clearTimers",value:function(){clearInterval(this.accessTokenCheckIntervaId),this.accessTokenCheckIntervaId=null}},{key:"processTokensReponse",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clearTokens();case 2:e.t0=t.error,e.next="authorization_pending"===e.t0?5:void 0===e.t0?6:12;break;case 5:return e.abrupt("break",14);case 6:return this.clearTimers(),e.next=9,this.saveTokens(t);case 9:return this.deviceNotify(n),null===r||void 0===r||r(),e.abrupt("return");case 12:throw this.clearTimers(),t.error;case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"requestTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_token",client_id:this.clientId,client_secret:this.clientSecret,code:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/token",null,{grant_type:"refresh_token",client_id:this.clientId,client_secret:this.clientSecret,refresh_token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestDeviceCode",value:function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_code",client_id:this.clientId,client_secret:this.clientSecret});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deviceAuthorization",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n){var r,c,a,i,o,s,u,h=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.getRefreshToken())){e.next=9;break}return e.next=4,this.refreshTokens(r);case 4:return c=e.sent,e.next=7,this.processTokensReponse(c,t);case 7:e.next=19;break;case 9:return e.next=11,this.requestDeviceCode();case 11:return a=e.sent,i=a.interval,o=a.code,s=a.user_code,u=a.verification_uri,null===n||void 0===n||n(s,u),e.next=19,new Promise((function(e,n){h.clearTimers(),h.accessTokenCheckIntervaId=setInterval(Object(f.a)(l.a.mark((function r(){var c;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h.requestTokens(o);case 2:return c=r.sent,r.prev=3,r.next=6,h.processTokensReponse(c,t,e);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(3),n(r.t0);case 11:case"end":return r.stop()}}),r,null,[[3,8]])}))),1e3*(i||10))}));case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deactivate",value:function(){this.deviceUnlink(),this.clearTokens(),this.clearTimers()}},{key:"user",value:function(){return this.get("/v1/user")}},{key:"serverLocations",value:function(){return this.get("/v1/references/server-location")}},{key:"streamingTypes",value:function(){return this.get("/v1/references/streaming-type")}},{key:"voiceoverTypes",value:function(){return this.get("/v1/references/voiceover-type")}},{key:"voiceoverAuthors",value:function(){return this.get("/v1/references/voiceover-author")}},{key:"videoQualities",value:function(){return this.get("/v1/references/video-quality")}},{key:"devices",value:function(){return this.get("/v1/device")}},{key:"deviceInfo",value:function(){return this.get("/v1/device/info")}},{key:"deviceInfoById",value:function(e){return this.get("/v1/device/".concat(e))}},{key:"deviceUnlink",value:function(){return this.post("/v1/device/unlink")}},{key:"deviceRemoveById",value:function(e){return this.post("/v1/device/".concat(e,"/remove"))}},{key:"deviceNotify",value:function(e){return this.post("/v1/device/notify",e)}},{key:"deviceSettings",value:function(e){return this.get("/v1/device/".concat(e,"/settings"))}},{key:"saveDeviceSettings",value:function(e,t){return this.post("/v1/device/".concat(e,"/settings"),t)}},{key:"types",value:function(){return this.get("/v1/types")}},{key:"genders",value:function(){return this.get("/v1/genres")}},{key:"countries",value:function(){return this.get("/v1/countries")}},{key:"items",value:function(e,t,n){return this.get("/v1/items",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemsSearch",value:function(e,t,n){return this.get("/v1/items/search",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemSmiliar",value:function(e){return this.get("/v1/items/similar",{id:e})}},{key:"itemMedia",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.True;return this.get("/v1/items/".concat(e),{nolinks:t})}},{key:"itemMediaLinks",value:function(e){return this.get("/v1/items/media-links",{mid:e})}},{key:"itemMediaFileLink",value:function(e,t){return this.get("/v1/items/media-video-link",{file:e,type:t})}},{key:"itemVote",value:function(e,t){return this.get("/v1/items/vote",{id:e,like:t})}},{key:"itemTrailer",value:function(e,t){return this.get("/v1/items/trailer",{id:e,sid:t})}},{key:"itemsFresh",value:function(e,t,n){return this.get("/v1/items/fresh",{type:e,page:t,perpage:n})}},{key:"itemsHot",value:function(e,t,n){return this.get("/v1/items/hot",{type:e,page:t,perpage:n})}},{key:"itemsPopular",value:function(e,t,n){return this.get("/v1/items/popular",{type:e,page:t,perpage:n})}},{key:"channels",value:function(){return this.get("/v1/tv")}},{key:"bookmarks",value:function(){return this.get("/v1/bookmarks")}},{key:"bookmarkItems",value:function(e,t,n){return this.get("/v1/bookmarks/".concat(e),{page:t,perpage:n})}},{key:"itemBookmarks",value:function(e){return this.get("/v1/bookmarks/get-item-folders",{item:e})}},{key:"bookmarkCreate",value:function(e){return this.post("/v1/bookmarks/create",{title:e})}},{key:"bookmarkRemove",value:function(e){return this.post("/v1/bookmarks/remove-folder",{folder:e})}},{key:"bookmarkAddItem",value:function(e,t){return this.post("/v1/bookmarks/add",{item:e,folder:t})}},{key:"bookmarkRemoveItem",value:function(e,t){return this.post("/v1/bookmarks/remove-item",{item:e,folder:t})}},{key:"bookmarkToggleItem",value:function(e,t){return this.post("/v1/bookmarks/toggle-item",{item:e,folder:t})}},{key:"watchingItem",value:function(e,t,n){return this.get("/v1/watching",{id:e,video:t,season:n})}},{key:"watchingMovies",value:function(){return this.get("/v1/watching/movies")}},{key:"watchingSerials",value:function(e){return this.get("/v1/watching/serials",{subscribed:e})}},{key:"watchingMarkTime",value:function(e,t,n,r){return this.get("/v1/watching/marktime",{id:e,time:t,video:n,season:r})}},{key:"watchingToggle",value:function(e,t,n){return this.get("/v1/watching/toggle",{id:e,video:t,season:n})}},{key:"watchingToggleWatchlist",value:function(e){return this.get("/v1/watching/togglewatchlist",{id:e})}},{key:"collections",value:function(e,t,n,r){return this.get("/v1/collections",{title:e,sort:t,page:n,perpage:r})}},{key:"collectionItems",value:function(e){return this.get("/v1/collections/view",{id:e})}},{key:"history",value:function(e,t){return this.get("/v1/history",{page:e,perpage:t})}},{key:"historyClearMedia",value:function(e){return this.post("/v1/history/clear-for-media",null,{id:e})}},{key:"historyClearSeason",value:function(e){return this.post("/v1/history/clear-for-season",null,{id:e})}},{key:"historyClearItem",value:function(e){return this.post("/v1/history/clear-for-item",null,{id:e})}}]),n}(k))},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(57),a=n(52),i=n.n(a),o=n(3),s=["className"],u=function(e){var t=e.className,n=Object(c.a)(e,s);return Object(o.jsx)("p",Object(r.a)(Object(r.a)({},n),{},{className:i()("text-gray-200",t)}))}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(153),c=n.n(r),a=n(368),i=n.n(a),o=c()(i.a)},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(11),c=n(57),a=n(52),i=n.n(a),o=(n(866),n(3)),s=["name","className"],u={notifications_active:Object(o.jsx)(o.Fragment,{children:"\ue7f7"}),new_releases:Object(o.jsx)(o.Fragment,{children:"\ue031"}),library_music:Object(o.jsx)(o.Fragment,{children:"\ue030"}),live_tv:Object(o.jsx)(o.Fragment,{children:"\ue639"}),play_arrow:Object(o.jsx)(o.Fragment,{children:"\ue037"}),play_circle_outline:Object(o.jsx)(o.Fragment,{children:"\ue039"}),sports_soccer:Object(o.jsx)(o.Fragment,{children:"\uea2f"}),expand_more:Object(o.jsx)(o.Fragment,{children:"\ue5cf"}),expand_less:Object(o.jsx)(o.Fragment,{children:"\ue5ce"}),emoji_emotions:Object(o.jsx)(o.Fragment,{children:"\uea22"}),auto_awesome:Object(o.jsx)(o.Fragment,{children:"\ue65f"}),visibility_off:Object(o.jsx)(o.Fragment,{children:"\ue8f5"}),closed_caption:Object(o.jsx)(o.Fragment,{children:"\ue01c"}),thumb_up:Object(o.jsx)(o.Fragment,{children:"\ue8dc"}),graphic_eq:Object(o.jsx)(o.Fragment,{children:"\ue1b8"})},l=function(e){var t=e.name,n=e.className,a=Object(c.a)(e,s);return Object(o.jsx)("i",Object(r.a)(Object(r.a)({},a),{},{className:i()("material-icons text-center",n),children:u[t]||t}))}},257:function(e,t,n){"use strict";var r=n(2),c=n(260);t.a=function(e,t){Object(r.useEffect)((function(){return Object(c.b)(e,t)}),[e,t])}},259:function(e,t,n){"use strict";var r=n(73),c=n(2),a=n(56);t.a=function(e){var t=Object(c.useState)(a.a.getItem(e)),n=Object(r.a)(t,2),i=n[0],o=n[1],s=Object(c.useCallback)((function(t,n){a.a.setItem(e,t,n)}),[e]);return Object(c.useEffect)((function(){var t=function(){o(a.a.getItem(e))},n=a.a.subscribe(t);return t(),n}),[e]),[i,s]}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r,c=n(105),a=n(31),i=n.n(a),o=n(369),s=n(53),u=n(249),l=n.n(u),f={Enter:13,Play:[71,415],Pause:[19,74,413],PlayPause:[32,179],Back:[461,10009],Backspace:8,Escape:27,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Red:403,Green:404,Yellow:405,Blue:406,Settings:10133};function h(e,t){var n=l()(t),r=e.keyCode||e.which;return n.some((function(t){return e.key===t||l()(f[t]).some((function(e){return r===e}))}))}function v(e){return h(e,["Back","Backspace","Escape"])}function d(e,t){return r||(r=[],window.addEventListener("keydown",function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,a,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,v(t)&&(n=!0,t.preventDefault(),t.stopPropagation()),c=Object(o.a)(r),e.prev=3,c.s();case 5:if((a=c.n()).done){e.next=15;break}if(s=a.value,u=s.key,l=s.handler,!("Back"===u&&n||h(t,u))){e.next=13;break}return e.next=10,l(t);case 10:if(!1!==e.sent){e.next=13;break}return e.abrupt("break",15);case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),c.e(e.t0);case 20:return e.prev=20,c.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}())),r=[{key:e,handler:t}].concat(Object(c.a)(r)),function(){r=r.filter((function(e){return e.handler!==t}))}}},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(11),c=n(57),a=n(2),i=n(32),o=n(52),s=n.n(o),u=n(253),l=n(252),f=n(3),h=["href","state","children","icon","iconOnly","active","className","onClick"],v=function(e){var t=e.href,n=e.state,o=e.children,v=e.icon,d=e.iconOnly,p=e.active,b=e.className,m=e.onClick,j=Object(c.a)(e,h),k=Object(i.h)(),O=Object(a.useCallback)((function(){k.push(t,n),null===m||void 0===m||m()}),[t,n,m,k]);return Object(f.jsx)(l.a,Object(r.a)(Object(r.a)({},j),{},{className:s()("whitespace-nowrap cursor-pointer p-1",{"text-gray-200":!p,"text-red-600":p},b),onClick:O,role:"button",children:Object(f.jsxs)("div",{className:"flex items-center ",children:[v&&Object(f.jsx)(u.a,{className:s()({"mr-2":!d}),name:v}),!d&&o]})}))}},323:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=323},361:function(e,t,n){"use strict";var r=n(73),c=n(2),a=n(124),i=n(371),o=n(880),s=o.description,u="".concat(o.name," ").concat(o.version);t.a=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(c.useState)(""),f=Object(r.a)(l,2),h=f[0],v=f[1];return Object(c.useEffect)((function(){var e=Object(a.detect)();v(navigator.platform),o("".concat(e.platformName," (").concat(u,")")),Object(i.deviceinfo)((function(t){v("".concat(t.modelName).concat(t.version?" (".concat(t.version,")"):"")),o("".concat(e.platformName," ").concat(t.sdkVersion||e[e.platformName]," (").concat(u,")"))}))}),[]),Object(c.useMemo)((function(){return{software:n,hardware:h,title:s}}),[n,h])}},363:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(52),c=n.n(r),a=n(3),i=function(e){var t=e.className;return Object(a.jsx)("div",{className:"fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center",children:Object(a.jsx)("i",{className:c()("animate-spin w-10 h-10 rounded-full border-t-4",t)})})}},56:function(e,t,n){"use strict";var r=n(105),c=n(89),a=n(90),i=n(93),o=n(11);function s(e,t,n,r){var c=JSON.parse(window.localStorage.getItem(e)||"{}")||{};window.localStorage.setItem(e,JSON.stringify(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},t,"undefined"!==typeof n?{value:n,expire:r?Date.now()+1e3*r:void 0}:void 0))))}var u=function(){function e(t){var n=this;Object(c.a)(this,e),this.prefix=void 0,this.listeners=void 0,this.subscribe=function(e){return n.listeners=[].concat(Object(r.a)(n.listeners),[e]),function(){n.listeners=n.listeners.filter((function(t){return t!==e}))}},this.getItem=function(e){return function(e,t){var n=(JSON.parse(window.localStorage.getItem(e)||"{}")||{})[t]||{},r=n.value,c=n.expire;return c&&Date.now()>c?null:r}(n.prefix,e)},this.setItem=function(e,t,r){var c=s(n.prefix,e,t,r);return n.emit(),c},this.removeItem=function(e){!function(e,t){s(e,t)}(n.prefix,e),n.emit()},this.prefix=t,this.listeners=[]}return Object(a.a)(e,[{key:"emit",value:function(){var e=this;requestAnimationFrame((function(){e.listeners.forEach((function(e){return e()}))}))}}]),e}();t.a=new u("kinopub")},677:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n(32),c={Index:"/",Home:"/home",Search:"/search",Watching:"/watching",Releases:"/releases/:releaseId?",Category:"/category/:categoryId",Genre:"/genres/:genreId",Channels:"/channels",Channel:"/channels/:channelId",Bookmarks:"/bookmarks",Bookmark:"/bookmarks/:bookmarkId",Collections:"/collections",Collection:"/collections/:collectionId",History:"/history",Item:"/item/:itemId",Video:"/video/:videoId",Trailer:"/trailer/:trailerId",Pair:"/pair",Donate:"/donate",Speed:"/speed",Settings:"/settings"};function a(e,t,n){var c=n?"?".concat(new URLSearchParams(n)):"";return Object(r.f)(e,t)+c}},866:function(e,t,n){},880:function(e){e.exports=JSON.parse('{"name":"kinopub.webos","version":"1.0.19","description":"Kinopub WebOS","author":"Alexandr Dascal <alexandr.dascal@gmail.com>","repository":"https://github.com/adascal/kinopub.webos","main":"src/index.tsx","license":"MIT","scripts":{"start":"craco start","build":"craco build","postbuild":"node ./scripts/msx.js","package":"node ./scripts/package.js","test":"craco test","lint":"concurrently \\"yarn run eslint\\"","lint:fix":"concurrently \\"yarn run eslint:fix\\"","eslint":"eslint \'src/**/*.ts\' \'src/**/*.tsx\'","eslint:fix":"yarn run eslint --fix","postinstall":"husky install"},"dependencies":{"@babel/runtime":"7.14.8","@enact/core":"4.0.5","@enact/i18n":"4.0.5","@enact/moonstone":"4.0.2","@enact/spotlight":"4.0.5","@enact/ui":"4.0.5","@enact/webos":"4.0.5","@sentry/browser":"6.11.0","@sentry/tracing":"6.11.0","@types/react-helmet":"6.1.2","classnames":"2.3.1","core-js":"3.16.0","element-closest-polyfill":"1.0.4","hls.js":"1.0.7","ilib":"14.9.1","intersection-observer":"0.12.0","lodash":"4.17.21","object-to-formdata":"4.1.0","react":"17.0.2","react-dom":"17.0.2","react-helmet":"6.1.0","react-query":"3.19.2","react-router-dom":"5.2.0","use-debounce":"7.0.0","whatwg-fetch":"3.6.2"},"devDependencies":{"@babel/core":"7.15.0","@babel/preset-env":"7.15.0","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.15.0","@craco/craco":"6.2.0","@enact/dev-utils":"4.1.1","@types/hls.js":"1.0.0","@types/lodash":"4.14.172","@types/react":"17.0.15","@types/react-dom":"17.0.9","@types/react-router-dom":"5.1.8","@typescript-eslint/eslint-plugin":"4.29.0","@typescript-eslint/parser":"4.29.0","@webosose/ares-cli":"2.2.0","babel-eslint":"10.1.0","concurrently":"6.2.0","dotenv-load":"2.0.0","eslint":"7.32.0","eslint-config-prettier":"8.3.0","eslint-plugin-prettier":"3.4.0","http-proxy-middleware":"2.0.1","husky":"7.0.1","import-sort-style-vmv":"2.0.2","lint-staged":"11.1.1","prettier":"2.3.2","prettier-eslint":"13.0.0","prettier-plugin-import-sort":"0.0.7","react-scripts":"4.0.3","react-uid":"2.3.1","tailwindcss":"npm:@tailwindcss/postcss7-compat","typescript":"4.3.5"}}')},881:function(e,t,n){"use strict";n.r(t);n(410),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(437),n(438),n(160),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(452),n(453),n(221),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(491),n(492),n(495),n(496),n(497),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(509),n(301),n(512),n(513),n(303),n(514),n(515),n(516),n(517),n(304),n(518),n(519),n(520),n(521),n(522),n(523),n(524),n(526),n(527),n(528),n(529),n(530),n(531),n(537),n(538),n(539),n(540),n(541),n(542),n(543),n(544),n(545),n(546),n(547),n(548),n(551),n(552),n(553),n(554),n(555),n(556),n(557),n(558),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(567),n(568),n(569),n(230),n(570),n(571),n(573),n(574),n(575),n(576),n(577),n(579),n(580),n(581),n(582),n(583),n(584),n(585),n(586),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(609),n(610),n(611),n(613),n(614),n(616),n(618),n(619),n(620),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(628),n(629),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(650),n(652),n(653),n(654),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(664),n(665),n(666),n(667),n(669),n(318),n(670),n(671),n(672);var r=n(886),c=n(372);r.a({dsn:"https://d3a635962cb2440ca6754cdc6ff9af5b@o946544.ingest.sentry.io/5895550",integrations:[new c.a.BrowserTracing],tracesSampleRate:1});var a=n(106),i=n(11),o=(n(677),n(2)),s=n.n(o),u=n(887),l=n(256),f=n(366),h=n.n(f),v=n(81),d=n(32),p=window.location.origin.startsWith("http"),b=n(3),m=function(e){return p?Object(b.jsx)(v.a,Object(i.a)({},e)):Object(b.jsx)(d.a,Object(i.a)({},e))},j=n(57),k=n(363),O=function(e){var t=e.children;return Object(b.jsx)("div",{className:"w-screen h-screen",children:t})},g=n(193),y=n.n(g),_=n(270),x=n(7),I=[[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",icon:"home",href:x.a.Home},{name:"\u041f\u043e\u0438\u0441\u043a",icon:"search",href:x.a.Search},{name:"\u042f \u0441\u043c\u043e\u0442\u0440\u044e",icon:"notifications_active",href:x.a.Watching},{name:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438",icon:"bookmark",href:x.a.Bookmarks},{name:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",icon:"list",href:x.a.Collections}].filter(Boolean),[{name:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438",icon:"new_releases",href:Object(x.b)(x.a.Releases)},{name:"\u0424\u0438\u043b\u044c\u043c\u044b",icon:"movie",href:Object(x.b)(x.a.Category,{categoryId:"movie"})},{name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",icon:"tv",href:Object(x.b)(x.a.Category,{categoryId:"serial"})},{name:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b",icon:"toys",href:Object(x.b)(x.a.Genre,{genreId:"23"})},{name:"\u0410\u043d\u0438\u043c\u0435",icon:"auto_awesome",href:Object(x.b)(x.a.Genre,{genreId:"25"})},{name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",icon:"library_music",href:Object(x.b)(x.a.Category,{categoryId:"concert"})},{name:"\u0414\u043e\u043a\u0443\u0444\u0438\u043b\u044c\u043c\u044b",icon:"archive",href:Object(x.b)(x.a.Category,{categoryId:"documovie"})},{name:"\u0414\u043e\u043a\u0443\u0441\u0435\u0440\u0438\u0430\u043b\u044b",icon:"description",href:Object(x.b)(x.a.Category,{categoryId:"docuserial"})},{name:"\u0422\u0412 \u0428\u043e\u0443",icon:"live_tv",href:Object(x.b)(x.a.Category,{categoryId:"tvshow"})},{name:"\u0421\u043f\u043e\u0440\u0442",icon:"sports_soccer",href:Object(x.b)(x.a.Channels)}].filter(Boolean),["true"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).REACT_APP_HIDE_DONATE_MENU?null:{name:"\u0414\u043e\u043d\u0430\u0442",icon:"favorite",href:x.a.Donate},{name:"\u0421\u043f\u0438\u0434\u0442\u0435\u0441\u0442",icon:"speed",href:x.a.Speed},{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings",href:x.a.Settings}].filter(Boolean)],w=function(e){var t=Object(d.i)();return Object(b.jsx)("nav",Object(i.a)(Object(i.a)({className:"group h-screen flex flex-col justify-between"},e),{},{children:y()(I,(function(e,n){return Object(b.jsx)("ul",{children:y()(e,(function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(_.a,{href:e.href,icon:e.icon,active:t.pathname.startsWith(e.href),className:"px-2 py-1 rounded-r",children:e.name})},e.href)}))},n)}))}))},T=["children"],P=function(e){var t=e.children,n=Object(j.a)(e,T);return Object(b.jsxs)("div",Object(i.a)(Object(i.a)({className:"flex h-screen w-screen overflow-hidden"},n),{},{children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"w-full px-2",children:t})]}))},E=["component","layout"],S=function(e){var t=e.component,n=e.layout,r=Object(j.a)(e,E),c=Object(o.useMemo)((function(){return"fill"===n?O:P}),[n]),a=Object(o.useMemo)((function(){return function(e){return Object(b.jsx)(c,{children:Object(b.jsx)(o.Suspense,{fallback:Object(b.jsx)(k.a,{}),children:Object(o.createElement)(t,e)})})}}),[t,c]);return Object(b.jsx)(d.b,Object(i.a)(Object(i.a)({},r),{},{render:a}))},C=n(73),A=n(251),N=n(257),R=n(31),B=n.n(R),z=n(53),U=n(196),D=n(361),L=n(259);var F=function(){var e=Object(d.h)(),t=Object(D.a)(),n=Object(U.a)("deviceAuthorization").deviceAuthorizationAsync,r=Object(U.a)("deviceNotify").deviceNotify,c=Object(L.a)("is_logged"),a=Object(C.a)(c,1)[0],i=Object(o.useCallback)((function(t,n){e.replace(x.a.Pair,{userCode:t,verificationUri:n})}),[e]);Object(o.useEffect)((function(){var r=setTimeout(Object(z.a)(B.a.mark((function r(){var c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=e.location.pathname,r.next=3,n([t,i]);case 3:c!==x.a.Pair&&c!==x.a.Index||e.replace(x.a.Home);case 4:case"end":return r.stop()}}),r)}))),500);return function(){clearTimeout(r)}}),[a,t,e,i,n]),Object(o.useEffect)((function(){var e=setTimeout((function(){r([t])}),2e3);return function(){clearTimeout(e)}}),[t,r])},K=["children"],W=function(e){var t=e.children,n=Object(j.a)(e,K),r=Object(d.h)(),c=Object(o.useState)(!1),a=Object(C.a)(c,2),s=a[0],u=a[1],l=Object(o.useCallback)((function(){r.location.pathname!==x.a.Home?r.goBack():s?window.close():(u(!0),setTimeout((function(){u(!1)}),5e3))}),[r,s]);return Object(N.a)("Back",l),F(),Object(b.jsxs)("div",Object(i.a)(Object(i.a)({},n),{},{children:[s&&Object(b.jsx)("div",{className:"fixed top-2 right-2 p-4 z-999 shadow-xl rounded-xl bg-gray-500 bg-opacity-70",children:Object(b.jsxs)(A.a,{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435,",Object(b.jsx)("br",{}),'\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u043d\u0430\u0437\u0430\u0434" \u0435\u0449\u0451 \u0440\u0430\u0437']})}),Object(b.jsx)(d.d,{children:t})]}))},H=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,1063))})),q=s.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,1058))})),M=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,1064))})),V=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,1065))})),J=s.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(23)]).then(n.bind(null,1066))})),G=s.a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,1059))})),Q=s.a.lazy((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,1067))})),Y=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(25)]).then(n.bind(null,1057))})),X=s.a.lazy((function(){return n.e(30).then(n.bind(null,1068))})),Z=s.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,1069))})),$=s.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,1055))})),ee=s.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(9)]).then(n.bind(null,1056))})),te=s.a.lazy((function(){return n.e(31).then(n.bind(null,1070))})),ne=s.a.lazy((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,1071))})),re=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(10)]).then(n.bind(null,1062))})),ce=s.a.lazy((function(){return Promise.all([n.e(0),n.e(13),n.e(22)]).then(n.bind(null,1061))})),ae=s.a.lazy((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,1060))})),ie=s.a.lazy((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,1072))})),oe=s.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(24)]).then(n.bind(null,1073))})),se=s.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(11)]).then(n.bind(null,1074))})),ue=s.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,1075))})),le=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,1076))})),fe=new u.a({defaultOptions:{queries:{staleTime:3e5}}}),he=h()((function(e){return Object(b.jsx)(m,{children:Object(b.jsx)(l.a,{client:fe,children:Object(b.jsxs)(W,Object(i.a)(Object(i.a)({},e),{},{children:[Object(b.jsx)(S,{path:x.a.Index,component:$,layout:"fill",exact:!0}),Object(b.jsx)(S,{path:x.a.Home,component:Z}),Object(b.jsx)(S,{path:x.a.Search,component:re}),Object(b.jsx)(S,{path:x.a.Category,component:M}),Object(b.jsx)(S,{path:x.a.Genre,component:V}),Object(b.jsx)(S,{path:x.a.Watching,component:ue}),Object(b.jsx)(S,{path:x.a.Releases,component:le}),Object(b.jsx)(S,{path:x.a.Bookmark,component:H}),Object(b.jsx)(S,{path:x.a.Bookmarks,component:q}),Object(b.jsx)(S,{path:x.a.Collection,component:Q}),Object(b.jsx)(S,{path:x.a.Collections,component:Y}),Object(b.jsx)(S,{path:x.a.Channel,component:J,layout:"fill"}),Object(b.jsx)(S,{path:x.a.Channels,component:G}),Object(b.jsx)(S,{path:x.a.History,component:X}),Object(b.jsx)(S,{path:x.a.Item,component:ee,layout:"fill"}),Object(b.jsx)(S,{path:x.a.Video,component:se,layout:"fill"}),Object(b.jsx)(S,{path:x.a.Trailer,component:oe,layout:"fill"}),Object(b.jsx)(S,{path:x.a.Pair,component:ne,layout:"fill"}),Object(b.jsx)(S,{path:x.a.Donate,component:ae}),Object(b.jsx)(S,{path:x.a.Speed,component:ie}),Object(b.jsx)(S,{path:x.a.Settings,component:ce}),Object(b.jsx)(S,{component:te})]}))})})})),ve=Object(b.jsx)(he,{});"undefined"!==typeof window&&Object(a.render)(ve,document.getElementById("root"));t.default=ve}},[[881,7,8]]]);
//# sourceMappingURL=main.24e639ae.chunk.js.map