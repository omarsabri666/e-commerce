import{u as m,a as u,c as d,j as e,f,d as h,l as j,Q as i,m as g,U as p,g as y,h as c,L as o,n as N}from"./index-65a6176d.js";function v({item:t}){const s=m(),a=u(),{mutate:l,isLoading:n}=d({mutationFn:()=>j(t.id),onSuccess:()=>{s.invalidateQueries(["wishlist"]),i.info("item was deleted ")},onError:()=>{i.error("could not delete item ")}}),{mutate:r}=d({mutationFn:()=>g(t.id),onSuccess:()=>{s.invalidateQueries({queryKey:["cart"]}),i.success("item was added to cart")},onError:()=>{i.error("could not add item to cart")}});async function x(){l()}return e.jsxs("div",{className:" flex    justify-around items-center",children:[e.jsxs("div",{onClick:()=>a(`/productDetails/${t.id}`),className:"  items-center flex-col sm:flex-row  cursor-pointer flex   sm:gap-10",children:[e.jsx("img",{src:t.imageCover,className:"  md:w-40 md:h-40 rounded-lg shadow-xl  w-24 h-28",alt:`${t.title}img`}),e.jsx("div",{className:"  w-10  md:w-36  ",children:e.jsx("h2",{children:t.title})})]}),e.jsx("h3",{className:" text-omar font-bold",children:f(t.price)}),e.jsxs("div",{className:"   flex-wrap  flex gap-1 md:gap-8 items-center",children:[e.jsx("button",{"aria-label":"delete button",disabled:n,onClick:x,className:" text-red-600 text-3xl",children:e.jsx(h,{})}),e.jsx("button",{onClick:r,className:"  outline outline-[#ff3c20]   hover:text-white hover:bg-omar transition-all  rounded-full text-black text-lg font-bold px-4 py-2 md:px-8 md:py-3",children:"Add To Cart"})]})]})}function w(){const{user:t}=p(),{data:s,isFetching:a,isLoading:l}=y({queryFn:N,queryKey:["wishlist"]},{enabled:!!t});return l?e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(c,{})}):a?e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(c,{})}):t?(s==null?void 0:s.data.length)===0?e.jsxs("div",{className:"  flex flex-col gap-5  justify-center items-center my-20 ",children:[" ",e.jsx("p",{className:"text-omar text-3xl",children:"WishList is empty keep looking !"}),e.jsx(o,{className:" bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg",to:"/",children:"Keep Looking"})]}):e.jsxs("div",{className:"max-w-6xl flex-col flex-wrap flex gap-6 mx-auto my-10",children:[(s==null?void 0:s.data)&&Array.isArray(s==null?void 0:s.data)&&s.data.map((n,r)=>e.jsx(v,{item:n},r)),e.jsx("div",{className:"flex items-center justify-around my-5 gap-4"})]}):e.jsxs("div",{className:" flex-col my-10 flex justify-center items-center",children:[e.jsx("h2",{className:"  text-3xl font-semibold",children:"You need to Sign in First"}),e.jsx(o,{className:" underline text-blue-600 text-2xl font-semibold",to:"/signin",children:"Sign in"})]})}export{w as default};
