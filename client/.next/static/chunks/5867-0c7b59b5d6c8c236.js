"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5867],{4297:function(a,b,c){var d=c(5893);c(7294);var e=c(6339);b.Z=function(){return(0,d.jsx)("div",{className:"h-full w-full flex justify-center items-center",children:(0,d.jsx)(e.G,{})})}},5867:function(a,b,c){c.d(b,{Z:function(){return I}});var d=c(7568),e=c(6042),f=c(9396),g=c(828),h=c(9815),i=c(4051),j=c.n(i),k=c(5893),l=c(1664),m=c.n(l),n=c(7294),o=c(9785),p=c(5892),q=c(5675),r=c.n(q),s=c(5678),t=c(1772),u=function(a){var b=a.col,c=a.arrFilters,d=a.onCheckHandler,e=(0,n.useRef)(),f=(0,n.useState)(!1),g=f[0],h=f[1];return(0,s.t$)(e,function(){return h(function(a){return!a})}),b.filters?(0,k.jsxs)(n.Fragment,{children:[(0,k.jsx)("span",{className:"ml-[40px] ",onClick:function(a){h(function(a){return!a})},children:(0,k.jsx)(r(),{src:"/svg/icon-filter.svg",alt:"icon-filter",className:"cursor-pointer ",width:14,height:14})}),g&&(0,k.jsx)(n.Fragment,{children:(0,k.jsx)("div",{ref:e,className:"absolute inset-x-0 space-y-[10px] p-[10px] shadow-select min-w-[200px] border rounded-[8px] bg-white",children:b.filters.map(function(a,e){var f;return(0,k.jsxs)("div",{className:"flex items-center space-x-[12px]",children:[(0,k.jsx)(t.X,{inputId:a.name,name:"category",value:a.value,onChange:function(c){return d({name:a.name,value:a.value,field:b.field})},checked:(f=a,c.some(function(a){return a.value===f.value}))}),(0,k.jsx)("label",{htmlFor:a.name,className:" text-gray-900 cursor-pointer",children:a.name})]},e)})})})]}):null},v=function(a){var b=a.isLabel,c=a.option,d=void 0===c?{}:c,e=a.selectedOptions,f=a.onOptionChange,g=(void 0===e?[]:e).some(function(a){return a.id===d.id});return(0,k.jsxs)("div",{className:"flex items-center space-x-[1rem]",children:[void 0!==b&&b&&(0,k.jsx)("label",{className:"text-gray-100 font-semibold",htmlFor:d.id,children:d.name}),(0,k.jsx)(t.X,{inputId:d.id,name:d.name,value:d.id,onChange:function(){return f(d)},checked:g}),(0,k.jsx)("span",{})]})},w=c(1163),x=c.n(w),y=function(){var a=(0,w.useRouter)(),b=function(b){var c=b.target.value;c?a.query.search=c:delete a.query.search,x().push({pathname:a.pathname,query:a.query})};return(0,k.jsx)("div",{children:(0,k.jsx)("div",{className:" flex items-center space-x-[20px] border border-gray-300 rounded-[8px] pl-[10px] overflow-hidden min-w-[400px] bg-white text-gray-900",children:(0,k.jsx)("input",{onChange:function(a){return b(a)},type:"text",placeholder:"T\xecm kiếm",className:"border-none py-[8px] w-full focus:ring-0 focus:outline-none placeholder-gray-900"})})})},z=c(9403),A=c(9962),B=c(4297),C=c(4924),D=c(4184),E=c.n(D),F=function(a,b){return Array.from({length:b-a+1},function(b,c){return c+a})},G=function(a){var b=a.totalCount,c=a.pageSize,d=a.siblingCount,e=void 0===d?1:d,f=a.currentPage;return(0,n.useMemo)(function(){var a=Math.ceil(b/c);if(e+5>=a)return F(1,a);var d=Math.max(f-e,1),g=Math.min(f+e,a),i=d>2,j=g<a-2;if(!i&&j){var k=F(1,3+2*e);return(0,h.Z)(k).concat(["...",a])}if(i&&!j){var l=F(a-(3+2*e)+1,a);return[1,"..."].concat((0,h.Z)(l))}if(i&&j){var m=F(d,g);return[1,"..."].concat((0,h.Z)(m),["...",a])}},[b,c,e,f])},H=function(a){var b,c=a.onPageChange,d=a.onPageSizeChange,e=a.totalCount,f=a.siblingCount,g=a.currentPage,h=a.pageSize,i=void 0===h?5:h,j=a.className,l=null!==(b=G({currentPage:g,totalCount:e,siblingCount:void 0===f?1:f,pageSize:i}))&& void 0!==b?b:[];if(0===g||l.length<1)return null;var m=function(){c(g+1)},n=function(){c(g-1)},o=function(a){"Enter"===a.key&&c(Number(a.target.value))},p=l[l.length-1];return(0,k.jsxs)("div",{className:"pagination bg-white w-full",children:[(0,k.jsxs)("div",{className:"flex items-center space-x-[8px]",children:[(0,k.jsx)("div",{className:"text text-[#4B5563]",children:"Danh s\xe1ch hiển thị"}),(0,k.jsxs)("div",{className:"select select-pagination",children:[(0,k.jsx)("input",{type:"number",defaultValue:i,className:"max-h-[2.5rem] text-[#4B5563] bg-[#f6f6fa] rounded-[8px] text-[14px] px-[8px] py-[10px] w-full"},i),(0,k.jsx)("span",{className:"icon dropdown"}),(0,k.jsxs)("div",{className:"select-options",children:[(0,k.jsx)("div",{className:"select-options-pagination-item",onClick:function(){return d(10)},children:"10"}),(0,k.jsx)("div",{className:"select-options-pagination-item",onClick:function(){return d(20)},children:"20"}),(0,k.jsx)("div",{className:"select-options-pagination-item",onClick:function(){return d(30)},children:"30"})]})]})]}),(0,k.jsxs)("ul",{className:E()("pagination-container",(0,C.Z)({},j,j)),children:[(0,k.jsx)("li",{className:E()("pagination-item",{disabled:1===g}),onClick:n,children:(0,k.jsx)("div",{className:"arrow left"})}),l.map(function(a,b){return"..."===a?(0,k.jsx)("li",{className:"pagination-item dots",children:"…"},b):(0,k.jsx)("li",{className:E()("pagination-item",{selected:a===g}),onClick:function(){return c(a)},children:a},b)}),(0,k.jsx)("li",{className:E()("pagination-item",{disabled:g===p}),onClick:m,children:(0,k.jsx)("div",{className:"arrow right"})})]}),(0,k.jsxs)("div",{className:"flex items-center body space-x-[8px]",children:[(0,k.jsx)("input",{type:"number",onKeyDown:function(a){return o(a)},defaultValue:g,className:"text-center bg-gray-130 rounded-[8px] text-prime w-[2.5rem] p-[8px] border border-gray-300 focus:outline-none"},g),(0,k.jsxs)("div",{className:"body text-[#4B5563]",children:["trong số ",Math.ceil(e/i)," "]})]})]})};function I(a){a.loading;var b,c=a.columns,i=a.dataSource,l=a.model,q=a.isShowCreateBtn,r=void 0===q||q,C=(0,w.useRouter)(),D=C.query,E=C.isReady,F=D.page,G=D.page_size,I=D.search,J=function(){var a=[],b=!0,d=!1,e=void 0;try{for(var f,h=function(){var b=(0,g.Z)(f.value,2),d=b[0],e=b[1];(null==e?void 0:e.split(",")).forEach(function(b){c.find(function(c){if(c&&c.filters){var e=c.filters.find(function(a){return a.value===b});if(e){var f={name:e.name,value:e.value,field:d};a.push(f)}}})})},i=Object.entries(C.query)[Symbol.iterator]();!(b=(f=i.next()).done);b=!0)h()}catch(j){d=!0,e=j}finally{try{b||null==i.return||i.return()}finally{if(d)throw e}}return a},K=(0,n.useState)([]),L=K[0],M=K[1],N=(0,n.useState)([]),O=N[0],P=N[1],Q=(0,n.useState)(!1),R=Q[0],S=Q[1],T=(0,n.useState)(1),U=T[0],V=T[1],W=(0,n.useState)(10),X=W[0],Y=W[1];n.useEffect(function(){E&&(P(J()),V(F?Number(F):1),Y(G?Number(G):10))},[E]),n.useEffect(function(){i&&i.data&&V(1)},[I,O,X]),(0,s.rf)(function(){var a=O.reduce(function(a,b){var c,d=b.field,e=b.value,f=a[d]?a[d].split(","):[];return a[d]=null!==(c=a[d])&& void 0!==c?c:"",f.push(e),a[d]=f.join(),a},{});Object.values(C.query)&&x().push({pathname:C.pathname,query:(0,f.Z)((0,e.Z)({},a),{page:U,page_size:X})})},[E,O,U,X]);var Z,$=(b=(0,d.Z)(j().mark(function a(b){return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return confirm("Bạn c\xf3 chắc muốn x\xf3a"),a.next=3,o.Z.delete("".concat(l.route,"/delete/").concat(b.id)).then(function(a){p.Z.$dispatch("refreshListData","")}).catch(function(a){console.log(a)});case 3:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}),_=function(a,b){switch(a[b]){case"active":return(0,k.jsx)("span",{className:"text-[#00b69b] p-[6px] rounded-[4px] bg-[#EAF7F5]",children:"Hoạt động"});case"inactive":return(0,k.jsx)("span",{className:"text-[#f576ad] p-[6px] rounded-[4px] bg-[#feebf3]",children:"Ẩn"});default:return(0,k.jsx)("span",{children:a[b]})}},aa=function(a){var b=O.some(function(b){return b.name===a.name})?O.filter(function(b){return b.name!==a.name}):(0,h.Z)(O).concat([a]);P(b)},ab=function(a){var b=L.some(function(b){return b.id===a.id})?L.filter(function(b){return b.id!==a.id}):(0,h.Z)(L).concat([a]);M(b)},ac=function(a){a.checked?(S(!0),M(i.data)):(S(!1),M([]))},ad=(Z=(0,d.Z)(j().mark(function a(){var b;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return confirm("Bạn c\xf3 chắc muốn x\xf3a"),b=L.map(function(a){return a.id}),a.next=4,o.Z.post("".concat(l.route,"/deleteMultipleIds"),{ids:b}).then(function(a){a&&(S(!1),p.Z.$dispatch("refreshListData",""))});case 4:case"end":return a.stop()}},a)})),function(){return Z.apply(this,arguments)});return(0,k.jsxs)(n.Fragment,{children:[(0,k.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,k.jsxs)("div",{className:"flex items-center space-x-[12px]",children:[function(){if(r)return(0,k.jsx)(m(),{href:"/admin/".concat(l&&l.route?l.route:"","/form"),children:(0,k.jsx)(z.z,{size:"small",label:"Tạo Mới",icon:"pi pi-plus"})})}(),(0,k.jsx)("div",{className:"title-1 font-bold",children:l&&l.title})]}),(0,k.jsx)(y,{})]}),(0,k.jsxs)("div",{className:"overflow-x-auto bg-white rounded shadow",children:[L.length>0&&(0,k.jsxs)("div",{className:"py-[4px] px-[8px] flex items-center space-x-[12px] bg-prime text-white text-[12px]",children:[(0,k.jsxs)("div",{className:"",children:[" ",L.length," mục được chọn"]}),(0,k.jsx)("div",{onClick:function(){return ad()},className:"font-semibold cursor-pointer",children:"X\xf3a tất cả"})]}),(0,k.jsxs)("table",{className:"table",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)("div",{className:"relative flex items-center space-x-[8px]",children:(0,k.jsx)(t.X,{checked:R,onChange:function(a){return ac(a)}})})}),c.map(function(a,b){return(0,k.jsx)("th",{id:a.field,children:(0,k.jsxs)("div",{className:"relative",children:[(0,k.jsx)("span",{className:"space-x-[4px] inline-flex items-center",children:(0,k.jsx)("span",{children:a.label})}),(0,k.jsx)(u,{arrFilters:O,onCheckHandler:function(a){return aa(a)},col:a})]})},b)}),(0,k.jsx)("th",{className:"py-0",children:(0,k.jsx)("div",{className:"text-center",children:"..."})})]})}),(0,k.jsx)("tbody",{children:i?i&&i.data.map(function(a,b){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)(v,{isLabel:!1,option:a,selectedOptions:L,onOptionChange:ab})}),c.map(function(b,c){return(0,k.jsx)("td",{children:"thumbnail"===b.field?(0,k.jsx)("div",{className:"aspect-w-2 aspect-h-1 min-h-[60px] flex items-center",children:(0,k.jsx)(A.E,{zoomSrc:a[b.field]?a[b.field].path:"",src:a[b.field]?a[b.field].path:"",alt:"Image",width:"100px",height:"100px",preview:!0})}):_(a,[b.field])},c)}),(0,k.jsx)("td",{children:(0,k.jsxs)("div",{className:"flex items-center justify-center space-x-[12px]",children:[(0,k.jsx)("div",{className:"cursor-pointer",children:(0,k.jsx)(m(),{href:{pathname:"/admin/".concat(l&&l.route?l.route:"","/form"),query:{id:a.id}},children:(0,k.jsx)("div",{children:(0,k.jsx)("i",{className:"pi pi-file-edit"})})})}),(0,k.jsx)("div",{className:"cursor-pointer",onClick:function(){return $(a)},children:(0,k.jsx)("i",{className:"pi pi-trash"})})]})})]},b)}):(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:100,children:(0,k.jsx)(B.Z,{})})})})]})]}),(0,k.jsx)("div",{className:"py-[8px] w-full bg-white mt-[10px]",children:(0,k.jsx)("div",{className:"flex w-full",children:i&&(0,k.jsx)(H,{className:"pagination-bar",currentPage:null!=U?U:1,totalCount:i.totalItems,pageSize:null!=X?X:10,onPageChange:function(a){return V(a)},onPageSizeChange:function(a){return Y(a)}})})})]})}},5892:function(a,b){b.Z={$on:function(a,b){document.addEventListener(a,function(a){return b(a.detail)})},$dispatch:function(a,b){var c=new CustomEvent(a,{detail:b});document.dispatchEvent(c)},$remove:function(a,b){document.removeEventListener(a,b)}}}}])