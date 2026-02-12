import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Beranda from "./halaman/beranda/Beranda";
import Login from "./halaman/Login";
import Register from "./halaman/Register";
import Kategori from "./halaman/Kategori";
import DetailProduct from "./halaman/detail-produk/DetailProduct";
import PaymentMethod from "./halaman/PaymentMetode";
import PaymentGateway from "./halaman/PaymentGateway";
import PaymentSuccess from "./halaman/PaymentSuccess";
import Profil from "./halaman/Profile";
// import Course from "./halaman/Course";
// import Certificate from "./halaman/Certificate";
import ProfilAdmin from "./halaman/profil-admin/ProfilAdmin";
import { AuthProvider } from "./utils/auth-context";
import ProtectedRoute from "./utils/protected-route";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./features/product/productThunks";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const privateRoute = [
    {
      path: "/payment-method/:id",
      element: (
        <PaymentMethod data={data} isLoading={isLoading} error={error} />
      ),
    },
    {
      path: "/payment-gateway/:id",
      element: (
        <PaymentGateway data={data} isLoading={isLoading} error={error} />
      ),
    },
    { path: "/payment-done", element: <PaymentSuccess /> },
    { path: "/profil", element: <Profil /> },
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Beranda data={data} isLoading={isLoading} error={error} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Kategori />} />
          <Route
            path="/product/:id"
            element={
              <DetailProduct data={data} isLoading={isLoading} error={error} />
            }
          />
          <Route element={<ProtectedRoute />}>
            {privateRoute.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element} />
            ))}
          </Route>
          <Route path="/admin" element={RouteAdmin(<ProfilAdmin />)} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
