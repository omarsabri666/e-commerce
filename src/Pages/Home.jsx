import Category from "../componots/Category";
import ProductList from "../componots/ProductList";
import { UseData } from "../context/contextP";
import { Suspense, lazy } from "react";
import Loader from "../componots/Loader";

const ProductList2 = lazy(()=> import("../componots/ProductList2"))


function Home() {
  const {selectedCategory} = UseData()
    return (
      <div className="  my-20 ">
        <div className=" grid grid-cols-5 gap-3">
          <div className=" md:sticky md:block  md:top-28 my-10  static  col-span-5 md:col-span-1    block   h-fit">

          <Category />
          </div>
          <div className=" col-span-5  md:col-span-4">
           { !selectedCategory && <ProductList/>}
          {selectedCategory && <Suspense fallback={<div><Loader/></div>}>

             <ProductList2/>
          </Suspense>
             }
          </div>
  
         
        </div>
      </div>
    );
}

export default Home
