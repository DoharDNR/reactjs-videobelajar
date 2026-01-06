import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gambar from "../assets/videobelajar1.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userThunks";
import { useAuth } from "../utils/auth-context";

export default function Login() {
  const [form, setForm] = useState({
    email: "dohar@gmail.com",
    password: "123",
  });
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register");
    navigate("/register");
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    alert("login with Google Account!!!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = data.find((item) => item.email === form.email);
    const password = data.find((item) => item.password === form.password);

    if (!email || !password) {
      return alert("Password atau Email anda salah!");
    }

    alert("berhasil masuk!");
    login(form.email);
    navigate("/", { replace: true });
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
        <div className="container-fluid p-3 px-3" style={{ width: "87%" }}>
          <a href="#" className="navbar-brand px-1">
            <img src={Gambar} alt="" />
          </a>
        </div>
      </nav>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card shadow-sm p-4 card-mobile"
          style={{ width: "90%", maxWidth: "590px" }}
        >
          <h5 className="text-center fw-bold mb-1">Masuk Akun</h5>
          <p className="text-center text-muted small">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                E-Mail <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Kata Sandi <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-end mb-3">
              <a href="#" className="small text-decoration-none text-muted">
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn w-100 mb-2"
              style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
            >
              Masuk
            </button>

            <button
              type="button"
              onClick={handleRegister}
              className="btn w-100 border mb-2"
              style={{ backgroundColor: "#E2FCD9CC", color: "#3ECF4C" }}
            >
              Daftar
            </button>

            <div className="d-flex align-items-center my-4">
              <div className="flex-grow-1 border-top"></div>
              <span className="mx-3 text-muted my-2">atau</span>
              <div className="flex-grow-1 border-top"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline-secondary w-100"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                width="18"
                className="me-2"
              />
              Daftar dengan Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
