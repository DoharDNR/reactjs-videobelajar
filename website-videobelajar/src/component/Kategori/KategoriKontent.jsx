// import React, { useState, useRef, useEffect } from "react";
import RatingStars from "../Beranda/StarRating";
import FilterPage from "./FilterPage";

export default function KategoriKonten() {
  //Database-Line
  const imgBanner = [
    "/src/component/Beranda/img-resource/banner-produk1.jpg",
    "/src/component/Beranda/img-resource/banner-produk2.jpg",
    "/src/component/Beranda/img-resource/banner-produk3.jpg",
    "/src/component/Beranda/img-resource/banner-produk4.jpg",
    "/src/component/Beranda/img-resource/banner-produk5.jpg",
    "/src/component/Beranda/img-resource/banner-produk6.jpg",
    "/src/component/Beranda/img-resource/banner-produk7.jpg",
    "/src/component/Beranda/img-resource/banner-produk8.jpg",
    "/src/component/Beranda/img-resource/banner-produk9.jpg",
  ];

  const imgCustomer = [
    "/src/component/Beranda/img-resource/customer1.png",
    "/src/component/Beranda/img-resource/customer2.png",
    "/src/component/Beranda/img-resource/customer3.png",
    "/src/component/Beranda/img-resource/customer4.png",
    "/src/component/Beranda/img-resource/customer5.png",
    "/src/component/Beranda/img-resource/customer6.png",
    "/src/component/Beranda/img-resource/customer7.png",
    "/src/component/Beranda/img-resource/customer8.png",
    "/src/component/Beranda/img-resource/customer9.png",
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
  ];
  //Database-Line

  return (
    <section className="container p-5">
      <h4 className="fw-bold mb-1">Koleksi Video Pembelajaran Unggulan</h4>
      <p className="text-muted mb-4">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <div className="custom-flex">
        <div
          className="card p-3 gap-3 w-100"
          style={{ width: "95%", height: "100%" }}
        >
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
          <div className="row g-4">
            {videos.map((video) => (
              <div key={video.id} className="col-12 col-md-6">
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
                      Belajar dari instruktur profesional dengan harga
                      terjangkau.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={video.img}
                        alt={video.instructor}
                        className="rounded-2 me-2"
                        style={{ width: "45px" }}
                      />
                      <div>
                        <p className="mb-0 small fw-semibold">
                          {video.instructor}
                        </p>
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
