import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // const token = useAuthStore((state) => state.token);

  // Jika tidak punya token → kembalikan ke login
  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // Jika login → tampilkan halaman yang diminta
  return children;
}
