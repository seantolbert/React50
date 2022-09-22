import "./CheckoutProduct.css";

export default function CheckoutProduct({ title, price, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000.jpg"
        alt="product"
        className="checkoutProduct__image"
      />
      <div className="product__info">
        
      </div>
    </div>
  );
}
