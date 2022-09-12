import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import "./app.css";
import NotFound from "./pages/notFound/NotFound";
import DetailsFirst from "./pages/detailsFirst/DetailsFirst";
import DetailsSecond from "./pages/detailsSecond/DetailsSecond";
import DetailsThird from "./pages/detailsThird/DetailsThird";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="category" element={<Category />} />
        <Route path="about" element={<About />} />
        <Route path="detailsFirst" element={<DetailsFirst />} />
        <Route path="detailsSecond" element={<DetailsSecond />} />
        <Route path="detailsThird" element={<DetailsThird />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
