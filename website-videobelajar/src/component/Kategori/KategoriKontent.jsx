// import React, { useState, useRef, useEffect } from "react";
import RatingStars from "../Beranda/StarRating";
import FilterPage from "./FilterPage";
import { videos } from "../../database/DaftarKonten";

export default function KategoriKonten() {
  return (
    <section className="container p-5">
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
                      Mulai transformasi dengan instruktur profesional, harga
                      yang terjangkau, dan...
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
