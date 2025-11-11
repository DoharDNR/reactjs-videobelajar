import React, { useState, useRef, useEffect } from "react";
import { myCourse } from "../../database/DaftarKonten";
import "../Profile/Profil.css";
import DaftarKelasList from "./DaftarKelasList";

export default function DaftarKelas() {
  const tabs = ["Semua Kelas", "Sedang Berjalan", "Selesai"];
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const [lineAnimate, setLineAnimate] = useState({});
  const tabRefs = useRef([]);

  const filteredVideos =
    activeTab === "Semua Kelas"
      ? myCourse
      : myCourse.filter((v) => v.category === activeTab);

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
      <div className="profil-mobile-mode justify-content-between">
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
          <div className="d-flex bg-white border border-1 rounded p-2 profil-search-mobile">
            <input type="text" className="border-0" placeholder="Cari Kelas" />
            <i className="bi bi-search"></i>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {filteredVideos.map((video, index) => (
          <div key={index} className="card">
            <DaftarKelasList video={video} />
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
