import Header from "./component/Header";
import Swiper from "./component/Swiper";
import { Route, Routes } from "react-router-dom";
// import datasrc from './data/osulloc.json'
import Mov from "./component/Mov";
import Footer from "./component/Footer";
import Haesam from "./component/haesam";
import axios from 'axios'
import { useEffect, useState } from "react";

function App() {
  const [swipe, setswipe] = useState([]);
  useEffect(() => {
    const mains = async (v, r) => {
      try {
        const result = await axios.get(`/${v}/${r}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        setswipe([...result.data])
      } catch (error) {
        console.log(error)
      }

    };
    mains("api", "osullocSwiper");
    console.log(setswipe)
  }, [])


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <>
            <Swiper datasrc={swipe && swipe}></Swiper>
            <Mov></Mov>
          </>}>

        </Route>
        <Route path="/event" element={<Haesam />}>

        </Route>

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
