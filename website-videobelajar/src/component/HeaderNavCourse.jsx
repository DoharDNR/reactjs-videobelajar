import Avatar from "../assets/Avatar.svg";
import Gambar from "../assets/videobelajar1.svg";
import Metode from "../assets/Stepper-Metode.svg";
import Bayar from "../assets/Stepper-Bayar.svg";
import Done from "../assets/Stepper-Done.svg";
import { useState } from "react";
import "./HeaderNav.css";

const HeaderNavCourse = ({ color, logout, isPayment, step, classMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const status = [Metode, Bayar, Done];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
      <div className="container-fluid p-3 px-3" style={{ width: "87%" }}>
        <a
          href="#"
          className="navbar-brand px-1"
          style={{ display: classMode ? "none" : "block" }}
        >
          <img src={Gambar} alt="" />
        </a>
        <div className="d-none d-md-flex align-items-center">
          <img src={status[step]} alt="" className="nav-stepper" />
          <div style={{ display: logout || classMode ? "none" : "block" }}>
            <a
              href="#kategori"
              className="me-3 text-decoration-none"
              style={{ color: color }}
            >
              Kategori
            </a>
            <img src={Avatar} alt="profile" className="rounded-1" />
          </div>
          <div
            className="d-flex"
            style={{ display: logout || classMode ? "block" : "none" }}
          >
            <div style={{}}></div>
          </div>
        </div>
        <button
          className="btn d-md-none p-0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
        </button>
      </div>
      {openMenu && (
        <div
          className="d-md-none bg-white shadow-sm py-2 px-3"
          style={{ display: isPayment ? "none" : "block" }}
        >
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
          <a
            className="d-block py-2 text-dark text-decoration-none"
            href="#kelas"
          >
            Kelas Saya
          </a>
          <a
            className="d-block py-2 text-dark text-decoration-none"
            href="#pesanan"
          >
            Pesanan Saya
          </a>
          <a
            className="d-block py-2 text-danger text-decoration-none fw-semibold"
            href="#logout"
          >
            Keluar
          </a>
        </div>
      )}
    </nav>
  );
};

export default HeaderNavCourse;
