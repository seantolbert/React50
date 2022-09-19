import "./Product.css";

export default function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">${price}</p>
        <div className="product__rating">{rating} stars</div>
      </div>
      <img src={image} alt="product" />
      <button>Add to basket</button>
    </div>
  );
}
