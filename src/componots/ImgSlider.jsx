function ImgSlider({ img, setSelectedImg }) {
  function handleClick() {
    setSelectedImg(img)
  }
  return (
    <img onClick={handleClick}
      className=" border-l-2   border-gray-200 cursor-pointer"
      width={50}
      height={50}
      src={img}
    />
  );
}

export default ImgSlider
