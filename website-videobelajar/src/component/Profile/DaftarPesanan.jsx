import React, { useState, useRef, useEffect } from "react";
import { transaction } from "../../database/DaftarKonten";
import "../Profile/Profil.css";

export default function DaftarPesanan() {
  const tabs = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const [lineAnimate, setLineAnimate] = useState({});
  const tabRefs = useRef([]);

  const filteredVideos =
    activeTab === "Semua Kelas"
      ? transaction
      : transaction.filter((v) => v.category === activeTab);

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setLineAnimate({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <section className="card container gap-3 mb-5 p-3">
      <div className="position-relative mb-2 border-bottom">
        <div
          className="d-flex flex-nowrap gap-4 position-relative tab-slider"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none", // Firefox
            WebkitOverflowScrolling: "touch",
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab-button pb-2 ${
                activeTab === tab
                  ? "active text-warning fw-semibold"
                  : "text-secondary"
              }`}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Garis aktif */}
        <div
          className="tab-underline"
          style={{
            ...lineAnimate,
            position: "absolute",
            bottom: 0,
            height: "3px",
            backgroundColor: "#ffc107",
            transition: "all 0.3s ease",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      <div className="d-flex gap-2 justify-content-between">
        <div className="dropdown">
          <button
            className="btn bg-white border border-1 dropdown-toggle h-100 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Urutkan
          </button>
        </div>
        <div className="d-flex bg-white border border-1 rounded p-2">
          <input type="text" className="border-0" placeholder="Search..." />
          <i className="bi bi-search"></i>
        </div>
      </div>

      <div className="d-flex flex-column">
        {filteredVideos.map((video) => (
          <div key={video} className="card w-100">
            <div
              className="rounded-top p-3"
              style={{ backgroundColor: "#E2FCD933" }}
            >
              <div className="d-flex gap-2">
                {/* <p className="text-muted">No. Invoice:</p> */}
                <a href="#">{"HEL/VI/10062023"}</a>
                {/* <p className="text-muted">Waktu Pembayaran:</p> */}
                <p className="text-muted">{"10 Juni 2023, 14.17"}</p>
              </div>
              <div
                className="btn"
                style={{ backgroundColor: "#E0FDDF", color: "#38D189" }}
              >
                Berhasil
              </div>
            </div>
            <div className="border-top border-bottom p-3">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={video.banner}
                  alt={video.title}
                  className="card-img"
                  style={{ width: "52px", height: "52px", objectFit: "cover" }}
                />
                <p className="m-0">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>
              </div>

              <h5 className="text-muted">Harga</h5>
              <h6 className="fw-bold">{"Rp 300.000"}</h6>
            </div>
            <div
              className="d-flex justify-content-between align-items-center p-3"
              style={{ backgroundColor: "#E2FCD933" }}
            >
              <span className="text-muted">Total Pembayaran</span>
              <span className="fw-bold text-success-update">{video.price}</span>
            </div>
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
    </section>
  );
}
