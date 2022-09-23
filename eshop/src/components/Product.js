import "./Product.css";
// import { useStateValue } from "../StateProvider";

export default function Product({ title, image, price, rating }) {
  // const [state, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       title,
  //       image,
  //       price,
  //       rating,
  //     },
  //   });
  // };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>👍</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      {/* <button onClick={addToBasket}>Add to basket</button> */}
      <button>Add to basket</button>
    </div>
  );
}
