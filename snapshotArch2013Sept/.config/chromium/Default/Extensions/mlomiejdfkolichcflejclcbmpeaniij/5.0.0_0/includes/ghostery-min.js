/*!
 * Ghostery for Chrome
 * http://www.ghostery.com/
 *
 * Copyright 2013 EVIDON, Inc. All rights reserved.
 * See ghostery_eula.txt for license.
 */
(function(){function e(){for(var e="";32>e.length;)e+=Math.random().toString(36).replace(/[^A-Za-z]/g,"");return e}function t(e){return w.createElement(e)}function n(){return t("br")}function o(e){for(var t=1;arguments.length>t;t++)e.appendChild(arguments[t])}function r(e,n){var o=t("script"),r=k.top.document.documentElement;e?o.src=e:o.textContent=n,r.insertBefore(o,r.firstChild)}function a(){var e=t("style"),n=" !important;";e.innerHTML="#"+g+"{"+"border:solid 2px #fff"+n+"box-sizing:content-box"+n+"color:#fff"+n+"display:block"+n+"height:auto"+n+"margin:0"+n+"opacity:0.9"+n+"padding:7px 10px"+n+"position:fixed"+n+"visibility:visible"+n+"width:auto"+n+"z-index:2147483647"+n+"-webkit-border-radius:5px"+n+"-webkit-box-shadow:0px 0px 20px #000"+n+"-webkit-box-sizing:content-box"+n+"}"+"."+g+"-blocked{"+"color:#777"+n+"display:inline"+n+"text-decoration:line-through"+n+"}"+"#"+g+" br{display:block"+n+"}"+"#"+g+" span{background:transparent"+n+"}"+"#"+g+" div{"+"border:0"+n+"margin:0"+n+"padding:0"+n+"width:auto"+n+"letter-spacing:normal"+n+"font:13px Arial,Helvetica"+n+"text-align:left"+n+"text-shadow:none"+n+"text-transform:none"+n+"word-spacing:normal"+n+"}"+"#"+g+" a{"+"font-weight:normal"+n+"background:none"+n+"text-decoration:underline"+n+"color:#fff"+n+"}"+"@media print{#"+g+"{display:none"+n+"}}",o(w.getElementsByTagName("head")[0],e)}function i(){var e=w.getElementById(g);e&&e.parentNode.removeChild(e),clearTimeout(f)}function l(e,n){var r=t("a");return r.style.color="#fff",r.style.textDecoration="underline",r.style.border="none",r.href=e||"#",e&&(r.target="_blank"),o(r,w.createTextNode(n)),r}function s(e,n){var r=t("span");return n&&(r.className=n),o(r,w.createTextNode(e)),r}function d(e,n){var r=t("div");return r.id=g,r.style.setProperty(n&&"left"==n.pos_x?"left":"right","20px","important"),r.style.setProperty(n&&"bottom"==n.pos_y?"bottom":"top","15px","important"),r.style.setProperty("background","showBugs"==e?"#330033":"#777","important"),w.getElementsByTagName("body")[0]?o(w.body,r):o(w.getElementsByTagName("html")[0],r),"showBugs"==e&&(r.style.cursor="pointer",r.addEventListener("click",function(e){i(),e.preventDefault()})),r}function c(e,r,a){"showBugs"!=e&&i();var c,p,u=t("div");if(u.style.setProperty("background","showBugs"==e?"#330033":"#777","important"),"showBugs"==e)for(var m=0;r.length>m;m++)o(u,s(r[m].name,r[m].blocked?g+"-blocked":""),n());else"showUpdateAlert"!=e&&o(u,l("http://purplebox.ghostery.com/?cat=82",y.notification_upgrade)),("showWalkthroughAlert"==e||"showUpdateAlert"==e)&&("showUpdateAlert"==e?(o(u,s(y.notification_update)),p=l("",y.notification_update_link)):(o(u,n(),n(),s(y.notification_reminder1),n(),s(y.notification_reminder2)),p=l("",y.notification_reminder_link)),p.addEventListener("click",function(t){_("showUpdateAlert"==e?"showNewTrackers":"openWalkthrough"),t.preventDefault()}),o(u,n(),n(),p)),p=l(!1,y.dismiss),p.addEventListener("click",function(e){i(),e.preventDefault()}),o(u,n(),n(),p);c=w.getElementById(g),c||(c=d(e,a)),c.innerHTML="",o(c,u),clearTimeout(f),a&&a.timeout&&(f=setTimeout(i,1e3*a.timeout))}function p(e,t,n){e.addEventListener("load",function(){var o=e.contentDocument;o.documentElement.innerHTML=n,t.button?(e.style.width="30px",e.style.height="19px",e.style.border="0px"):(e.style.width="100%",e.style.border="1px solid #ccc",e.style.height="80px"),t.frameColor&&(e.style.background=t.frameColor),o.getElementById("action-once").addEventListener("click",function(e){_("processC2P",{action:"once",app_ids:t.allow}),e.preventDefault()},!0),t.button||o.getElementById("action-always").addEventListener("click",function(e){_("processC2P",{action:"always",app_ids:t.allow}),e.preventDefault()},!0)},!1)}function u(e,n,r){n.forEach(function(e,n){for(var a=w.querySelectorAll(e.ele),i=0,l=a.length;l>i;i++){var s=a[i];e.attach&&"parentNode"==e.attach&&s.parentNode&&"BODY"!=s.parentNode.nodeName&&(s=s.parentNode,s.textContent="");var d=t("iframe");"parentNode"!=e.attach&&(s.textContent=""),p(d,e,r[n]),o(s,d)}})}var f,g=e(),m={},h=!1,y={},b=!1,x=chrome.extension,v=chrome.runtime,w=document,k=window,E=v&&v.onMessage||x.onMessage,_=function(e,t){return(v&&v.sendMessage||x.sendMessage)({name:e,message:t})};E.addListener(function(e,t,n){if(!t.tab||t.tab.url==x.getURL("background.html")){var o=["show","showUpgradeAlert","showWalkthroughAlert","showUpdateAlert"],i=e.name,l=e.message;"c2p"==i&&(m[l.app_id]=[l.app_id,l.data,l.html],"complete"==w.readyState&&u.apply(this,m[l.app_id])),-1!=o.indexOf(i)?(h||(h=!0,a()),"show"==i?b||c("showBugs",l.bugs,l.alert_cfg):(y=l.translations,c(i),b=!0)):"surrogate"==i?r(null,l.surrogate):"reload"==i&&w.location.reload(),n({})}}),k.addEventListener("load",function(){for(var e in m)u.apply(this,m[e])},!1),_("pageInjected")})();