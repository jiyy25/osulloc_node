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



function App() {
  // const [swipe, setswipe] = useState([]);
  // const [products, setProducts] = useState([])
  // // const [apidata, setapidata] = useState({});
  // const mains = async (v, r) => {
  //   try {
  //     const result = await axios.get(`/${v}/${r}`, {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     setswipe([...result.data])
  //     setProducts([...result.data])
  //     setapidata((prev) => {
  //       return {
  //         ...prev,
  //         [r]: [...result.data]
  //       }

  //     })
  //     console.log(swipe)
  //   } catch (error) {
  //     console.log(error)
  //   }

  // };

  // useEffect(() => {
  //   mains("api", "osullocSwiper");
  //   mains("api", "osulloc_products")

  // }, [])

  // useEffect(() => {
  //   console.log(swipe);
  //   console.log(products);
  // }, [swipe, products]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);


  const [data, setData] = useState({ swipe: [], products: [] });

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

        setData({
          swipe: swipeResponse.data,
          products: productsResponse.data
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data.swipe);
    console.log(data.products);
  }, [data]);


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <>
            <Swiper datasrc={data.swipe && data.swipe}></Swiper>
            <Mov></Mov>
            <Bestseller datasrc={data.products && data.products}></Bestseller>
            <Story></Story>
            <BestCategory></BestCategory>
            <Location datasrc={datasrc.store}></Location>
            <Subscribe></Subscribe>
          </>
        }>

        </Route>
        <Route path="/event" element={<Event datasrc={datasrc.reveiw} />}></Route>
        <Route path="/shop/best" element={<ShopBest datasrc={datasrc.product} />}></Route>
        <Route path="/shop/tea" element={<Shop datasrc={datasrc} />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
