import{u as N,U as v,r as u,a as Q,c as S,j as e,p as E,q as k,L as F,Q as P,k as L}from"./index-7c743193.js";import{u as q}from"./index.esm-9a91c67e.js";import{u as A}from"./usePassword-705f522a.js";function V(){const s=N(),{togglePassword2:l,togglePasswordVis2:m}=A(),{login:x,cart:i}=v(),[r,n]=u.useState(""),[o,c]=u.useState(""),h=Q();async function p(a){try{const t=await L.post("/api/v1/auth/signin",{email:a.email,password:a.Password});n("");const{user:w,token:b}=t.data;return x(w,b),h("/"),c("signed in successfully "),t.data}catch(t){n(t.response.data.message),c("")}}const{handleSubmit:g,register:d}=q(),{mutate:f,isLoading:y}=S({mutationFn:p,onSuccess:()=>{P.success("signed in successfully")}});async function j(a){f(a),s.invalidateQueries(["cart",i]),s.invalidateQueries(["wishlist",i]),s.cancelQueries({queryKey:["cart"]}),s.invalidateQueries(["cart"]),s.invalidateQueries(["wishlist"]),s.cancelQueries(["wishlist"]),s.refetchQueries(["wishlist"]),s.refetchQueries(["cart",i])}return e.jsx("form",{onSubmit:g(j),className:"  px-4 md:px-0    my-16 ",children:e.jsx("div",{className:"  max-w-xl  rounded-lg  mx-auto  shadow-xl",children:e.jsxs("div",{className:" px-2 md:px-0 gap-2 max-w-lg mx-auto  flex-wrap flex flex-col",children:[e.jsx("h2",{className:" text-center text-xl font-bold",children:"Login"}),e.jsxs("div",{className:" flex flex-col gap-1",children:[e.jsx("label",{className:" font-semibold",htmlFor:"email",children:"Email Address"}),e.jsx("input",{defaultValue:"morasabri422@gmail.com",className:"  py-2  rounded-lg  px-4  focus:outline-none focus:ring focus:ring-orange-300 shadow-xl ",placeholder:"Example@gmail.com",id:"email",type:"email",...d("email")})]}),e.jsxs("div",{className:" flex flex-col gap-1",children:[e.jsx("label",{className:"  font-semibold",htmlFor:"password",children:"password"}),e.jsxs("div",{className:" relative",children:[e.jsx("input",{defaultValue:"123456789",className:" py-2  px-4 rounded-lg w-full   focus:outline-none focus:ring focus:ring-orange-300 shadow-xl ",id:"password",placeholder:"your Password",type:l?"text":"password",...d("Password")}),e.jsx("button",{type:"button",className:" text-xl transform -translate-y-1/2 absolute right-2 top-1/2",onClick:m,children:l?e.jsx(E,{}):e.jsx(k,{})})]})]}),e.jsx("div",{}),e.jsx("button",{disabled:y,type:"submit",className:" bg-orange-600 py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed  my-4 text-center shadow-md rounded-lg text-white  hover:bg-orange-700 transition-colors",children:"login"}),e.jsx("div",{className:" justify-end  self-end",children:e.jsxs("h3",{className:" my-4 ",children:["dont have an account ?",e.jsxs(F,{className:" cursor-pointer text-blue-500",to:"/signUp",children:[" ","sign up"," "]})," "]})}),r&&e.jsx("div",{className:"  justify-center  items-center ",children:e.jsx("h2",{className:" text-red-600 text-center my-4",children:r})}),o&&e.jsx("div",{className:"  justify-center  items-center ",children:e.jsx("h2",{className:" text-green-600 text-center my-4",children:o})})]})})})}export{V as default};
