import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./halaman/beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import StarRating from "./component/StarRating";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<StarRating score={3} />} />
      </Routes>
    </Router>
  );
}

export default App;
