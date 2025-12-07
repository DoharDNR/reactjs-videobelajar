import KategoriKonten from "../component/Kategori/KategoriKontent";
import Footer from "../component/Footer";
import Gambar from "../assets/videobelajar1.svg";
import Avatar from "../assets/Avatar.svg";
import "./HeaderNav.css";
import { useState } from "react";

export default function Kategori() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
              <div className="container-fluid p-3 px-3" style={{ width: "87%" }}>
                <a href="#" className="navbar-brand px-1">
                  <img src={Gambar} alt="" />
                </a>
                <div className="d-none d-md-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <a
                      href="/category"
                      className="me-3 text-decoration-none"
                      style={{ color: "#3ECF4C" }}
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
                          <a
                            className="dropdown-item d-block py-2 text-danger text-decoration-none fw-semibold"
                            href="/login"
                          >
                            Keluar
                          </a>
                        </li>
                      </ul>
                    </div>
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
      <KategoriKonten />
      <Footer />
    </>
  );
}
