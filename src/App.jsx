import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import CardItem from "./components/cart/CardItem";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";

function App() {
   // напишем хуки  для хранения данных тура
const [shop,setShop] = useState([])
    useEffect(()=>{
fetch('https://6442392833997d3ef90aeb7a.mockapi.io/smart_shop')
    .then((myJson)=>{
        return myJson.json();
    }).then((myJson)=>{
       setShop(myJson);
})
    },[])
  return (
      <div>
          <Header></Header>
          <Slider></Slider>
          <CardItem item={shop}></CardItem>
          <Footer></Footer>
</div>
  );
}

export default App;
