import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import PortFolio from "./PortFolio";
import App from "./App";
import NotFound from "./NotFound";
import Register from "./Register";
import Login from "./Login";



export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
       
      </Routes>
    </BrowserRouter>
  );
}