import React, { useState, useRef, useEffect } from "react";
import "./CourseCollection.css";
import { videos } from "./DaftarKonten";

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
        <div className="d-flex flex-wrap gap-4 position-relative">
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
              }}
            >
              {tab}
            </button>
          ))}
        </div>
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
            <div className="card h-100 shadow-sm border-0">
              <img
                src={video.banner}
                alt={video.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="fw-bold">{video.title}</h6>
                <p className="text-muted small">
                  Belajar dari instruktur profesional dengan harga terjangkau.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={video.img}
                    alt={video.instructor}
                    className="rounded-2 me-2"
                    style={{ width: "45px" }}
                  />
                  <div>
                    <p className="mb-0 small fw-semibold">{video.instructor}</p>
                    <p className="text-muted small mb-0">{video.role}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-warning small">
                    ⭐ {video.rating.toFixed(1)}
                  </span>
                  <span className="fw-bold text-success-update">
                    {video.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
