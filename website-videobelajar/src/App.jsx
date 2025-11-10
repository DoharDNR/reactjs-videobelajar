import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./halaman/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
import FilterPage from "./component/Kategori/FilterPage";
import DetailProduct from "./halaman/DetailProduct";
import PaymentMethod from "./halaman/PaymentMetode";
import PaymentGateway from "./halaman/PaymentGateway";
import PaymentChange from "./halaman/PaymentChange";
import PaymentSuccess from "./halaman/PaymentSuccess";
import Pesanan from "./halaman/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/payment-change" element={<PaymentChange />} />
        <Route path="/payment-done" element={<PaymentSuccess />} />
        <Route path="/profil" element={<Pesanan />} />

        {/* 2 page per hari 5 */}
        <Route path="/class" element={<Kategori />} />
        <Route path="/profil" element={<Kategori />} />

        {/* 2 page per hari 6 */}
        <Route path="/class-video" element={<Kategori />} />
        <Route path="/class-rules" element={<Kategori />} />

        {/* 2 page per hari 7 */}
        <Route path="/class-test" element={<Kategori />} />
        <Route path="/class-done" element={<Kategori />} />

        {/* 2 page per hari 8 */}
        <Route path="/class-certificate" element={<Kategori />} />
      </Routes>
    </Router>
  );
}

export default App;
