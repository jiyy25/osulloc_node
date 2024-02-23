import axios from 'axios'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Swiper from "./component/Swiper";

import datasrc from './data/osulloc.json'

import Mov from "./component/Mov";
import Footer from "./component/Footer";
import Bestseller from "./component/Bestseller";
import Story from "./component/Story";
import BestCategory from "./component/BestCategory";
import Location from "./component/Location";
import Subscribe from "./component/Subscribe";
import Event from "./router/Event";
import Shop from "./router/Shop";
import ShopBest from "./router/ShopBest";
import Subscribepage from "./router/Subscribepage";
import Brand from './router/Brand';

function App() {
  const [data, setData] = useState({
    swipe: [], products: [], store: [], o_category: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swipeResponse = await axios.get("/api/osullocSwiper", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        const productsResponse = await axios.get("/api/osulloc_products", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        const storeResponse = await axios.get("/api/o_store", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const naviResponse = await axios.get("/api/o_category", {
          headers: {
            "Content-Type": "application/json"
          }
        })

        setData({
          swipe: swipeResponse.data,
          products: productsResponse.data,
          store: storeResponse.data,
          o_category: naviResponse.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // console.log(data.swipe);
    // console.log(data.products);
    // console.log(data.store);
    // console.log(data.o_category);
  }, [data]);

  return (
    <>
      <Header datasrc={data.o_category && data.o_category}></Header>
      <Routes>
        <Route path="/" element={
          <>
            <Swiper datasrc={data.swipe && data.swipe}></Swiper>
            <Mov></Mov>
            <Bestseller datasrc={data.products && data.products}></Bestseller>
            <Story></Story>
            <BestCategory></BestCategory>
            <Location datasrc={data.store && data.store}></Location>
            <Subscribe></Subscribe>
          </>
        }>

        </Route>
        <Route path="/event" element={<Event datasrc={datasrc.review} />}></Route>
        <Route path="/shop/best" element={<ShopBest datasrc={data.products && data.products} />}></Route>
        <Route path="/shop/:category_id" element={<Shop datasrc={{ prd: data.products && data.products, navi: data.o_category && data.o_category }} />}></Route>
        {/* shop은 products와 category 테이블을 이용하여 카테로리 별로 필터링 */}
        <Route path="/dada" element={<Subscribepage datasrc={data.products && data.products}></Subscribepage>}></Route>
        <Route path="/brand" element={<Brand />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
