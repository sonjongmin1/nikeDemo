const ProductCard = ({ product }) => {
  return (
    <div>
      <div className={`pd-img ${product.imageClass}`}></div>
      <div className="pd-con">
        <div className="pd-tit">{product.title}</div>
        <div className="pd-nm">{product.name}</div>
        <div className="pd-s">{product.description}</div>
        <div className="pd-s">{product.colors}</div>
        <div>{product.price}</div>
        <div className="pd-sl">{product.discount}</div>
      </div>
    </div>
  );
};

export default ProductCard;
