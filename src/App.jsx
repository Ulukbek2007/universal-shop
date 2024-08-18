import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Heart from "./pages/Heart";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Detail from "./miniPage/Detail";
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
const App = () => {
  
  const location=useSelector(state=>state.getPathSlices.value)
  window.addEventListener('blur',()=>{
    document.title='Вернииитесь 😔'
  })
  window.addEventListener('focus',()=>{
    document.title='UNIVERSAL😁'
  })
  
  return (
    <div className="container">
      {location==='/'&&<Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <ToastContainer/>
     <Footer />
    </div>
  );
};

export default App;
