import React, { useState, useRef, useEffect } from "react";
import "./Beranda.css";
import CardSale from "./CardSale";
import { videos } from "../../database/DaftarKonten";

export default function VideoCollection() {
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
      ? videos
      : videos.filter((v) => v.category === activeTab);

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setLineAnimate({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <section className="container mb-5">
      <h4 className="fw-bold mb-1">Koleksi Video Pembelajaran Unggulan</h4>
      <p className="text-muted mb-4">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <div className="position-relative mb-4 border-bottom">
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

      <div className="row g-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="col-12 col-md-6 col-lg-4">
            <CardSale video={video} />
          </div>
        ))}
      </div>
    </section>
  );
}
