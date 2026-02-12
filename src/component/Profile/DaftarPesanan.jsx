import React, { useState, useRef, useEffect } from "react";
import "../Profile/Profil.css";
import DaftarPesananList from "./DaftarPesananList";

export default function DaftarPesanan() {
  const tabs = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];
  const [activeTab, setActiveTab] = useState("Semua Pesanan");
  const [lineAnimate, setLineAnimate] = useState({});
  const tabRefs = useRef([]);

  const transaction = [];

  const filteredVideos =
    activeTab === "Semua Pesanan"
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
      <div className="profil-mobile-mode">
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

        <div className="d-flex gap-2 justify-content-between profil-mobile-filter">
          <div className="d-flex bg-white border border-1 rounded p-2">
            <input type="text" className="border-0" placeholder="Search..." />
            <i className="bi bi-search"></i>
          </div>
          <button
            className="btn bg-white border border-1 dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Urutkan
          </button>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {filteredVideos.map((video, index) => (
          <div key={index} className="card w-100">
            <DaftarPesananList video={video} />
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
