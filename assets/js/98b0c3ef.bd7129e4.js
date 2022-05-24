"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[892],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3762:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"k8s-7",title:"Chapter 8. Persisting application data with PersistentVolumes - 8.1 + 8.2"},l={unversionedId:"k8s-7",id:"k8s-7",isDocsHomePage:!1,title:"Chapter 8. Persisting application data with PersistentVolumes - 8.1 + 8.2",description:"- \u5c0e\u8b80\u9032\u5ea6\u8868",source:"@site/docs/k8s-7.md",sourceDirName:".",slug:"/k8s-7",permalink:"/study-circle/docs/k8s-7",editUrl:"https://github.com/NCNU-OpenSource/study-circle/edit/src/docs/k8s-7.md",version:"current",frontMatter:{id:"k8s-7",title:"Chapter 8. Persisting application data with PersistentVolumes - 8.1 + 8.2"},sidebar:"docs",previous:{title:"Chapter 7. Mounting storage volumes into the Pod\u2019s containers",permalink:"/study-circle/docs/k8s-6"},next:{title:"Chapter 8. Persisting application data with PersistentVolumes - 8.3 + 8.4",permalink:"/study-circle/docs/k8s-8"}},s=[{value:"\u4e3b\u984c/\u5206\u4eab\u8005",id:"\u4e3b\u984c\u5206\u4eab\u8005",children:[]},{value:"\u9304\u5f71\u5f71\u7247",id:"\u9304\u5f71\u5f71\u7247",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=420678473"},"\u5c0e\u8b80\u9032\u5ea6\u8868")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/"},"\u7dda\u4e0a\u5171\u7b46")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/https%3A%2F%2Fhackmd.io%2F0nz-ZNq-QFixN4G-6dqJ2A%3Fview"},"\u672c\u6b21\u8b1b\u7a3f"))),(0,o.kt)("h2",{id:"\u4e3b\u984c\u5206\u4eab\u8005"},"\u4e3b\u984c/\u5206\u4eab\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6642\u9593\uff1a2022-03-26"),(0,o.kt)("li",{parentName:"ul"},"\u66f8\u7c4d\uff1aKubernetes in Action 2nd"),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u4e3b\u984c\uff1aChapter 8. Persisting application data with PersistentVolumes - 8.1 + 8.2"),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u8005\uff1a\u79cb\u5206")),(0,o.kt)("h2",{id:"\u9304\u5f71\u5f71\u7247"},"\u9304\u5f71\u5f71\u7247"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mGNMVUFQVGU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);