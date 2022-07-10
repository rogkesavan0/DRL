"use strict";(self.webpackChunkdr_red=self.webpackChunkdr_red||[]).push([[662],{6137:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(5160),o=a(1413),s=a(885),n=a(2791),l=a(5532),d=a(184);var c=function(){var e=(0,n.useState)(""),t=(0,s.Z)(e,2),a=t[0],r=t[1],c=(0,n.useCallback)((function(e){e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(e){r(e.target.result)},t.readAsDataURL(e)}))}),[]),i=(0,l.uI)({onDrop:c,maxFiles:1,accept:{"image/*":[]}}),p=i.getRootProps,u=i.getInputProps;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",(0,o.Z)((0,o.Z)({className:"dc w-full h-10 my-4 p-8 border rounded-xl shadow-sm"},p()),{},{children:[(0,d.jsx)("input",(0,o.Z)({},u())),(0,d.jsx)("p",{children:"Drag and drop image file here, or click to select image"})]})),(0,d.jsx)("div",{className:"h-80 border rounded",children:a&&(0,d.jsx)("img",{className:"h-80 mx-auto object-cover rounded",src:a,alt:"uploaded"})}),(0,d.jsx)("textarea",{className:"my-4",rows:"2",placeholder:"Remarks"}),(0,d.jsx)("button",{className:"block w-40 py-1.5 mx-auto text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]",children:"Submit"})]})},i=a(7715),p=a(9127);var u=function(e){var t=e.title,a=void 0===t?"":t;return(0,d.jsx)("div",{className:"h-96 mt-6 border rounded",children:(0,d.jsx)("img",{className:"h-96 mx-auto object-cover rounded",src:"LR Copy"===a||"Seal Code"===a?i:p,alt:"uploaded"})})};var x=function(e){var t=e.isOpen,a=e.closeModal,o=e.type,s=e.dprNo,n=void 0===s?"":s,l=e.title,i=void 0===l?"":l;return(0,d.jsxs)(r.Z,{isOpen:t,closeModal:a,contentCls:"w-[900px]",children:[(0,d.jsx)(r.x,{title:i+" Document ".concat(o),closeModal:a}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"DPR No:"})," ",n]}),"Upload"===o?(0,d.jsx)(c,{}):(0,d.jsx)(u,{title:i})]})}},9662:function(e,t,a){a.r(t);var r=a(885),o=a(2791),s=a(6137),n=a(184),l=[{dprNo:"18448980",lrCopy:"View",status:"Approved"},{dprNo:"27618480",lrCopy:"View",status:"Rejected"},{dprNo:"18485720",lrCopy:"Upload",status:"Pending"},{dprNo:"16735480",lrCopy:"View",status:"Approved"},{dprNo:"16699910",lrCopy:"View",status:"Processing"},{dprNo:"33479480",lrCopy:"Upload",status:"Pending"},{dprNo:"23458488",lrCopy:"Upload",status:"Pending"},{dprNo:"55445661",lrCopy:"View",status:"Rejected"},{dprNo:"64668989",lrCopy:"Upload",status:"Pending"},{dprNo:"245678098",lrCopy:"View",status:"Processing"},{dprNo:"567890987",lrCopy:"View",status:"Rejected"},{dprNo:"332211669",lrCopy:"Upload",status:"Pending"},{dprNo:"23158483",lrCopy:"Upload",status:"Pending"},{dprNo:"15005665",lrCopy:"View",status:"Rejected"},{dprNo:"22229891",lrCopy:"Upload",status:"Pending"},{dprNo:"12409876",lrCopy:"View",status:"Processing"}];t.default=function(){var e=(0,o.useState)({state:!1,data:{}}),t=(0,r.Z)(e,2),a=t[0],d=t[1];return(0,n.jsxs)("section",{className:"dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]",children:[(0,n.jsx)("div",{className:"scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl",children:(0,n.jsxs)("table",{className:"w-full",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"sticky top-0 bg-white font-medium text-gray-500",children:[(0,n.jsx)("td",{className:"p-4",children:"DPR No."}),(0,n.jsx)("td",{className:"p-4",children:"LR Copy"}),(0,n.jsx)("td",{className:"p-4",children:"Status"})]})}),(0,n.jsx)("tbody",{children:l.map((function(e){return(0,n.jsxs)("tr",{className:"border-y",children:[(0,n.jsx)("td",{className:"px-4 py-2",children:e.dprNo}),(0,n.jsx)("td",{className:"px-4 py-2",children:(0,n.jsx)("button",{className:"w-24 py-0.5 text-sm rounded-full text-white ".concat("Upload"===e.lrCopy?"bg-green-400 hover:bg-green-600":"bg-[#6e5bc5] hover:bg-[#4b3a92]"),onClick:function(){return function(e){d({state:!0,data:e})}({type:e.lrCopy,title:"LR Copy",dprNo:e.dprNo})},children:e.lrCopy})}),(0,n.jsx)("td",{className:"px-4 py-2 ".concat("Approved"===e.status?"text-green-500":""," ").concat("Processing"===e.status?"text-green-900":""," ").concat("Pending"===e.status?"text-yellow-500":""," ").concat("Rejected"===e.status?"text-red-600":""),children:e.status})]},e.dprNo)}))})]})}),(0,n.jsx)(s.Z,{isOpen:a.state,closeModal:function(){d({state:!1,data:{}})},type:a.data.type,title:a.data.title,dprNo:a.data.dprNo})]})}},5160:function(e,t,a){a.d(t,{x:function(){return x},Z:function(){return m}});var r,o=a(2791),s=a(7175),n=a(535),l=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function i(e,t){var a=e.title,s=e.titleId,n=c(e,l);return o.createElement("svg",d({viewBox:"0 0 16 16",ref:t,"aria-labelledby":s},n),a?o.createElement("title",{id:s},a):null,r||(r=o.createElement("path",{fill:"var(--svg-color, #000)",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})))}var p=o.forwardRef(i),u=(a.p,a(184));function x(e){var t=e.icon,a=void 0===t?"":t,r=e.title,o=void 0===r?"":r,s=e.closeModal,n=void 0===s?function(){}:s;return(0,u.jsxs)("div",{className:"df mb-4",children:[(0,u.jsxs)("h1",{className:"df text-xl font-bold",children:[a,o]}),(0,u.jsx)(p,{className:"w-8 h-8 shrink-0 ml-auto",onClick:n})]})}var m=function(e){var t=e.isOpen,a=void 0===t||t,r=e.closeModal,l=void 0===r?function(){}:r,d=e.children,c=e.overlayCls,i=void 0===c?"":c,p=e.contentCls,x=void 0===p?"":p;return(0,u.jsx)(s.u,{appear:!0,show:a,as:o.Fragment,children:(0,u.jsxs)(n.V,{className:"modal-wrapper",onClose:l,children:[(0,u.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)("div",{className:"modal-overlay ".concat(i)})}),(0,u.jsx)("div",{className:"fixed inset-0",children:(0,u.jsx)("div",{className:"dc h-full p-4",children:(0,u.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,u.jsx)(n.V.Panel,{className:"modal-content ".concat(x),children:d})})})})]})})}},7715:function(e,t,a){e.exports=a.p+"static/media/seal.1fb05ec109ef91e06b58.png"},9127:function(e,t,a){e.exports=a.p+"static/media/tax.3626c0cc770802a17ea3.png"}}]);
//# sourceMappingURL=662.a53f6b27.chunk.js.map