import Gambar from "../assets/videobelajar1.svg";
import LinkedIn from "../assets/iconSosmed/Icon-LinkedIn.svg";
import Facebook from "../assets/iconSosmed/Icon-Facebook.svg";
import Instagram from "../assets/iconSosmed/Icon-Instagram.svg";
import Twitter from "../assets/iconSosmed/Icon-Twitter.svg";

export default function Footer() {
  const SosialMedia = (e) => {
    switch (e) {
      case "linkedin":
        alert("Link menuju linkedin.com");
        break;
      case "facebook":
        alert("Link menuju facebook.com");
        break;
      case "instagram":
        alert("Link menuju instagram.com");
        break;
      case "twitter":
        alert("Link menuju x.com");
        break;
    }
  };
  return (
    <footer className="bg-light p-5 mt-5 border-top">
      <div className="d-flex flex-wrap justify-content-between">
        <div className="mb-4" style={{ width: "35%" }}>
          <img src={Gambar} alt="" className="mb-4" />
          <p className="fw-bold mb-1">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
          </p>
          <p className="small mb-0">Jl. Usman Effendi No. 50, Malang</p>
          <p className="small mb-0">+62-877-7123-1234</p>
        </div>
        <div className="d-flex gap-5">
          <div>
            <h6 className="fw-bold mb-2">Kategori</h6>
            <ul className="list-unstyled small">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <h6 className="fw-bold mb-2">Perusahaan</h6>
            <ul className="list-unstyled small">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h6 className="fw-bold mb-2">Komunitas</h6>
            <ul className="list-unstyled small">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-bottom"></div>
      <div className="d-flex mt-4 align-items-center justify-content-between">
        <div className="text-center small text-muted">
          ©2023 Gerobak Sayur All Rights Reserved.
        </div>
        <div>
          <button
            className="border-0 bg-transparent"
            onClick={() => SosialMedia("linkedin")}
          >
            <img src={LinkedIn} />
          </button>
          <button
            className="border-0 bg-transparent"
            onClick={() => SosialMedia("facebook")}
          >
            <img src={Facebook} />
          </button>
          <button
            className="border-0 bg-transparent"
            onClick={() => SosialMedia("instagram")}
          >
            <img src={Instagram} />
          </button>
          <button
            className="border-0 bg-transparent"
            onClick={() => SosialMedia("twitter")}
          >
            <img src={Twitter} />
          </button>
        </div>
      </div>
    </footer>
  );
}
