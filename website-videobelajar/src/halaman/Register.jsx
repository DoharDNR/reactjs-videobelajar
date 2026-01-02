import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/HeaderNav";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    gender: "perempuan",
    regionCode: "+62",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    get("/users.json").then((res) => {
      setUsers(res);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getData = Object.keys(users).map((key) => ({
      id: key,
      ...users[key],
    }));

    const email = getData.find((item) => item.email === form.email);

    if (form.password !== form.confirmPassword) {
      return alert("Konfirmasi password tidak cocok!");
    } else if (email) {
      return alert("Email sudah ada, silahkan pakai email lain!");
    }
    post("/users.json", form);
    alert("Register Berhasil");
    navigate("/login");
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    navigate("/login");
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    alert("login with Google Account!!!");
  };

  return (
    <>
      <Header logout="none" />
      <div className="p-5 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card shadow-sm p-4"
          style={{ maxWidth: "590px", width: "100%" }}
        >
          <h5 className="text-center fw-bold mb-1">Pendaftaran Akun</h5>
          <p className="text-center text-muted small">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Nama Lengkap <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                required
              />
            </div>

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
                No. Hp <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                >
                  <option value="perempuan">Perempuan</option>
                  <option value="laki-laki">Laki-Laki</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                No. Hp <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  name="regionCode"
                  value={form.regionCode}
                  onChange={handleChange}
                  style={{ maxWidth: "110px" }}
                >
                  <option value="+62">🇮🇩 +62</option>
                  <option value="+60">🇲🇾 +60</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="8123456789"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
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

            <div className="mb-3">
              <label className="form-label">
                Konfirmasi Kata Sandi <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={form.confirmPassword}
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
              // disabled={true}
              style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
            >
              Daftar
            </button>

            <button
              type="button"
              onClick={handleLogin}
              className="btn w-100 border mb-2"
              style={{ backgroundColor: "#E2FCD9CC", color: "#3ECF4C" }}
            >
              Masuk
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
