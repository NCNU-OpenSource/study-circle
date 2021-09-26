(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[946],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,c(c({ref:t},s),{},{components:n})):r.createElement(k,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},618:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return s}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),c={id:"docker-8",title:"Chapter 8. Building images automatically with Dockerfiles"},a={unversionedId:"docker-8",id:"docker-8",isDocsHomePage:!1,title:"Chapter 8. Building images automatically with Dockerfiles",description:"- \u5c0e\u8b80\u9032\u5ea6\u8868",source:"@site/docs/docker-8.md",sourceDirName:".",slug:"/docker-8",permalink:"/study-circle/docs/docker-8",editUrl:"https://github.com/NCNU-OpenSource/study-circle/edit/src/docs/docker-8.md",version:"current",frontMatter:{id:"docker-8",title:"Chapter 8. Building images automatically with Dockerfiles"},sidebar:"docs",previous:{title:"Chapter 7. Packaging software in images",permalink:"/study-circle/docs/docker-7"}},u=[{value:"\u4e3b\u984c/\u5206\u4eab\u8005",id:"\u4e3b\u984c\u5206\u4eab\u8005",children:[]},{value:"\u6295\u5f71\u7247",id:"\u6295\u5f71\u7247",children:[]},{value:"\u9304\u5f71\u5f71\u7247",id:"\u9304\u5f71\u5f71\u7247",children:[]},{value:"\u804a\u5929\u5ba4\u7d00\u9304",id:"\u804a\u5929\u5ba4\u7d00\u9304",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362"},"\u5c0e\u8b80\u9032\u5ea6\u8868")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/"},"\u7dda\u4e0a\u5171\u7b46"))),(0,o.kt)("h2",{id:"\u4e3b\u984c\u5206\u4eab\u8005"},"\u4e3b\u984c/\u5206\u4eab\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6642\u9593\uff1a2021-09-25"),(0,o.kt)("li",{parentName:"ul"},"\u66f8\u7c4d\uff1aDocker in Action 2nd edition"),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u4e3b\u984c\uff1aChapter 8. Building images automatically with Dockerfiles"),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u8005\uff1a@YinXun")),(0,o.kt)("h2",{id:"\u6295\u5f71\u7247"},"\u6295\u5f71\u7247"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2Fe97teUs5QxqHtwLt6BamGQ"},"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2Fe97teUs5QxqHtwLt6BamGQ")),(0,o.kt)("li",{parentName:"ul"},"\u8a0e\u8ad6\u7d00\u9304\uff1a ",(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FByqkNj9mK"},"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FByqkNj9mK"))),(0,o.kt)("h2",{id:"\u9304\u5f71\u5f71\u7247"},"\u9304\u5f71\u5f71\u7247"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/F_jnLZRVabA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"\u804a\u5929\u5ba4\u7d00\u9304"},"\u804a\u5929\u5ba4\u7d00\u9304"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'00:00:31.283,00:00:34.283\nJackKuo: \u6211\u4e5f\u53ea\u8b80\u4e86\u4e00\u534a\ud83d\ude05\n\n00:25:53.602,00:25:56.602\nJackKuo: \u4ed6\u61c9\u8a72\u662f\u60f3\u8aaa\u4e0d\u80fd "-v share:/var/log" \u9019\u6a23\n\n00:26:24.866,00:26:27.866\nJackKuo: \u5c07 volume \u5beb\u5728 Dockerfile \u4e2d\uff0c\u61c9\u8a72\u6703\u76f4\u63a5\u5c0d\u61c9\u5230 /var/lib/docker/volumes\n\n00:27:19.712,00:27:22.712\nJackKuo: \u597d\u50cf\u662f\u5f8c\u7e8c\u63a5\u53c3\u6578\u6642\u6703\u6709\u5f71\u97ff\uff1f\n\n00:28:46.545,00:28:49.545\nJackKuo: \u66f8\u88e1\u9762\u6709\u63d0\u5230 exec form \u6bd4\u8f03\u597d\n\n00:55:43.448,00:55:46.448\nJackKuo: build \u6642\u53c3\u6578\u53ea\u80fd\u662f arg\uff0c\u4e0d\u80fd\u7d66 env\n\n01:00:39.762,01:00:42.762\n\u90ed\u5b50\u7def: \u6211\u89ba\u5f97 docker \u7406\u8ad6\u4e0a\u4e0d\u6703\u81ea\u52d5\u628a shell \u7684\u8b8a\u6578\u81ea\u52d5\u5e36\u5165\uff0c\u4e0d\u7136\u5c31\u80fd\u900f\u904e on_build \u628a\u74b0\u5883\u8b8a\u6578\u5077\u8d70\u4e86\n\n01:01:55.632,01:01:58.632\nJackKuo: \u6191\u8457\u5169\u5e74\u524d\u5beb go \u7684\u7d93\u9a57\uff0c go mod init \u61c9\u8a72\u662f\u5fc5\u8981\u7684\uff0c\u4f60\u6c92\u505a\u932f\n\n01:05:39.611,01:05:42.611\nJackKuo: \u8acb\u554f heavyweight \u662f\u6307\uff1f\n\n01:10:10.217,01:10:13.217\n\u90ed\u5b50\u7def: \u6211\u8a8d\u70ba\uff0csystemd \u9700\u8981\u8655\u7406\u7684\u6771\u897f\u5f88\u591a\uff0c\u4f8b\u5982\u6709\u4e9b service \u8981\u5148\u555f\u52d5\uff0c\u5176\u4ed6 service \u624d\u80fd\u555f\u52d5\uff0c\u5728 container \u7684\u4e16\u754c\uff0c\u6068\u591a\u6642\u5019\u6211\u5011\u53ea\u662f\u9700\u8981\u8dd1\u4e00\u500b service <\n\n01:10:48.452,01:10:51.452\n\u90ed\u5b50\u7def: \u5be6\u5728\u4e0d\u9700\u8981 \u592a\u591a\u529f\u80fd\u7684 init \u7a0b\u5f0f\n\n01:22:51.313,01:22:54.313\nJackKuo: https://hackmd.io/pyWU4nTvSyK4pqgPFPlQqA?view\n\n01:23:02.774,01:23:05.774\nJackKuo: \u554f\u984c\u89e3\u7b54\u5927\u90e8\u5206\u90fd\u6709\u5beb\u5230\u9019\u4e86\n\n01:23:41.247,01:23:44.247\nJackKuo: docker images --digests\n\n01:54:41.657,01:54:44.657\nSafeFly: \u611f\u8b1d\uff5e\n')))}s.isMDXComponent=!0}}]);