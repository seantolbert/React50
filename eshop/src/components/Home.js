import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            src="https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="home banner"
            className="home__image"
          />
          <div className="home__row">
            <Product 
                title='this is a really dope handbag yea?'
                image='https://img.lovepik.com/free-png/20211225/lovepik-skin-care-products-png-image_400420780_wh300.png'
            />
            <Product image='https://banner2.cleanpng.com/20171220/quq/mitsubishi-pajero-png-5a3aa259646f85.63600881151379208941144115.jpg'/>
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
