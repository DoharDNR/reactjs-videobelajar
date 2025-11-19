import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./halaman/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
import DetailProduct from "./halaman/DetailProduct";
import PaymentMethod from "./halaman/PaymentMetode";
import PaymentGateway from "./halaman/PaymentGateway";
import PaymentChange from "./halaman/PaymentChange";
import PaymentSuccess from "./halaman/PaymentSuccess";
import Profil from "./halaman/Profile";
import Course from "./halaman/Course";
import Certificate from "./halaman/Certificate";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log("Akun", data);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login database={data} />} />
        <Route path="/register" element={<Register database={setData} />} />
        <Route path="/login" element={<Login database={data} />} />
        <Route path="/home" element={<Beranda />} />
        <Route path="/category" element={<Kategori />} />
        <Route path="/product" element={<DetailProduct />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/payment-change" element={<PaymentChange />} />
        <Route
          path="/payment-done"
          element={<PaymentSuccess database={data} />}
        />
        <Route path="/profil" element={<Profil />} />
        <Route path="/course" element={<Course />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
