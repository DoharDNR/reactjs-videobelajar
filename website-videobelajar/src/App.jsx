import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./halaman/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
import FilterPage from "./component/Kategori/FilterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<FilterPage />} />

        {/* 2 page per hari 1 */}
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/all-product" element={<Kategori />} />

        {/* 2 page per hari 2 */}
        <Route path="/detail-product" element={<Kategori />} />
        <Route path="/payment-metode" element={<Kategori />} />

        {/* 2 page per hari 3 */}
        <Route path="/payment-gateway" element={<Kategori />} />
        <Route path="/payment-change" element={<Kategori />} />

        {/* 2 page per hari 4 */}
        <Route path="/payment-done" element={<Kategori />} />
        <Route path="/order" element={<Kategori />} />

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
