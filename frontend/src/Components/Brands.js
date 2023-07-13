function Brands() {
  const arr = ["amul", "cola", "dettol", "indiagate", "loreal"];
  return (
    <>
      {arr.map((imgSrc) => (
        <img key={imgSrc} src={"/brands/" + imgSrc + ".webp"} alt="" />
      ))}
    </>
  );
}
export default Brands;
