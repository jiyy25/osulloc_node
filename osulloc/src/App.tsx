import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Swiper from './component/Swiper';
import datasrc from './data/osulloc.json';
import Mov from './component/Mov';
import Footer from './component/Footer';
import Haesam from './component/Haesam';
import Bestseller from './component/Bestseller';
import Story from './component/Story';
import BestCategory from './component/BestCategory';
import Location from './component/Location';

interface SwipeData {
  // Swipe 데이터 타입 정의
  [i: number]: string

}

interface ProductData {
  // Product 데이터 타입 정의
  [item: number]: string
}

interface AppData {
  swipe: SwipeData[];
  products: ProductData[];
}

function App(): JSX.Element {
  const [data, setData] = useState<AppData>({ swipe: [], products: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swipeResponse = await axios.get<SwipeData[]>('/api/osullocSwiper', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const productsResponse = await axios.get<ProductData[]>('/api/osulloc_products', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setData({
          swipe: swipeResponse.data,
          products: productsResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Swiper datasrc={data.swipe && data.swipe} />
              <Mov />
              <Bestseller datasrc={data.products && data.products} />
              <Story />
              <BestCategory />
              <Location datasrc={datasrc.store && datasrc.store} />
            </>
          }
        />
        <Route path="/event" element={<Haesam />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
