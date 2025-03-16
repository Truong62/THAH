import{r as m,j as e,u as D,L as Y,R as X}from"./index-bip1bZJL.js";import{C as Q,u as Z,a as ee,f as T,H as te,B as z}from"./Header-D5Vdzl9x.js";import{S as A,N as V,A as $,a as C,t as G,P as se}from"./pagination-C1Y7SFC4.js";import{M as ae}from"./message.esm-qC04IPT9.js";import{a as re}from"./axios-CCb-kr4I.js";import{P as j}from"./index-B1eWHYHJ.js";import{P as ie,c as J}from"./api.esm-DxGIPajk.js";import{p as R,C as K}from"./data-DIzMAdG_.js";import{F as ne}from"./Footer-Cd8HA7IL.js";import{L as le}from"./Layout-Cnb8wrxi.js";import"./proxy-BZWb0IlI.js";function oe(s){let{swiper:t,extendParams:i,on:r}=s;i({grid:{rows:1,fill:"column"}});let l,p,u,h;const g=()=>{let o=t.params.spaceBetween;return typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o)),o},w=o=>{const{slidesPerView:c}=t.params,{rows:a,fill:n}=t.params.grid,d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:o.length;u=Math.floor(d/a),Math.floor(d/a)===d/a?l=d:l=Math.ceil(d/a)*a,c!=="auto"&&n==="row"&&(l=Math.max(l,c*a)),p=l/a},b=()=>{t.slides&&t.slides.forEach(o=>{o.swiperSlideGridSet&&(o.style.height="",o.style[t.getDirectionLabel("margin-top")]="")})},y=(o,c,a)=>{const{slidesPerGroup:n}=t.params,d=g(),{rows:x,fill:E}=t.params.grid,P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:a.length;let S,v,f;if(E==="row"&&n>1){const M=Math.floor(o/(n*x)),F=o-x*n*M,H=M===0?n:Math.min(Math.ceil((P-M*x*n)/x),n);f=Math.floor(F/H),v=F-f*H+M*n,S=v+f*l/x,c.style.order=S}else E==="column"?(v=Math.floor(o/x),f=o-v*x,(v>u||v===u&&f===x-1)&&(f+=1,f>=x&&(f=0,v+=1))):(f=Math.floor(o/p),v=o-f*p);c.row=f,c.column=v,c.style.height=`calc((100% - ${(x-1)*d}px) / ${x})`,c.style[t.getDirectionLabel("margin-top")]=f!==0?d&&`${d}px`:"",c.swiperSlideGridSet=!0},N=(o,c)=>{const{centeredSlides:a,roundLengths:n}=t.params,d=g(),{rows:x}=t.params.grid;if(t.virtualSize=(o+d)*l,t.virtualSize=Math.ceil(t.virtualSize/x)-d,t.params.cssMode||(t.wrapperEl.style[t.getDirectionLabel("width")]=`${t.virtualSize+d}px`),a){const E=[];for(let P=0;P<c.length;P+=1){let S=c[P];n&&(S=Math.floor(S)),c[P]<t.virtualSize+c[0]&&E.push(S)}c.splice(0,c.length),c.push(...E)}},k=()=>{h=t.params.grid&&t.params.grid.rows>1},I=()=>{const{params:o,el:c}=t,a=o.grid&&o.grid.rows>1;h&&!a?(c.classList.remove(`${o.containerModifierClass}grid`,`${o.containerModifierClass}grid-column`),u=1,t.emitContainerClasses()):!h&&a&&(c.classList.add(`${o.containerModifierClass}grid`),o.grid.fill==="column"&&c.classList.add(`${o.containerModifierClass}grid-column`),t.emitContainerClasses()),h=a};r("init",k),r("update",I),t.grid={initSlides:w,unsetSlides:b,updateSlide:y,updateWrapperSize:N}}const ce=(s,t={})=>{const[i,r]=m.useState([]),[l,p]=m.useState(!0),[u,h]=m.useState(null);return m.useEffect(()=>{(async()=>{p(!0);try{const w=await re.get(s,{params:t});r(w.data.data)}catch(w){h(w)}finally{p(!1)}})().then()},[s]),{data:i,loading:l,error:u}},de="/assets/intro-DdjhYLVB.mp4",me="/assets/intro2-DwsVT8n7.mp4";function B(s){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(s)}function pe(s,t){if(B(s)!=="object"||s===null)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t||"default");if(B(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function xe(s){var t=pe(s,"string");return B(t)==="symbol"?t:String(t)}function ue(s,t,i){return t=xe(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}var he={root:function(t){var i=t.props;return J("p-skeleton p-component",{"p-skeleton-circle":i.shape==="circle","p-skeleton-none":i.animation==="none"})}},ge=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,fe={root:{position:"relative"}},L=Q.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:he,inlineStyles:fe,styles:ge}});function U(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function q(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?U(Object(i),!0).forEach(function(r){ue(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}var _=m.memo(m.forwardRef(function(s,t){var i=Z(),r=m.useContext(ie),l=L.getProps(s,r),p=L.setMetaData({props:l}),u=p.ptm,h=p.cx,g=p.sx,w=p.isUnstyled;ee(L.css.styles,w,{name:"skeleton"});var b=m.useRef(null);m.useImperativeHandle(t,function(){return{props:l,getElement:function(){return b.current}}});var y=l.size?{width:l.size,height:l.size,borderRadius:l.borderRadius}:{width:l.width,height:l.height,borderRadius:l.borderRadius},N=i({ref:b,className:J(l.className,h("root")),style:q(q({},y),g("root")),"aria-hidden":!0},L.getOtherProps(l),u("root"));return m.createElement("div",N)}));_.displayName="Skeleton";const O=({shape:s="rectangle",width:t="100%",height:i="350px",size:r,borderRadius:l,count:p=1,className:u=""})=>e.jsx(e.Fragment,{children:Array.from({length:p}).map((h,g)=>e.jsx("div",{className:"w-full h-full",children:s==="circle"||r?e.jsx(_,{shape:"circle",size:r,className:`animate-pulse ${u}`}):s==="square"&&r?e.jsx(_,{size:r,className:`animate-pulse ${u}`}):e.jsx(_,{width:t,height:i,borderRadius:s==="rounded"?l||"16px":void 0,className:`animate-pulse ${u}`})},g))});O.propTypes={shape:j.oneOf(["rectangle","rounded","square","circle"]),width:j.string,height:j.string,size:j.string,borderRadius:j.string,count:j.number,className:j.string};const we=()=>{const s=D();return e.jsx("div",{className:"bg-white",children:e.jsx(A,{spaceBetween:20,slidesPerView:4,modules:[V,$],autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:10},425:{slidesPerView:1,spaceBetween:15},683:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:20}},children:R.map((t,i)=>{const r=()=>{s(`/products/${t.productName}`)};return e.jsx(C,{className:"flex justify-center items-center p-4",children:e.jsx("div",{className:"w-[22rem] h-auto",children:e.jsx(K,{nameProduct:t.productName,description:G(t.productDescription,40),price:T(t.variants[0].price),brand:t.brand,nameTag:t.tags||[],imageUrl:t.variants[0].images[0],onClick:r})})},i)})})})},ve=()=>{const s=D();if(!R||R.length===0)return e.jsx("div",{children:"No products available"});const i=R.sort((r,l)=>new Date(l.dateAdded)-new Date(r.dateAdded)).slice(0,4);return e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:i.map((r,l)=>e.jsx(K,{nameProduct:r.productName,description:G(r.productDescription,30),price:T(r.variants[0].price),brand:r.brand,nameTag:r.tag,imageUrl:r.variants[0].images[0],onClick:()=>s(`/products/${r.productName}`),badgeText:"NEW"},l))})},W=[{name:"Adidas",image:"https://th.bing.com/th/id/OIP.jda-jGq1luFgO1x1v1Y4bAHaFC?rs=1&pid=ImgDetMain"},{name:"Converse",image:"https://www.pngmart.com/files/22/Converse-Logo-PNG-Clipart.png"},{name:"Nike",image:"https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"},{name:"Vans",image:"https://www.creativosonline.org/wp-content/uploads/2022/02/Logo-VANS.png"},{name:"New Balance",image:"https://th.bing.com/th/id/R.2854eddd63b5883724a0929ac04a0a3f?rik=yh2eJPdS4a9RHQ&pid=ImgRaw&r=0"},{name:"Balenciaga",image:"https://th.bing.com/th/id/OIP.lmZBJBM8QlUAvmO0lMUbBwHaHa?rs=1&pid=ImgDetMain"},{name:"Reebok",image:"https://logos-world.net/wp-content/uploads/2020/05/Reebok-Logo-1993.png"},{name:"Bitis",image:"https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/untitled_7.png?itok=_uoKrGvy"},{name:"Jordan",image:"https://logos-download.com/wp-content/uploads/2016/04/Jordan_logo_logotype.png"},{name:"Puma",image:"https://i.pinimg.com/originals/87/34/07/87340705b51a12d6bbdd99f0d6c4a910.png"}],be=()=>e.jsxs("div",{className:"",children:[e.jsx("div",{className:"hidden md:grid grid-cols-5 gap-4",children:W.map((s,t)=>e.jsx("div",{className:"flex justify-center items-center h-24  rounded-md",children:e.jsx("img",{src:s.image,alt:s.name,className:"h-full object-contain"})},t))}),e.jsx("div",{className:"md:hidden",children:e.jsx(A,{slidesPerView:2,grid:{rows:2,fill:"row"},spaceBetween:10,pagination:{clickable:!0},modules:[oe,se],children:W.map((s,t)=>e.jsx(C,{children:e.jsx("div",{className:"flex justify-center items-center h-24 rounded-md",children:e.jsx("img",{src:s.image,alt:s.name,className:"h-full object-contain"})})},t))})})]}),je=[{icon:"https://file.hstatic.net/1000366086/file/policies_icon_1__1_.png",title:"Miễn phí vận chuyển",description:"Với đơn hàng đầu tiên"},{icon:"https://file.hstatic.net/1000366086/file/policies_icon_2__1_.png",title:"Ưu đãi hấp dẫn",description:"Nhiều khuyến mãi"},{icon:"https://file.hstatic.net/1000366086/file/policies_icon_3__1_.png",title:"100% chính hãng",description:"Bảo đảm chất lượng"},{icon:"https://file.hstatic.net/1000366086/file/policies_icon_4__1_.png",title:"Hotline: 0971443180",description:"Gọi ngay để mua hàng nhanh hơn"}],ye=()=>e.jsx("div",{className:"w-full max-w-6xl mx-auto px-4",children:e.jsx(A,{spaceBetween:30,slidesPerView:1,modules:[V,$],autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,navigation:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},425:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:30}},children:je.map((s,t)=>e.jsx(C,{className:"flex justify-center",children:e.jsxs("div",{className:"flex items-center space-x-9 p-4 bg-white",children:[e.jsx("img",{src:s.icon,alt:s.title,className:"w-10 h-10"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-semibold whitespace-nowrap",children:s.title}),e.jsx("div",{className:"text-gray-500 text-sm",children:s.description})]})]})},t))})}),Ne=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-shopping-bag",children:[e.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Pe=()=>{const[s,t]=m.useState(!1);return m.useEffect(()=>{const i=setTimeout(()=>t(!0),500);return()=>clearTimeout(i)},[]),e.jsxs("section",{className:"relative min-h-screen w-full overflow-hidden pt-20",children:[e.jsx("div",{className:"absolute inset-0 bg-sand-light texture-overlay -z-10"}),e.jsx("div",{className:"container mx-auto px-4 md:px-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 min-h-[80vh] items-center py-12 md:py-20",children:[e.jsxs("div",{className:`space-y-6 md:space-y-8 transition-all duration-1000 ${s?"opacity-100":"opacity-0 translate-y-4"}`,children:[e.jsx("h1",{className:"font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance",children:"Elevate Your Style With Premium Footwear"}),e.jsx("p",{className:"text-stone-600 text-lg md:text-xl leading-relaxed max-w-xl",children:"Discover our hand-crafted collection of luxury shoes, designed for comfort and created for those who appreciate timeless elegance."}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:e.jsx("button",{className:"border border-stone-300 hover:border-stone-400 bg-transparent text-stone-900 rounded-lg px-6 py-6 font-medium transition-all duration-300 flex items-center space-x-2 text-base",children:e.jsx(Y,{to:"/products",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Ne,{}),e.jsx("span",{children:"BUY NOW"})]})})})}),e.jsxs("div",{className:"flex items-center space-x-4 pt-6",children:[e.jsxs("div",{className:"flex -space-x-2",children:[[...Array(4)].map((i,r)=>e.jsx("div",{className:"h-10 w-10 rounded-full border-2 border-white overflow-hidden",children:e.jsx("img",{src:`https://randomuser.me/api/portraits/men/${20+r}.jpg`,alt:`Customer ${r}`,className:"h-full w-full object-cover"})},r)),e.jsx("div",{className:"h-10 w-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-xs font-medium text-stone-600",children:"+2K"})]}),e.jsxs("div",{className:"text-sm text-stone-600",children:["Trusted by"," ",e.jsx("span",{className:"font-semibold text-stone-900",children:"2,000+"})," ","customers"]})]})]}),e.jsxs("div",{className:`relative h-full transition-all duration-1000 delay-300 ${s?"opacity-100":"opacity-0 translate-y-8"}`,children:[e.jsxs("div",{className:"relative aspect-square md:aspect-auto md:h-[36rem] animate-image-glow",children:[e.jsx("div",{className:"absolute -top-6 -left-6 w-32 h-32 bg-stone-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-rotate-slow"}),e.jsx("div",{className:"absolute -bottom-8 -right-8 w-32 h-32 bg-sand bg-opacity-80 rounded-full mix-blend-multiply blur-xl opacity-70 animate-rotate-slow animation-delay-2000"}),e.jsx("div",{className:"relative h-full w-full rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",alt:"Premium leather shoes on display",className:"h-full w-full object-cover",onLoad:()=>t(!0)})})]}),e.jsx("div",{className:"absolute -top-5 -right-5 md:top-10 md:right-10 bg-white rounded-xl p-4 shadow-lg glassmorphism animate-fade-up delay-300",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"flex",children:[1,2,3,4,5].map(i=>e.jsx("svg",{className:"h-4 w-4 text-yellow-400 fill-current",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})},i))}),e.jsx("p",{className:"text-xs font-medium mt-1",children:"4.9 from 2K+ reviews"})]})})]})]})})]})},Se=[{id:"cat1",name:"Men's Collection",image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"/men"},{id:"cat2",name:"Women's Collection",image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"/women"},{id:"cat3",name:"Accessories",image:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"/accessories"}],De=()=>{const s=D(),[t,i]=m.useState(!1),[r,l]=m.useState({id:"",name:"",description:"",brand:"",image:"",tags:[],price:0}),[p,u]=m.useState([]),h=m.useRef(null),{data:g,loading:w,error:b}=ce("http://localhost:5000/api/product",{limit:10,page:1,order:"desc"}),[y,N]=m.useState("");m.useEffect(()=>{N(b?`Error: ${b.message}`:"")},[b]),m.useEffect(()=>{if(g&&g.length>0){const a=g.map(n=>({id:n.productId,name:n.productName,description:n.productDescription,brand:n.brandName,image:n.imagePath||"https://placehold.co/300x300",tags:n.tag,price:n.price}));u(a),l(a[0])}},[g]);const k=a=>{if(h.current&&h.current.swiper){const n=h.current.swiper,d=p.findIndex(x=>x.id===r.id);a==="next"?d<p.length-1&&(l(p[d+1]),n.slideNext()):a==="prev"&&d>0&&(l(p[d-1]),n.slidePrev())}},[I,o]=m.useState(!1);m.useEffect(()=>{o(!0)},[]);let c=!1;return document.addEventListener("wheel",a=>{if(c)return;c=!0;const n=Array.from(document.querySelectorAll("div[id='scrollPro']"));if(n.length===0)return;let d=n.findIndex(x=>x.getBoundingClientRect().top>=0);a.deltaY>0&&d<n.length-1?(a.preventDefault(),n[d+1].scrollIntoView({behavior:"smooth"})):a.deltaY<0&&d>0&&(a.preventDefault(),n[d-1].scrollIntoView({behavior:"smooth"})),setTimeout(()=>{c=!1},500)},{passive:!1}),e.jsxs(X.Fragment,{children:[e.jsx(te,{}),e.jsx("div",{id:"scrollPro",children:e.jsx(Pe,{})}),e.jsxs(le,{w:"1440px",children:[e.jsxs("div",{className:"min-h-screen",id:"scrollPro",children:[e.jsxs("div",{className:"relative w-full h-[200px] md:h-[400px] my-4 md:my-8",children:[e.jsxs("video",{className:"w-full h-full object-cover",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,onError:a=>{a.currentTarget.style.display="none",document.getElementById("fallback-image").style.display="block"},children:[e.jsx("source",{src:de,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("img",{id:"fallback-image",src:"https://placehold.co/300x300",alt:"Fallback",style:{display:"none"}}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h1",{className:"text-white text-3xl md:text-8xl font-light text-center drop-shadow-lg",children:"SHIFTED COUNTER"})})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:gap-4 my-8 md:my-12 px-4",children:[e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"}),e.jsx("span",{className:"text-lg md:text-xl",children:"NEWEST"}),e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"})]}),e.jsx(ve,{})]}),e.jsxs("div",{className:"min-h-screen",id:"scrollPro",children:[e.jsx("div",{className:"my-12",children:e.jsx(ye,{})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-6",children:[e.jsxs("div",{className:"col-span-1 md:col-span-6",children:[e.jsx("div",{className:"aspect-square overflow-hidden group",children:e.jsxs("video",{className:"aspect-square object-cover w-full h-full",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[e.jsx("source",{src:me,type:"video/mp4"}),"Your browser does not support the video tag."]})}),e.jsx("div",{className:"mt-4",children:r.description.length>150&&e.jsx("div",{className:"flex items-center",children:e.jsx(z,{icon:t?"pi pi-chevron-up":"pi pi-chevron-down",onClick:()=>i(!t),className:"p-button-text text-[#5AA1E3] hover:text-[#4890d2]",label:t?"Show Less":"See More"})})})]}),e.jsxs("div",{className:"col-span-1 md:col-span-6",children:[e.jsx("p",{className:"text-sm mb-6 text-center md:text-left",children:"WE BELIEVE THAT FASHION IS NOT JUST ABOUT WHAT YOU WEAR, ITS A POWERFUL MEANS OF SELF-EXPRESSION AND TRANSFORMATION."}),e.jsxs("div",{className:"flex gap-2 md:gap-4 mb-10",children:[e.jsx("button",{onClick:()=>k("prev"),className:"slider-prev border border-gray-300 w-full md:w-[300px] px-4 md:px-8 py-2 hover:border-black",children:"←"}),e.jsx("button",{onClick:()=>k("next"),className:"slider-next bg-[#5AA1E3] w-full md:w-[300px] text-white px-4 md:px-8 py-2",children:"→"})]}),e.jsx(A,{ref:h,modules:[V,$],autoplay:{delay:2500,disableOnInteraction:!1},spaceBetween:10,slidesPerView:"auto",loop:!1,navigation:!1,freeMode:!0,children:w?Array.from({length:10}).map((a,n)=>e.jsx(C,{className:"!w-[300px] md:!w-[350px]",children:e.jsxs("div",{className:"bg-gray-50 p-4 h-full",children:[e.jsx("div",{className:"mb-4",children:e.jsx(O,{shape:"square",size:"10rem"})}),e.jsx("div",{className:"mb-2",children:e.jsx(O,{width:"80%",height:"1rem"})}),e.jsx("div",{className:"mb-2",children:e.jsx(O,{width:"50%",height:"1rem"})}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Array.from({length:3}).map((d,x)=>e.jsx(O,{width:"4rem",height:"0.8rem"},`tag-skeleton-${x}`))})]})},`skeleton-${n}`)):p.map(a=>e.jsx(C,{className:"!w-[300px] md:!w-[350px]",onClick:()=>l({id:a.id,name:a.name,description:a.description,brand:a.brand,image:a.image,tags:a.tags,price:a.price}),children:e.jsxs("div",{className:`bg-gray-50 cursor-pointer group relative h-full ${r.id===a.id?"bg-gray-200":""}`,children:[e.jsxs("div",{className:"relative w-full h-[350px]",children:[e.jsx("img",{src:a.image,alt:a.name,className:"w-full h-full object-cover object-center",onError:n=>n.currentTarget.src="https://placehold.co/300x300"}),e.jsx("p",{className:"absolute bottom-0 left-0 bg-white/80 px-2 py-1 text-xs md:text-base font-bold",children:T(a.price)}),e.jsx("div",{className:"absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",children:e.jsx("button",{className:"bg-[#5AA1E3] text-white px-4 py-1 text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",onClick:()=>s(`/productDetail/${a.id}`),children:"View Detail"})})]}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsx("span",{className:"uppercase text-xs md:text-sm line-clamp-1",children:a.name}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:a.tags.map(n=>e.jsxs("span",{className:"text-[10px] md:text-xs text-gray-500",children:["#",n.tagName]},n.tagId))})]})]})},a.id))}),!w&&y&&e.jsxs("div",{className:"flex flex-col items-center justify-center mb-6 max-w-4xl mx-auto p-4 border border-red-300 rounded-lg bg-red-50",children:[e.jsx(ae,{severity:"",text:y,className:"w-full text-center"}),e.jsx(z,{label:"Reload",onClick:()=>window.location.reload(),className:"mt-3 p-button-danger p-button-outlined p-2 rounded border border-red-300 bg-red-300  rounded-lg opacity-90 hover:opacity-100 transition duration-300"})]}),e.jsx("div",{className:"text-center mt-8",children:e.jsx("button",{onClick:()=>s("/products"),className:"w-full md:w-auto bg-[#5AA1E3] text-white px-8 md:px-16 py-2",children:"SEE MORE PRODUCTS"})})]})]})]}),e.jsxs("div",{id:"scrollPro",className:"flex items-center justify-center gap-2 md:gap-4 my-8 md:my-12 px-4",children:[e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"}),e.jsx("span",{className:"text-lg md:text-xl",children:"HOT PRODUCTS"}),e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"})]}),e.jsx("div",{id:"scrollPro",children:e.jsx(we,{})}),e.jsx("div",{id:"scrollPro",children:e.jsx("section",{className:"py-16 md:py-24 bg-white",children:e.jsxs("div",{className:"container mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"text-center mb-12 md:mb-16",children:[e.jsx("h2",{className:"text-sm uppercase tracking-wider text-stone-500 font-medium mb-2",children:"Browse by Category"}),e.jsx("h3",{className:"font-display text-3xl md:text-4xl font-semibold tracking-tight",children:"Find Your Perfect Pair"}),e.jsx("p",{className:"text-stone-600 mt-3 max-w-2xl mx-auto",children:"Explore our carefully curated collections for every occasion and style preference."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",children:Se.map((a,n)=>e.jsxs(Y,{to:"/",className:`group relative rounded-xl overflow-hidden aspect-[3/4] transition-all duration-700 delay-${n*200} ${I?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"}),e.jsx("img",{src:a.image,alt:a.name,className:"h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col justify-end p-6 z-20",children:[e.jsx("h4",{className:"text-white font-display text-2xl font-medium mb-2",children:a.name}),e.jsx("div",{className:"flex items-center text-white/90 text-sm",children:e.jsx("span",{children:"Explore Collection"})})]})]},a.id))})]})})}),e.jsxs("div",{id:"scrollPro",className:"flex items-center justify-center gap-2 md:gap-4 my-8 md:my-12 px-4",children:[e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"}),e.jsx("span",{className:"text-lg md:text-xl",children:"BRANDS COLLARS"}),e.jsx("div",{className:"h-px bg-gray-300 w-16 md:w-32"})]}),e.jsx(be,{})]}),e.jsx(ne,{})]})};export{De as default};
