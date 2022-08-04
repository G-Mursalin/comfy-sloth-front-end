// React Router
import { Routes, Route, Link } from "react-router-dom";
// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
