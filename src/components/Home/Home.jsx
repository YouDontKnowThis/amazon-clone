import React, { Component } from "react";
import Slider1 from "../UI/Sliders/Slider1";
import Slider2 from "../UI/Sliders/Slider2";

// Import All Images
import { products, cuisine, menFashion, womenFashion } from "../../product-api";
import { images } from "../../product-api";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <Slider1 images={images} />
          <Slider2 products={products} item_nums={6} />
          <div className="ads__one">
            <div className="ads">
              <img
                src="https://www.codedesign.org/storage/app/media/amazon-sales-ads-op.jpg"
                alt=""
              />
            </div>
            <div className="ads">
              <img
                src="https://2z96g32do0o43fdk6f25rx20-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/podcastanchoricon.jpeg"
                alt=""
              />
            </div>
            <div className="ads">
              <img
                src="https://bloximages.newyork1.vip.townnews.com/wfmz.com/content/tncms/assets/v3/editorial/c/f1/cf171ae2-48a1-5dcf-bfcd-ae304df154bb/5f6c991df0602.image.jpg"
                alt=""
              />
            </div>
            <div className="ads">
              <img
                src="https://mma.prnewswire.com/media/1244386/Sponsored_Profit_Logo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="cuisine__maison">
            <h2>Cuisine et Maison</h2>
            <Slider2 products={cuisine} item_nums={4} />
          </div>
          <div className="ads__two">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/2019Retention/PYA/in_prime_pya_1500x400_header.jpg"
              alt=""
            />
          </div>
          <div className="men__fashion">
            <h2>Mens fashion</h2>
            <Slider2 products={menFashion} item_nums={4} />
          </div>
          <div className="ads__two">
            <img
              src="https://www.helpageindia.org/wp-content/uploads/2020/04/amazoncaresbanner.jpg"
              alt=""
            />
          </div>
          <div className="women__fashion">
            <h2>Womens fashion</h2>
            <Slider2 products={womenFashion} item_nums={5} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
