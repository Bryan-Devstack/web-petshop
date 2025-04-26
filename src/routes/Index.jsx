import { Routes, Route } from 'react-router-dom';

// Páginas
import ProductsCat from '../pages/ProductsCat';
import ProductsDog from '../pages/ProductsDog';
import ProductsToys from '../pages/ProductsToys';
import ProductsClothes from '../pages/ProductsClothes';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Cart from '../pages/Cart';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/cat" element={<ProductsCat />} />
      <Route path="/products/dog" element={<ProductsDog />} />
      <Route path="/products/toys" element={<ProductsToys />} />
      <Route path="/products/clothes" element={<ProductsClothes />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
