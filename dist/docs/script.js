"use strict";var e=window,t=new URLSearchParams(e.location.search),n="undefined"!=typeof CSS&&CSS.supports("color","var(--clr)"),s="https://cdn.jsdelivr.net/gh/kognise/water.css/dist/",r={"dark.min.css":1.4,"dark.standalone.min.css":1.31,"dark-legacy.min.css":2.487,"dark-legacy.standalone.min.css":1.16,"light.min.css":1.4,"light.standalone.min.css":1.3,"light-legacy.min.css":.178+1.16+1.15,"light-legacy.standalone.min.css":1.15},i=function(e){var t=e.theme,n=e.isLegacy?"-legacy":"",s=e.isStandalone?".standalone":"";return"".concat(t).concat(n).concat(s,".min.css")},o=function(e){var t=e.theme,n=e.isLegacy,r=e.isStandalone,o=i({theme:t,isLegacy:n,isStandalone:r}),a='<link rel="stylesheet" href="'.concat(s).concat(o,'">');return!n||r?a:(function(e){var t=e.theme,n=e.isLegacy,r=e.isStandalone,o="dark"===t?"light":"dark",a=i({theme:o,isLegacy:n,isStandalone:r});return'\n\x3c!-- Preload the required stylesheets (optional) --\x3e\n<link rel="preload" as="style" href="'.concat(s).concat(i({theme:t,isLegacy:n,isStandalone:r}),'">\n<link rel="preload" as="style" href="').concat(s).concat(a,'" media="(prefers-color-scheme: ').concat(o,')">')}({theme:t,isLegacy:n,isStandalone:!0})+"\n\n"+a).trim()},a={_productHunt:document.querySelector("#js-producthunt"),_stylesheet:document.querySelector("#js-stylesheet"),_removeStartupStylesheet:function(){var e=document.head.querySelector("#js-startup-stylesheet");e&&document.head.removeChild(e);var t=a;t._stylesheet.removeEventListener("load",t._removeStartupStylesheet)},_updateProductHunt:function(e){this._productHunt.src=this._productHunt.src.replace(/dark|light/,e)},_updateStylesheet:function(e){this._stylesheet.href="./water.css/"+e},init:function(e,t){this._stylesheet.addEventListener("load",this._removeStartupStylesheet),this.update(e,t)},update:function(e,t){var n=e.isStandalone?e.theme:t||e.theme;this._updateStylesheet(i(e)),this._updateProductHunt(n)}},c=function(t,n){var s=e.matchMedia("(prefers-color-scheme: ".concat(t,")"));s.addListener(function(e){return n(e.matches)}),n(s.matches)},l=t.get("theme"),h={theme:"dark"===l||"light"===l?l:"dark",isLegacy:t.has("legacy")||!n,isStandalone:t.has("standalone")};new e.Vue({el:"#installation",filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},data:{versionOptions:h,preferedColorScheme:null,copyStatus:null},computed:{isOverwritten:function(){var e=this.versionOptions,t=e.isStandalone,n=e.theme;return!(t||!this.preferedColorScheme)&&n!==this.preferedColorScheme},selectedVersion:function(){return{fileName:i(this.versionOptions),fileSize:(e=this.versionOptions,r[i(e)]||0).toFixed(2),fileSnippet:o(this.versionOptions)};var e}},created:function(){var e=this;c("dark",function(t){return t&&(e.preferedColorScheme="dark")}),c("light",function(t){return t&&(e.preferedColorScheme="light")}),a.init(this.versionOptions,this.preferedColorScheme)},methods:{getTooltipMessage:function(e){return this.versionOptions.theme===e&&this.isOverwritten?"Your theme selection is currently overwritten by the theme setting on your device.":"Selected theme can be overwritten by theme setting on user's device."},copyToClipboard:function(){var t=this;Promise.resolve().then(function(){return e.clipboard.writeText(t.selectedVersion.fileSnippet)}).then(function(){return t.copyStatus="success"}).catch(function(){return t.copyStatus="failed"}),setTimeout(function(){return t.copyStatus=null},1e3)}},watch:{preferedColorScheme:function(e){a.update(this.versionOptions,e)},versionOptions:{deep:!0,handler:function(e){a.update(e,this.preferedColorScheme)}}}});
//# sourceMappingURL=script.js.map
