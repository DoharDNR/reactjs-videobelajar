import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../component/Header";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }
    console.log("Data pendaftaran:", form);
    alert("Pendaftaran berhasil!");
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register");
    navigate("/register");
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    alert("login with Google Account!!!");
  };

  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="card shadow-sm p-4 card-mobile">
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

            <button type="submit" className="btn btn-login w-100 mb-2">
              Masuk
            </button>

            <button
              type="button"
              onClick={handleRegister}
              className="btn btn-register w-100 border mb-2"
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
