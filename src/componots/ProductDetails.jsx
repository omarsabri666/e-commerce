import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteOneItem, addCartItems, addWishlistItems, deleteWishlistItem, getCartItems, getOneProduct, getWishlistItems } from "../api/api";
import { useParams } from "react-router";
import {   useState } from "react";
import ImgSlider from "./ImgSlider";
import Rating from "./Rating";
import { formatPriceInEGP } from "../helper/helper";
import { Tooltip } from "react-tooltip";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { UseData } from "../context/contextP";

function ProductDetails() {

  
const {cart,token} = UseData()

    const {id} = useParams()
    const {data,isLoading:isLoadingProduct,isError} = useQuery({queryFn:()=>getOneProduct(id),queryKey:["productDetails",id]})
    const {data:cartData, isRefetching,error} = useQuery({queryFn:getCartItems,queryKey:["cart",cart]})

    const [selectedImg, setSelectedImg] = useState(
      () => data?.data?.imageCover || ""
    );
    const queryClient = useQueryClient()
    
    const {mutate,isLoading,} = useMutation({mutationFn:()=>addCartItems(id) ,onSuccess:()=>{

queryClient.invalidateQueries({ queryKey: ["cart"] });
    toast.success("item added to cart ");

    },onError:()=>{
         toast.error("could not add item to the cart ");
    }})
    const {mutate:deleteMutate,} = useMutation({mutationFn:()=>DeleteOneItem(id) ,onSuccess:()=>{

   
queryClient.invalidateQueries({ queryKey: ["cart"] }); 
toast.info("item was deleted from cart ");    //   queryClient.invalidateQueries

    },onError:()=>{
        toast.error("could not delete item cart "); 
    }})



    
    const test1 =  cartData?.data?.products?.map(item=> item.product.id) || ""
    
   
    
    const isInCart = test1.includes(id);
 
    const { mutate: addToWishlist } = useMutation({
      mutationFn: () => addWishlistItems(id),
      onSuccess:()=>{
        queryClient.invalidateQueries(["wishlist"]);
        toast.success("item added to wishlist ")
      }
      ,onError:()=>{
        toast.error("could not add item to the wishlist ");
      }
    });
    const { mutate: deleteWishlist } = useMutation({
      mutationFn: () => deleteWishlistItem(id),
      onSuccess: () => {
        queryClient.invalidateQueries(["wishlist"]);
        toast.info("item was deleted from wishlist ");
      },onError:()=>{
        toast.error("could not  delete item from wishlist ");
      }
    });

   async function addItemsToWishlist(){
    addToWishlist();

   }
   async function deleteWishlistItems(){
    deleteWishlist()

   }
   const { data: wishlistData ,isRefetching:isFetchingWish } = useQuery({
     queryFn: getWishlistItems,
     queryKey:["wishlist"]
   });
//  const wishlistIds =  wishlistData?.data.map(item=>item.id) || ""
const isInWishlist = Array.isArray(wishlistData?.data)
  ? wishlistData.data.map((item) => item.id)
  : [];
 const checkInInWishlist = isInWishlist.includes(id) || ""


    const mainImgSrc = selectedImg || data?.data.imageCover;
    if (isLoadingProduct) return <div className=" flex justify-center items-center"><Loader/></div>
    if(isError) return <div className=" text-red-500 font-bold text-2xl flex justify-center items-center">
      <p>Error {error.message}</p>
    </div>
      return (
        <div className=" my-10 grid mx-4 md:mx-0 grid-cols-1 sm:grid-cols-3">
          <div className=" col-span-2  gap-4 flex flex-col">
            <img
              className=" sm:w-96 w-full  rounded-lg shadow-xl h-96"
              src={mainImgSrc}
              alt={`${data?.data?.title}img`}
            />
            <div className=" w-fit">
              <div className=" flex justify-center items-center flex-row border-2 border-gray-200">
                {data?.data.images?.map((img, i) => (
                  <ImgSlider
                    setSelectedImg={setSelectedImg}
                    key={i}
                    img={img}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className=" items-center    flex flex-col ">
            <h1 className=" text-4xl font-bold text-omar my-4">
              {data?.data.category.name}
            </h1>
            <h2 className=" font-semibold  text-3xl text-black">
              {data?.data.title}
            </h2>
            <h3 className="font-semibold    my-2 text-3xl text-black">
              {data?.data.brand.name}
            </h3>
            <h4 className=" flex   gap-4 items-center ">
              <Rating rating={data?.data.ratingsAverage} />
              <span
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`was rated by ${data?.data.ratingsQuantity} users`}
                data-tooltip-place="top"
                className=" cursor-help text-lg font-semibold"
              >
                {data?.data.ratingsQuantity}
              </span>
              <span
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`was bought by ${data?.data.sold} users`}
                data-tooltip-place="top"
                className="  cursor-help text-lg font-semibold"
              >
                {data?.data.sold}
              </span>
            </h4>
            {!data?.data.priceAfterDiscount ? (
              <h4 className="text-omar text-lg font-semibold py-2">
                {formatPriceInEGP(data?.data.price)}
              </h4>
            ) : (
              <div className="gap-5 py-2 text-lg   flex">
                <h4 className="text-omar font-semibold">
                  {formatPriceInEGP(data?.data?.priceAfterDiscount)}
                </h4>
                <h4 className="line-through text-gray-600">
                  {formatPriceInEGP(data?.data?.price)}
                </h4>
              </div>
            )}
            {/* <h5>{formatPriceInEGP(data?.data?.priceAfterDiscount)}</h5> */}
            <div className=" flex gap-6 flex-col ">
              {/* {isInCart && (
              <div className=" flex items-center  gap-2">
                <label className=" font-semibold  text-xl" htmlFor="quantity">
                  Quantity
                </label>
                {
                  <input
                    onKeyDown={(event) => {
                      if (event.key === "ArrowUp") {
                        // Arrow Up key pressed
                        setCount((prevCount) => prevCount + 1);
                      } else if (event.key === "ArrowDown" && count !== 0) {
                        setCount((prevCount) => prevCount - 1);
                      }
                    }}
                    ref={inputRef}
                    id="quantity"
                    value={count}
                    className="w-20 h-20   remove-arrow  appearance-none  hover:appearance-none  outline-4   font-bold  outline outline-gray-200 text-center text-2xl"
                    type="number"
                    min="0"
                    step="1"
                    onFocus={() => {
                      inputRef.current.type = "text";
                    }}
                    onBlur={() => {
                      inputRef.current.type = "number";
                    }}
                  />
                }

                <div className=" flex flex-col">
                  <button
                    onClick={() => setCount((s) => s + 1)}
                    className="text-gray-700 border border-gray-300 rounded-md ml-2 px-3 py-1"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => {
                      if (count === 0) {
                        return;
                      } else {
                        return setCount((s) => s - 1);
                      }
                    }}
                    className="text-gray-700 border border-gray-300 rounded-md ml-2 px-3 py-1"
                  >
                    ▼
                  </button>
                </div>
              </div>
            )} */}
              {token && (
                <div className=" flex items-center gap-1">
                  {!isRefetching ? (
                    <div>
                      {!isInCart && (
                        <button
                          disabled={isLoading}
                          onClick={() => mutate({})}
                          className=" py-2 px-6 bg-omar hover:bg-orange-700 transition-all text-white  font-semibold rounded-lg"
                        >
                          Add To Cart
                        </button>
                      )}
                      {isInCart && (
                        <button
                          onClick={deleteMutate}
                          className="py-2 px-6 bg-omar hover:bg-orange-700 transition-all text-white  font-semibold rounded-lg"
                        >
                          {" "}
                          Delete Item
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className=" flex items-center w-16 mx-5 h-16 justify-center">
                      {" "}
                      <Loader />{" "}
                    </div>
                  )}
                  {!isFetchingWish ? (
                    <div>
                      {!checkInInWishlist ? (
                        <button
                          onClick={addItemsToWishlist}
                          className=" py-2 px-6 bg-white  outline-2  outline  outline-gray-200 hover:outline-gray-300 transition-all text-gray-700  font-semibold rounded-lg"
                        >
                          Add To Wish List
                        </button>
                      ) : (
                        <button
                          onClick={deleteWishlistItems}
                          className=" py-2 px-6 bg-white  outline-2  outline  outline-gray-200 hover:outline-gray-300 transition-all text-gray-700  font-semibold rounded-lg"
                        >
                          Delete from wishlist
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className=" flex items-center  w-16 mx-5 h-16 justify-center">
                      {" "}
                      <Loader />{" "}
                    </div>
                  )}
                </div>
              )}
              {!token &&<h2 className=" text-omar font-semibold text-3xl ">you need to Sign in to Add items to cart !</h2>}
            </div>
            <div className=" flex flex-col gap-2 my-5">
              <h3 className=" font-bold text-lg">description : </h3>

              <p> {data?.data.description}</p>
            </div>
          </div>
          <Tooltip id="my-tooltip" />
        </div>
      );
}

export default ProductDetails
