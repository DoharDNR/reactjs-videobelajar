import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Beranda from "./halaman/beranda/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
import DetailProduct from "./halaman/detail-produk/DetailProduct";
import PaymentMethod from "./halaman/PaymentMetode";
// import PaymentGateway from "./halaman/PaymentGateway";
// import PaymentChange from "./halaman/PaymentChange";
// import PaymentSuccess from "./halaman/PaymentSuccess";
// import Profil from "./halaman/Profile";
// import Course from "./halaman/Course";
// import Certificate from "./halaman/Certificate";
import ProtectedRoute from "./ProtectedRoute";
import ProfilAdmin from "./halaman/profil-admin/ProfilAdmin";

function App() {
  const privateRoute = [
    // { path: "/product", element: <DetailProduct /> },
    { path: "/payment-method/:id", element: <PaymentMethod /> },
    // { path: "/payment-gateway", element: <PaymentGateway /> },
    // { path: "/payment-change", element: <PaymentChange /> },
    // { path: "/payment-done", element: <PaymentSuccess /> },
    // { path: "/profil", element: <Profil /> },
    // { path: "/course", element: <Course /> },
    // { path: "/certificate", element: <Certificate /> },
  ];

  const RouteAdmin = (children) => {
    if (!localStorage.getItem("admin")) {
      return <Navigate to={"/"} replace />;
    }

    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Kategori />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        {privateRoute.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
        <Route path="/admin" element={RouteAdmin(<ProfilAdmin />)} />
      </Routes>
    </Router>
  );
}

export default App;
