import Avatar from "../../assets/Avatar.svg";
import Gambar from "../../assets/videobelajar1.svg";
import { useState } from "react";

export default function NavbarImg() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
      <div className="container-fluid p-3 px-3">
        <a href="#" className="navbar-brand px-1">
          <img src={Gambar} alt="" />
        </a>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex align-items-center">
          <a href="#kategori" className="me-3 text-dark text-decoration-none">
            Kategori
          </a>
          <img src={Avatar} alt="profile" className="rounded-1" />
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          className="btn d-md-none p-0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="d-md-none bg-white shadow-sm py-2 px-3">
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
}
