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
              title="cream of the century"
              image="https://img.lovepik.com/free-png/20211225/lovepik-skin-care-products-png-image_400420780_wh300.png"
              price="40"
              rating={5}
            />
            <Product
              title="no faith"
              image="https://www.citypng.com/public/uploads/small/41603060048hrwib9gik4u6vrssfap0btibrjfq3zrfpcmvkuohzpdd3knxf25hyseqdnprujtaaxah571wwpn5ew1u5qixkpycj7tsgdvlb12b.png"
              price="30"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              title="no faith"
              image="https://www.citypng.com/public/uploads/small/41603060048hrwib9gik4u6vrssfap0btibrjfq3zrfpcmvkuohzpdd3knxf25hyseqdnprujtaaxah571wwpn5ew1u5qixkpycj7tsgdvlb12b.png"
              price="30"
              rating={5}
            />
            <Product
              title="no faith"
              image="https://www.citypng.com/public/uploads/small/41603060048hrwib9gik4u6vrssfap0btibrjfq3zrfpcmvkuohzpdd3knxf25hyseqdnprujtaaxah571wwpn5ew1u5qixkpycj7tsgdvlb12b.png"
              price="30"
              rating={4}
            />
            <Product
              title="no faith"
              image="https://www.citypng.com/public/uploads/small/41603060048hrwib9gik4u6vrssfap0btibrjfq3zrfpcmvkuohzpdd3knxf25hyseqdnprujtaaxah571wwpn5ew1u5qixkpycj7tsgdvlb12b.png"
              price="30"
              rating={2}
            />
          </div>
          <div className="home__row">
            <Product
              title="no faith"
              image="https://www.citypng.com/public/uploads/small/41603060048hrwib9gik4u6vrssfap0btibrjfq3zrfpcmvkuohzpdd3knxf25hyseqdnprujtaaxah571wwpn5ew1u5qixkpycj7tsgdvlb12b.png"
              price="30"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}
