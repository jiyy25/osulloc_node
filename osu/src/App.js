import Header from "./component/Header";
import Swiper from "./component/Swiper";
import { Route, Routes } from "react-router-dom";
import datasrc from './data/osulloc.json'
import Mov from "./component/Mov";
import Footer from "./component/Footer";
import Haesam from "./component/haesam";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <>
            <Swiper datasrc={datasrc.swiper}></Swiper>
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
