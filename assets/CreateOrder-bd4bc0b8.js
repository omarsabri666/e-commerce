import{u as f,U as x,g as m,c as g,j as e,i as p,o as h,Q as o}from"./index-65a6176d.js";import{u as y}from"./index.esm-aadebc30.js";function N(){const l=f(),{cart:r,setCart:a}=x(),{register:s,handleSubmit:n,reset:i}=y(),{data:c}=m({queryFn:p,queryKey:["cart",r]}),{mutate:u}=g({mutationFn:t=>h(c.data._id,t),onSuccess:()=>{o.success("awesome happy shopping"),a(t=>!t),i(),l.invalidateQueries(["orders"])},onError:()=>{o.error("could not complete order")}});async function d(t){u(t)}return e.jsxs("form",{onSubmit:n(d),className:"   ",children:[e.jsx("h2",{className:" text-omar font-bold text-3xl my-5 px-2",children:"complete order"}),e.jsxs("div",{className:" my-10 flex  max-w-6xl mx-auto   gap-5 flex-col",children:[e.jsxs("div",{className:" flex flex-col justify-center items-center gap-1 ",children:[e.jsx("label",{className:" text-lg font-bold ",htmlFor:"details",children:"details"}),e.jsx("input",{required:!0,className:"   w-1/2 px-5 py-2 text-lg outline bg-slate-100 outline-black focus:outline-none  focus:ring focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white  rounded-lg ",id:"details",placeholder:"details",type:"text",...s("details")})]}),e.jsxs("div",{className:" flex flex-col justify-center items-center gap-1",children:[e.jsx("label",{className:" text-lg font-bold ",htmlFor:"phone",children:"phone"}),e.jsx("input",{required:!0,className:"  w-1/2 px-5 py-2 text-lg outline bg-slate-100 outline-black focus:outline-none  focus:ring focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white  rounded-lg ",id:"phone",placeholder:"phone",type:"tel",...s("phone")})]}),e.jsxs("div",{className:" flex flex-col justify-center items-center gap-1",children:[e.jsx("label",{className:" text-lg font-bold ",htmlFor:"city",children:"City"}),e.jsx("input",{required:!0,className:"  w-1/2 px-5 py-2 text-lg outline bg-slate-100 outline-black focus:outline-none  focus:ring focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white  rounded-lg ",id:"city",placeholder:"city",type:"text",...s("city")})]}),e.jsx("div",{className:" text-center",children:e.jsx("button",{className:" bg-white my-4 w-1/2 text-black font-bold text-lg px-6 py-2 outline outline-black hover:text-white hover:bg-black transition-all rounded-lg",children:"Create an order"})})]})]})}export{N as default};
