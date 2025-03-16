import{c as f,b as j,u as N,r as o,j as s,R as w,e as y,h as v}from"./index-bip1bZJL.js";import{H as k,B as C,f as i}from"./Header-D5Vdzl9x.js";import{M as S}from"./message.esm-qC04IPT9.js";import"./api.esm-DxGIPajk.js";import"./index-B1eWHYHJ.js";const R=()=>{const t=f(e=>e.cart),d=j(),h=N(),[x,c]=o.useState(null),[u,m]=o.useState(0);o.useEffect(()=>{const e=t.reduce((a,l)=>a+l.price*l.quantity,0);m(e)},[t]);const r=(e,a,l,n,g)=>{if(n<1||n>g){c(n<1?"Quantity cannot be less than 1":"Not enough stock available"),setTimeout(()=>c(null),3e3);return}d(y({id:e,color:a,size:l,quantity:n}))},b=(e,a,l)=>{d(v({id:e,color:a,size:l})),c("Item removed from cart"),setTimeout(()=>c(null),3e3)},p=()=>{const e=localStorage.getItem("buyNow");if(t.length===0&&!e){c("Your cart is empty. Please add items before checking out.");return}h("/checkout")};return console.log("Cart Items after reload:",t),s.jsxs(w.Fragment,{children:[s.jsx(k,{}),s.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[s.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Bag"}),x&&s.jsx(S,{severity:"",text:x,className:"bg-orange-500 text-white w-full p-2 mb-4 rounded"}),s.jsxs("div",{className:"flex flex-col lg:flex-row",children:[s.jsx("div",{className:"w-full lg:w-2/3 pr-4",children:t.length===0?s.jsx("p",{children:"Your cart is empty."}):t.map(e=>{const a=`${e.id}-${e.color}-${e.size}`;return s.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-4",children:[s.jsxs("div",{className:"flex items-center w-full lg:w-1/3",children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-24 h-24"}),s.jsxs("div",{className:"ml-4",children:[s.jsx("h2",{className:"text-lg font-bold",children:e.name}),s.jsxs("p",{className:"text-gray-500",children:["Color: ",e.color]}),s.jsxs("p",{className:"text-gray-500",children:["Size: ",e.size]})]})]}),s.jsxs("div",{className:"flex items-center w-full lg:w-1/3 mt-4 lg:mt-0",children:[s.jsx("span",{className:"text-gray-500",children:"Quantity:"}),s.jsx("button",{className:"px-2 text-gray-500",onClick:()=>r(e.id,e.color,e.size,e.quantity-1,e.stock),children:"-"}),s.jsx("input",{type:"number",value:e.quantity??"",onChange:l=>{const n=parseInt(l.target.value)||0;r(e.id,e.color,e.size,n,e.stock)},className:"w-12 text-center border mx-2"}),s.jsx("button",{className:"px-2",onClick:()=>r(e.id,e.color,e.size,e.quantity+1,e.stock),children:"+"}),s.jsx(C,{icon:"pi pi-trash",className:"p-button-danger",onClick:()=>b(e.id,e.color,e.size)})]}),s.jsx("p",{className:"text-lg font-bold text-black w-full lg:w-1/3 text-right",children:i(e.price*e.quantity)})]},a)})}),s.jsxs("div",{className:"w-full lg:w-1/3 pl-4 mt-6 lg:mt-0",children:[s.jsx("h2",{className:"text-xl font-bold mb-4",children:"Summary"}),s.jsxs("div",{className:"flex justify-between mb-2",children:[s.jsx("span",{children:"Subtotal"}),s.jsx("span",{children:i(u)})]}),s.jsxs("div",{className:"flex justify-between mb-2",children:[s.jsx("span",{children:"Estimated Shipping & Handling"}),s.jsx("span",{children:"Free"})]}),s.jsxs("div",{className:"flex justify-between mb-2",children:[s.jsx("span",{children:"Estimated Tax"}),s.jsx("span",{children:"-"})]}),s.jsxs("div",{className:"flex justify-between font-bold mb-4",children:[s.jsx("span",{children:"Total"}),s.jsx("span",{className:"text-red-500",children:i(u)})]}),s.jsx("button",{className:`w-full py-2 bg-black text-white font-bold rounded mb-2 hover:bg-gray-800 ${t.length===0?"opacity-50 cursor-not-allowed":""}`,onClick:p,disabled:t.length===0,children:"Continue to Checkout"}),s.jsx("button",{className:"w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600",children:"PayPal"})]})]})]})]})};export{R as default};
