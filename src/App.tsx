import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./pages/homepage";
import Destinations from "./pages/Destinations";
import Trips from "./pages/Trips";
import Contacts from "./pages/Contacts";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
