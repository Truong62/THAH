import{r as o,R as g,j as n}from"./index-bip1bZJL.js";import{C as S,u as E,a as I,H as R,e as F,B as T}from"./Header-D5Vdzl9x.js";import{P as z,I as L,c as O}from"./api.esm-DxGIPajk.js";import"./index-B1eWHYHJ.js";function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v(e)}function M(e,r){if(v(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,r||"default");if(v(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $(e){var r=M(e,"string");return v(r)==="symbol"?r:String(r)}function P(e,r,t){return r=$(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var q={value:"p-tag-value",icon:"p-tag-icon",root:function(r){var t=r.props;return O("p-tag p-component",P(P({},"p-tag-".concat(t.severity),t.severity!==null),"p-tag-rounded",t.rounded))}},V=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,y=S.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:q,styles:V}});function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function W(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?w(Object(t),!0).forEach(function(s){P(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var A=o.forwardRef(function(e,r){var t=E(),s=o.useContext(z),a=y.getProps(e,s),c=y.setMetaData({props:a}),u=c.ptm,l=c.cx,d=c.isUnstyled;I(y.css.styles,d,{name:"tag"});var f=o.useRef(null),h=t({className:l("icon")},u("icon")),i=L.getJSXIcon(a.icon,W({},h),{props:a});o.useImperativeHandle(r,function(){return{props:a,getElement:function(){return f.current}}});var p=t({ref:f,className:O(a.className,l("root")),style:a.style},y.getOtherProps(a),u("root")),m=t({className:l("value")},u("value"));return o.createElement("span",p,i,o.createElement("span",m,a.value),o.createElement("span",null,a.children))});A.displayName="Tag";var U={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},J=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,K={spinner:function(r){var t=r.props;return{animationDuration:t.animationDuration}}},b=S.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:U,styles:J,inlineStyles:K}}),k=o.memo(o.forwardRef(function(e,r){var t=E(),s=o.useContext(z),a=b.getProps(e,s),c=o.useRef(null),u=b.setMetaData({props:a}),l=u.ptm,d=u.cx,f=u.sx,h=u.isUnstyled;I(b.css.styles,h,{name:"progressspinner"}),o.useImperativeHandle(r,function(){return{props:a,getElement:function(){return c.current}}});var i=t({id:a.id,ref:c,style:a.style,className:O(a.className,d("root")),role:"progressbar","aria-busy":!0},b.getOtherProps(a),l("root")),p=t({className:d("spinner"),viewBox:"25 25 50 50",style:f("spinner")},l("spinner")),m=t({className:d("circle"),cx:"50",cy:"50",r:"20",fill:a.fill,strokeWidth:a.strokeWidth,strokeMiterlimit:"10"},l("circle"));return o.createElement("div",i,o.createElement("svg",p,o.createElement("circle",m)))}));k.displayName="ProgressSpinner";var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=g.createContext&&g.createContext(_),Y=["attr","size","title"];function G(e,r){if(e==null)return{};var t=Q(e,r),s,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)s=c[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}function Q(e,r){if(e==null)return{};var t={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(r.indexOf(s)>=0)continue;t[s]=e[s]}return t}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},N.apply(this,arguments)}function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?D(Object(t),!0).forEach(function(s){X(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function X(e,r,t){return r=Z(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e){var r=ee(e,"string");return typeof r=="symbol"?r:r+""}function ee(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function B(e){return e&&e.map((r,t)=>g.createElement(r.tag,j({key:t},r.attr),B(r.child)))}function x(e){return r=>g.createElement(te,N({attr:j({},e.attr)},r),B(e.child))}function te(e){var r=t=>{var{attr:s,size:a,title:c}=e,u=G(e,Y),l=a||t.size||"1em",d;return t.className&&(d=t.className),e.className&&(d=(d?d+" ":"")+e.className),g.createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:d,style:j(j({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&g.createElement("title",null,c),e.children)};return C!==void 0?g.createElement(C.Consumer,null,t=>r(t)):r(_)}function re(e){return x({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"},child:[]}]})(e)}function ne(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function se(e){return x({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function ae(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(e)}function ie(e){return x({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}const oe=[{orderId:1,orderCode:"ORD0012325",customerName:"Nguyễn Hoàng Hiệp",phoneNumber:"0987654321",email:"hiephoang@gmail.com",detailAddress:"Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",orderDate:"2023-10-01",status:"Delivered",cartItems:[{productId:11,image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/AIR+FORCE+1+%2707.png",productName:"Nike AirForce 1",quantity:1,size:36},{productId:11,image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/AIR+FORCE+1+%2707.png",productName:"Nike AirForce 1",quantity:1,size:41}]},{orderId:2,orderCode:"ORD0012326",customerName:"Jane Smith",phoneNumber:"N/A",email:"N/A",detailAddress:"N/A",orderDate:"2023-10-02",status:"Pending",cartItems:[{productId:103,image:"https://via.placeholder.com/100",productName:"Product C",quantity:1,size:"N/A"},{productId:104,image:"https://via.placeholder.com/100",productName:"Product D",quantity:3,size:"N/A"}]},{orderId:3,orderCode:"ORD0012327",customerName:"Alice Johnson",phoneNumber:"N/A",email:"N/A",detailAddress:"N/A",orderDate:"2023-10-03",status:"Delivered",cartItems:[{productId:105,image:"https://via.placeholder.com/100",productName:"Product E",quantity:1,size:"N/A"}]},{orderId:4,orderCode:"ORD0012328",customerName:"Bob Brown",phoneNumber:"N/A",email:"N/A",detailAddress:"N/A",orderDate:"2023-10-04",status:"Cancelled",cartItems:[{productId:106,image:"https://via.placeholder.com/100",productName:"Product F",quantity:2,size:"N/A"},{productId:107,image:"https://via.placeholder.com/100",productName:"Product G",quantity:1,size:"N/A"}]},{orderId:5,orderCode:"ORD0012329",customerName:"Charlie Davis",phoneNumber:"N/A",email:"N/A",detailAddress:"N/A",orderDate:"2023-10-05",status:"Order Confirmed",cartItems:[{productId:108,image:"https://via.placeholder.com/100",productName:"Product H",quantity:4,size:"N/A"}]}],pe=()=>{var h;const[e,r]=o.useState(""),[t,s]=o.useState(null),[a,c]=o.useState(window.innerWidth<640);o.useEffect(()=>{const i=()=>c(window.innerWidth<640);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const u=()=>{const i=oe.find(p=>p.orderCode===e);s(i||null)},l=i=>["Order Confirmed","Shipped","Out For Delivery","Delivered"].indexOf(i),d=i=>{switch(i){case"Cancelled":return{severity:"danger",icon:n.jsx("faTimesCircle",{})};case"Pending":return{severity:"secondary",icon:n.jsx("faClock",{})};default:return{severity:"info",icon:n.jsx("faInfoCircle",{})}}},f={"Order Confirmed":n.jsx(ne,{className:"text-green-500 text-xl"}),Shipped:n.jsx(ie,{className:"text-yellow-500 text-xl"}),"Out For Delivery":n.jsx(se,{className:"text-blue-500 text-xl"}),Delivered:n.jsx(re,{className:"text-purple-500 text-xl"}),Cancelled:n.jsx(ae,{className:"text-red-500 text-xl"})};return n.jsxs(n.Fragment,{children:[n.jsx(R,{}),n.jsxs("div",{className:"flex flex-col items-center bg-[#A8DCE7] min-h-screen p-8",children:[n.jsx("div",{className:"w-full max-w-4xl mb-6",children:n.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/002/457/610/large_2x/delivery-cute-stickers-template-set-vector.jpg",alt:"Order Tracking Banner",className:"w-full h-auto object-cover rounded-2xl shadow-md"})}),n.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl",children:[n.jsx("h1",{className:"text-2xl font-bold text-center text-[#272B3B] mb-4",children:"Track Your Order"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx(F,{placeholder:"Enter order code",className:"p-inputtext-lg w-full h-12 border rounded-lg p-2",value:e,onChange:i=>r(i.target.value)}),n.jsx(T,{label:"Find",className:"p-button-danger p-button-lg border rounded-lg p-2",onClick:u})]}),t&&n.jsxs("div",{className:"mt-6 p-4 border rounded-lg bg-gray-100",children:[n.jsxs("h2",{className:"text-xl font-bold",children:["Order Code: ",t.orderCode]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Customer:"})," ",t.customerName]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Phone:"})," ",t.phoneNumber]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Email:"})," ",t.email]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Address:"})," ",t.detailAddress]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Order Date:"})," ",t.orderDate]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("strong",{children:"Status:"})," ",n.jsx(A,{severity:d(t.status),value:t.status})]}),t.status==="Pending"&&n.jsxs("div",{className:"flex flex-col items-center mt-6",children:[n.jsx(k,{style:{width:"40px",height:"40px"},strokeWidth:"5",animationDuration:".5s"}),n.jsx("span",{className:"text-sm font-semibold text-black mt-2",children:"Processing..."})]}),t.status!=="Pending"&&t.status!=="Cancelled"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex items-center justify-between mt-6",children:["Order Confirmed","Shipped","Out For Delivery","Delivered"].map((i,p)=>{const m=p<=l(t.status);return n.jsx("div",{className:"flex flex-col items-center",children:a?n.jsx("span",{className:m?"text-green-500":"text-gray-400",children:f[i]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${m?"bg-green-500":"bg-gray-300"}`}),n.jsx("span",{className:`text-sm font-semibold ${m?"text-green-600":"text-gray-400"}`,children:i})]})},p)})}),n.jsx("div",{className:"w-full h-1 bg-gray-300 mt-2 relative",children:n.jsx("div",{className:"absolute top-0 left-0 h-full bg-green-500",style:{width:`${l(t.status)/3*100}%`}})})]}),n.jsx("h3",{className:"font-semibold mt-4",children:"Products:"}),n.jsx("div",{className:"mt-2 space-y-2",children:(h=t.cartItems)==null?void 0:h.map((i,p)=>n.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg bg-white",children:[n.jsx("img",{src:i.image,alt:i.productName,className:"w-16 h-16 object-cover rounded"}),n.jsxs("div",{className:"flex flex-col flex-1 ml-4",children:[n.jsx("span",{className:"font-semibold",children:i.productName}),n.jsxs("span",{className:"text-gray-500",children:["Size: ",i.size]})]}),n.jsxs("span",{className:"text-gray-600",children:["Qty: ",i.quantity]})]},p))})]})]})]})]})};export{pe as default};
