(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6250],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8906:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),c={id:"k8s-2",title:"Chapter 2. First steps with Docker and Kubernetes, Chapter 3. Pods: running containers in Kubernetes"},a={unversionedId:"k8s-2",id:"k8s-2",isDocsHomePage:!1,title:"Chapter 2. First steps with Docker and Kubernetes, Chapter 3. Pods: running containers in Kubernetes",description:"- \u5c0e\u8b80\u9032\u5ea6\u8868",source:"@site/docs/k8s-2.md",sourceDirName:".",slug:"/k8s-2",permalink:"/study-circle/docs/k8s-2",editUrl:"https://github.com/NCNU-OpenSource/study-circle/edit/src/docs/k8s-2.md",version:"current",frontMatter:{id:"k8s-2",title:"Chapter 2. First steps with Docker and Kubernetes, Chapter 3. Pods: running containers in Kubernetes"},sidebar:"docs",previous:{title:"Pre-Class microk8s Setup",permalink:"/study-circle/docs/k8s-1"},next:{title:"Chapter 4 Introducing the Kubernetes API objects",permalink:"/study-circle/docs/k8s-3"}},u=[{value:"\u4e3b\u984c/\u5206\u4eab\u8005",id:"\u4e3b\u984c\u5206\u4eab\u8005",children:[]},{value:"\u9304\u5f71\u5f71\u7247",id:"\u9304\u5f71\u5f71\u7247",children:[]},{value:"\u804a\u5929\u5ba4\u7d00\u9304",id:"\u804a\u5929\u5ba4\u7d00\u9304",children:[]}],s={toc:u};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362"},"\u5c0e\u8b80\u9032\u5ea6\u8868")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/"},"\u7dda\u4e0a\u5171\u7b46")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/https%3A%2F%2Fhackmd.io%2FqWXdVnXMSg2__8OwQQgxRw%3Fview"},"\u672c\u6b21\u8b1b\u7a3f"))),(0,o.kt)("h2",{id:"\u4e3b\u984c\u5206\u4eab\u8005"},"\u4e3b\u984c/\u5206\u4eab\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6642\u9593\uff1a2021-01-22"),(0,o.kt)("li",{parentName:"ul"},"\u66f8\u7c4d\uff1aKubernetes in Action"),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u4e3b\u984c\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Chapter 2. First steps with Docker and Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"Chapter 3. Pods: running containers in Kubernetes"))),(0,o.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u8005\uff1a\u79cb\u5206 / @chofinn")),(0,o.kt)("h2",{id:"\u9304\u5f71\u5f71\u7247"},"\u9304\u5f71\u5f71\u7247"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/n5uviquGkzg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"\u804a\u5929\u5ba4\u7d00\u9304"},"\u804a\u5929\u5ba4\u7d00\u9304"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"00:05:03.433,00:05:06.433\n\u738b\u8302\u6797: \u8a0e\u8ad6\u5171\u7b46 URL\uff1a\nhttps://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FxGb3kF59SySSpcytoXCQnA\n\n00:59:26.685,00:59:29.685\n\u6d2a\u80e4\u52db: condition \u53ea\u6709\n\n00:59:39.337,00:59:42.337\n\u6d2a\u80e4\u52db: \u91dd\u5c0d node \u800c\u5df2\u561b\n\n01:01:06.557,01:01:09.557\n\u6d2a\u80e4\u52db: OK \u611f\u8b1d\n\n01:02:57.608,01:03:00.608\n\u738b\u8302\u6797: kubectl api-resources --namespaced\n")))}l.isMDXComponent=!0}}]);