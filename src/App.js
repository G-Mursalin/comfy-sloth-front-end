// React Router
import { Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/NavBar/Sidebar/Sidebar";
import Cart from "./components/Cart/Cart";
import Login from "./components/Authentication/Login";
import Error from "./components/Error/Error";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
