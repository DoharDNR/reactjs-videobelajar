import { Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks/redux";

export default function ProtectedRoute({ children }) {
  // const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  // Jika tidak punya token → kembalikan ke login
  // if (!isAuth) {
  //   console.log("protected route", isAuth);
  //   return <Navigate to="/login" replace />;
  // }

  // Jika login → tampilkan halaman yang diminta
  return children;
}
