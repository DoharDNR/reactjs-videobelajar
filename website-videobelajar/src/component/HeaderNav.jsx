import Avatar from "../assets/Avatar.svg";
import Gambar from "../assets/videobelajar1.svg";
// import Metode from "../assets/Stepper-Metode.svg";
// import Bayar from "../assets/Stepper-Bayar.svg";
// import Done from "../assets/Stepper-Done.svg";
import { useEffect, useState } from "react";
import "./HeaderNav.css";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const getUrl = window.location.href.split("/").pop();
  // const status = [Metode, Bayar, Done];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('Logout Sucessful');
    localStorage.clear()
    navigate('/login')
  }
  const handleAdmin = (length) => {
    const loginAdmin = prompt("Enter password to login Admin!!!");
    let randomText = ''
    for (let index = 0; index < loginAdmin.length; index++) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~ ";
      let result = "";

      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      randomText = result
    }
    localStorage.setItem('admin', randomText)
    navigate('/admin')
    console.log('go to admin')
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("go to login");
    navigate("/login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("go to register");
    navigate("/register");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
      <div className="container-fluid p-3 px-3" style={{ width: "87%" }}>
        <a href="#" className="navbar-brand px-1">
          <img src={Gambar} alt="" />
        </a>
        <div className="d-none d-md-flex align-items-center">
          {isLogin ? (
            <div className="d-flex align-items-center">
              <a
                href="/category"
                className="me-3 text-decoration-none"
                style={{ color: getUrl ? "#3ECF4C" : "#333" }}
              >
                Kategori
              </a>
              <div className="dropdown">
                <button
                  className=" bg-transparent border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={Avatar} alt="profile" className="rounded-1" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/profil">
                      Profil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/course">
                      My Class
                    </a>
                  </li>
                  <li>
                    <button
                      className="dropdown-item d-block py-2 text-danger text-decoration-none fw-semibold"
                      onClick={handleLogout}
                    >
                      Keluar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center gap-3">
              <a
                href="/category"
                className="text-decoration-none"
                style={{ color: getUrl ? "#3ECF4C" : "#333" }}
              >
                Kategori
              </a>
              <div className="d-flex gap-2">
                <div className="dropdown">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "#3ECF4C",
                      color: "#fff",
                      width: "10vh",
                    }}
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item" onClick={() => handleAdmin(100)}>
                        Admin
                      </button>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login">
                        Member
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={handleRegister}
                  className="btn"
                  style={{
                    color: "#3ECF4C",
                    width: "10vh",
                    borderColor: "#3ECF4C",
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          className="btn d-md-none p-0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
        </button>
      </div>
      {openMenu && (
        <div className="d-md-none bg-white shadow-sm py-2 px-3 w-100">
          <hr className="dropdown-divider" />
          <a
            className="d-block py-2 text-dark text-decoration-none"
            href="#kategori"
          >
            Kategori
          </a>
          <a
            className="d-block py-2 text-dark text-decoration-none"
            href="#profil"
          >
            Profil Saya
          </a>
          <button
            type="button"
            onClick={handleLogin}
            className="btn w-100 mb-2"
            style={{
              backgroundColor: "#3ECF4C",
              color: "#fff",
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="btn w-100"
            style={{
              color: "#3ECF4C",
              borderColor: "#3ECF4C",
            }}
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default HeaderNav;