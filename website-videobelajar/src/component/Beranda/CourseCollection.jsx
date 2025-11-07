import React, { useState, useRef, useEffect } from "react";
import "./Beranda.css";
import RatingStars from "./StarRating";

export default function VideoCollection() {
  // Database-Line
  const imgBanner = [
    "/src/assets/img-resource/banner-produk1.jpg",
    "/src/assets/img-resource/banner-produk2.jpg",
    "/src/assets/img-resource/banner-produk3.jpg",
    "/src/assets/img-resource/banner-produk4.jpg",
    "/src/assets/img-resource/banner-produk5.jpg",
    "/src/assets/img-resource/banner-produk6.jpg",
    "/src/assets/img-resource/banner-produk7.jpg",
    "/src/assets/img-resource/banner-produk8.jpg",
    "/src/assets/img-resource/banner-produk9.jpg",
  ];

  const imgCustomer = [
    "/src/assets/img-resource/customer1.png",
    "/src/assets/img-resource/customer2.png",
    "/src/assets/img-resource/customer3.png",
    "/src/assets/img-resource/customer4.png",
    "/src/assets/img-resource/customer5.png",
    "/src/assets/img-resource/customer6.png",
    "/src/assets/img-resource/customer7.png",
    "/src/assets/img-resource/customer8.png",
    "/src/assets/img-resource/customer9.png",
  ];

  const videos = [
    {
      id: 1,
      banner: imgBanner[0],
      title: "Big 4 Auditor Financial Analyst",
      describe:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      img: imgCustomer[0],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Bisnis",
      price: "Rp 300K",
      rating: 3.5,
    },
    {
      id: 2,
      banner: imgBanner[1],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[1],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Bisnis",
      price: "Rp 350K",
      rating: 4.0,
    },
    {
      id: 3,
      banner: imgBanner[2],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[2],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Pemasaran",
      price: "Rp 250K",
      rating: 4.2,
    },
    {
      id: 4,
      banner: imgBanner[3],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[3],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Pemasaran",
      price: "Rp 270K",
      rating: 4.1,
    },
    {
      id: 5,
      banner: imgBanner[4],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[4],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Desain",
      price: "Rp 280K",
      rating: 4.5,
    },
    {
      id: 6,
      banner: imgBanner[5],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[5],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Desain",
      price: "Rp 240K",
      rating: 4.3,
    },
    {
      id: 7,
      banner: imgBanner[6],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[6],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Pengembangan Diri",
      price: "Rp 200K",
      rating: 4.6,
    },
    {
      id: 8,
      banner: imgBanner[7],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[7],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Pengembangan Diri",
      price: "Rp 220K",
      rating: 4.7,
    },
    {
      id: 9,
      banner: imgBanner[8],
      title: "Big 4 Auditor Financial Analyst",
      img: imgCustomer[8],
      instructor: "Jenna Ortega",
      role: "Senior Accountant at Gojek",
      category: "Pengembangan Diri",
      price: "Rp 220K",
      rating: 4.7,
    },
  ];

  //Database-Line

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
            <div className="card h-100 shadow-sm border-1 p-3">
              <img
                src={video.banner}
                alt={video.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="fw-bold">{video.title}</h6>
                <p className="text-muted small">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
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
                  <div className="d-flex gap-1 align-items-center">
                    <RatingStars score={3} />
                    <span className="text-muted small">{video.rating}</span>
                    <span className="text-muted small">{"(86)"}</span>
                  </div>
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
