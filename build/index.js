!function(){"use strict";var e,r={273:function(){var e=window.wp.blocks,r=window.wp.element,n=(window.wp.i18n,window.wp.blockEditor);(0,e.registerBlockType)("create-block/magnolia-about",{edit:function(){const e=(0,n.useBlockProps)();return(0,r.createElement)("div",e,(0,r.createElement)(n.InnerBlocks,{template:[["core/image",{}],["core/heading",{placeholder:"About Site Header"}],["core/paragraph",{placeholder:"Dazzle us"}]],templateLock:"all"}))},save:function(){const e=n.useBlockProps.save();return(0,r.createElement)("div",e,(0,r.createElement)(n.InnerBlocks.Content,{template:[["core/image",{}],["core/heading",{placeholder:"About Site Header:"}],["core/paragraph",{placeholder:"Dazzle us"}]],templateLock:"all"}))}})}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=function(r,n,t,a){if(!n){var c=1/0;for(p=0;p<e.length;p++){n=e[p][0],t=e[p][1],a=e[p][2];for(var l=!0,i=0;i<n.length;i++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(l=!1,a<c&&(c=a));if(l){e.splice(p--,1);var u=t();void 0!==u&&(r=u)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,t,a]},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};o.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,a,c=n[0],l=n[1],i=n[2],u=0;if(c.some((function(r){return 0!==e[r]}))){for(t in l)o.o(l,t)&&(o.m[t]=l[t]);if(i)var p=i(o)}for(r&&r(n);u<c.length;u++)a=c[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},n=self.webpackChunkmagnolia_about=self.webpackChunkmagnolia_about||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var t=o.O(void 0,[431],(function(){return o(273)}));t=o.O(t)}();