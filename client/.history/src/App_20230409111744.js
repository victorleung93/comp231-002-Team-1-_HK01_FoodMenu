import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home";
import About from "./scenes/about/About";
import Menu from "./scenes/menu/Menu";
import Navbar from "./scenes/global/Navbar";
import Order from "./scenes/order/order";
import CartMenu from "./scenes/global/CartMenu";
import ItemDetails from "./scenes/itemdetail/ItemDetails";
import Itemform from "./scenes/itemform/Itemform";
import Footer from './scenes/global/Footer';
import  SignIn from "./scenes/SignIn/SignIn";
import  SignUp from "./scenes/SignUp/SignUp";

const ScrollToTop = () =>{
  const { pathname} = useLocation();
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [pathname]  )
 
  return null;
}

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/data/:itemId" element={<ItemDetails/>}/>
          <Route path="/itemform" element={<Itemform/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signIn" element={<SignUp/>}/>

        </Routes>
        <CartMenu/>
        <Footer className="Footer" />
      </BrowserRouter>
      
    </div>
  );
}

export default App;