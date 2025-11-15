import Avatar from "../assets/Avatar.svg";
import Gambar from "../assets/videobelajar1.svg";
import Metode from "../assets/Stepper-Metode.svg";
import Bayar from "../assets/Stepper-Bayar.svg";
import Done from "../assets/Stepper-Done.svg";
import { useState } from "react";
import "./HeaderNav.css";

const HeaderNavCourse = ({ logout, isPayment, step, classMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const status = [Metode, Bayar, Done];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
      <div className="container-fluid p-3 px-3" style={{ width: "87%" }}>
        <button className="d-flex border-0 bg-transparent text-wrap-update">
          <i className="bi bi-arrow-left me-2" />
          Foundations of User Experience Design
        </button>
        <div className="d-none d-md-flex align-items-center">
          <img src={status[step]} alt="" className="nav-stepper" />
          <div className="d-flex align-items-center">
            <div
              className="rounded"
              style={{
                backgroundColor: "#FFF7D7CC",
                width: "10rem",
                height: "10px",
              }}
            >
              <div
                className="rounded display-off"
                style={{
                  objectFit: "contain",
                  backgroundColor: "#FFBD3A",
                  width: "80%",
                  height: "10px",
                }}
              />
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#3ECF4C" }}
              >
                {"10/12"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <h6 className="fw-bold">25% Modul Telah Selesai</h6>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-secondary mx-3"
                    disabled
                    style={{ width: "93%" }}
                  >
                    Ambil Sertifikat
                  </button>
                </li>
              </ul>
            </div>
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
