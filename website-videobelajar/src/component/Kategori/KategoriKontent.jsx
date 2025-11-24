import FilterPage from "./FilterPage";
import { videos } from "../../database/DaftarKonten.js";
import CardSale from "../CardSale";

export default function KategoriKonten() {
  return (
    <section className="container p-3">
      <h4 className="fw-bold mb-1">Koleksi Video Pembelajaran Unggulan</h4>
      <p className="text-muted mb-4">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <div className="custom-flex">
        <div className="card p-3 gap-3 w-100" style={{ height: "100%" }}>
          <FilterPage />
        </div>
        <div>
          <div className="d-flex gap-2 justify-content-end pb-4">
            <div className="dropdown">
              <button
                className="btn bg-white border border-1 dropdown-toggle h-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Urutkan
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Harga Rendah
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Harga Tinggi
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    A to Z
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Z to A
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rating Tertinggi
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rating Terendah
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="d-flex bg-white border border-1 rounded p-2"
              style={{ width: "220px" }}
            >
              <input type="text" className="border-0" placeholder="Search..." />
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className="row">
            {videos.map((video) => (
              <div key={video.id} className="col-sm-6 pb-4">
                <CardSale video={video} />
              </div>
            ))}
          </div>
          <div
            className="d-flex gap-2 justify-content-end mt-4"
            style={{ height: "40px" }}
          >
            <button
              className="btn border border-0"
              style={{ backgroundColor: "#F4F5FA" }}
              type="button"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="btn btn-warning border border-0 text-light"
              style={{ width: "40px" }}
              type="button"
            >
              1
            </button>
            <button className="btn border border-0" type="button">
              2
            </button>
            <button className="btn border border-0" type="button">
              3
            </button>
            <button className="btn border border-0" type="button">
              4
            </button>
            <button className="btn border border-0" type="button">
              5
            </button>
            <button className="btn border border-0" type="button">
              6
            </button>
            <button
              className="btn border border-0"
              style={{ backgroundColor: "#F4F5FA" }}
              type="button"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
