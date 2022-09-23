import "./CheckoutProduct.css";

export default function CheckoutProduct({ title, price, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000.jpg"
        alt="product"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Bennet Mystic 15.6 inch Laptop SHoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">😂 😂</div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}
