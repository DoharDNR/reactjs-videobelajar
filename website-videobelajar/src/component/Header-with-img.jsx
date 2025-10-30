import Avatar from "../assets/Avatar.svg";
import Gambar from "../assets/videobelajar1.svg";

const NavbarImg = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="#" className="navbar-brand">
          <img src={Gambar} alt="" />
        </a>
        <div className="d-flex align-items-center">
          <a href="#kategori" className="me-3 text-dark text-decoration-none">
            Kategori
          </a>
          <img src={Avatar} alt="profile" className="rounded-circle" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarImg;
