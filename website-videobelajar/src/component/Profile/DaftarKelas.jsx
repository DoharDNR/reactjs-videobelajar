import React, { useState, useRef, useEffect } from "react";
import { transaction } from "../../database/DaftarKonten";
import "../Profile/Profil.css";

export default function DaftarKelas() {
  const tabs = ["Semua Kelas", "Sedang Berjalan", "Selesai"];
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
      <div className="mobile-mode justify-content-between">
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
          <div className="d-flex bg-white border border-1 rounded p-2">
            <input type="text" className="border-0" placeholder="Cari Kelas" />
            <i className="bi bi-search"></i>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {filteredVideos.map((video, index) => (
          <div key={index} className="card">
            <div
              className="rounded-top p-3 d-flex justify-content-between"
              style={{ backgroundColor: "#E2FCD933" }}
            >
              <div className="d-flex gap-2 align-items-center">
                <p className="m-0">{"12/12"}</p>
                <p className="text-muted m-0">Modul Terselesaikan</p>
              </div>
              <div
                className="btn"
                style={{
                  ...(video.status === "Berhasil" && {
                    backgroundColor: "#E0FDDF",
                    color: "#38D189",
                  }),
                  ...(video.status === "Gagal" && {
                    backgroundColor: "#FCE3D1",
                    color: "#FF5C2B",
                  }),
                  ...(video.status === "Belum Bayar" && {
                    backgroundColor: "#FFF7D7CC",
                    color: "#FFBD3A",
                  }),
                }}
              >
                {video.status}
              </div>
            </div>

            <div className="border-top border-bottom p-3">
              <div className="card-responsive">
                <img
                  src={video.banner}
                  alt={video.title}
                  className="card-img content-mobile-mode"
                  style={{ objectFit: "cover" }}
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
