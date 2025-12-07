import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./halaman/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
// import DetailProduct from "./halaman/DetailProduct";
// import PaymentMethod from "./halaman/PaymentMetode";
// import PaymentGateway from "./halaman/PaymentGateway";
// import PaymentChange from "./halaman/PaymentChange";
// import PaymentSuccess from "./halaman/PaymentSuccess";
// import Profil from "./halaman/Profile";
// import Course from "./halaman/Course";
// import Certificate from "./halaman/Certificate";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const privateRoute = [
    { path: "/", element: <Beranda /> },
    { path: "/category", element: <Kategori /> },
    // { path: "/product", element: <DetailProduct /> },
    // { path: "/payment-method", element: <PaymentMethod /> },
    // { path: "/payment-gateway", element: <PaymentGateway /> },
    // { path: "/payment-change", element: <PaymentChange /> },
    // { path: "/payment-done", element: <PaymentSuccess /> },
    // { path: "/profil", element: <Profil /> },
    // { path: "/course", element: <Course /> },
    // { path: "/certificate", element: <Certificate /> },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {privateRoute.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
