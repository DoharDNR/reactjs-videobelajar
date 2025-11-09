import HeroSection from "../component/DetailProduct/HeroSection";
import "../component/DetailProduct/DetailProduct.css";
import { videos } from "../database/DaftarKonten";
import StarRating from "../component/Beranda/StarRating";
import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";

export default function DetailProduct() {
  const reviewContent = [
    {
      id: 1,
      img: "/src/assets/img-resource/customer8.png",
      nameUser: "Gregorius Edrik Lawanto",
      role: "Senior Talent Acquisition",
      company: "WingsGroup",
      describe:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    },
    {
      id: 2,
      img: "/src/assets/img-resource/customer8.png",
      nameUser: "Gregorius Edrik Lawanto",
      role: "Senior Talent Acquisition",
      company: "WingsGroup",
      describe:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    },
  ];

  return (
    <>
      <HeaderNav color={"#333"} />
      <div className="d-flex flex-column gap-4 m-3">
        <div className="container d-flex gap-2">
          <a href="/beranda" className="text-muted text-decoration-none">
            Beranda
          </a>
          <span>/</span>
          <a href="#" className="text-muted text-decoration-none">
            Desain
          </a>
          <span>/</span>
          <div className="text-wrap-update">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </div>
        </div>
        <HeroSection />

        <div className="mobile-mode">
          <div className="card p-4" style={{ height: "100%" }}>
            <h5>
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
              Manager.
            </h5>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <h5 className="fw-bold" style={{ color: "#3ECF4C" }}>
                  Rp 250K
                </h5>
                <h6 className="text-muted text-decoration-line-through opacity-50">
                  Rp 500K
                </h6>
              </div>
              <p className="bg-warning rounded-pill p-2 text-light">
                Diskon 50%
              </p>
            </div>
            <p className="text-primary">
              Penawaran spesial tersisa 2 hari lagi!
            </p>
            <button
              className="btn"
              style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
            >
              Beli Sekarang
            </button>
            <div>
              <h6>kelas ini sudah termasuk</h6>
              <div className="row row-cols-2">
                <div className="col">
                  <i className="bi bi-file-earmark-check p-1"></i>
                  <span className="text-muted">Ujian Akhir</span>
                </div>
                <div className="col">
                  <i className="bi bi-camera-video p-1"></i>
                  <span className="text-muted">49 Video</span>
                </div>
                <div className="col">
                  <i className="bi bi-book p-1"></i>
                  <span className="text-muted">7 Dokumen</span>
                </div>
                <div className="col">
                  <i className="bi bi-patch-check p-1"></i>
                  <span className="text-muted">Sertifikat</span>
                </div>
                <div className="col">
                  <i className="bi bi-pencil-square p-1"></i>
                  <span className="text-muted">Pretest</span>
                </div>
              </div>
            </div>
            <div>
              <h6>kelas ini sudah termasuk</h6>
              <div>
                <i className="bi bi-translate p-1"></i>
                <span className="text-muted">Bahasa Indonesia</span>
              </div>
            </div>
          </div>

          <div className="w-100 row g-3 mx-auto">
            <div className="card p-4">
              <h5 className="fw-bold">Deskripsi</h5>
              <p className="fs-6 text-muted">
                Foundations of User Experience (UX) Design adalah yang pertama
                dari rangkaian tujuh kursus yang akan membekali Anda dengan
                keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
                pemula dalam desain pengalaman pengguna. Desainer UX fokus pada
                interaksi yang dilakukan orang dengan produk seperti situs web,
                aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi
                sehari-hari itu dapat digunakan, menyenangkan, dan dapat
                diakses. Peran seorang desainer UX tingkat pemula mungkin
                termasuk berempati dengan pengguna, menentukan poin rasa sakit
                mereka, memunculkan ide untuk solusi desain, membuat wireframe,
                prototipe, dan maket, dan menguji desain untuk mendapatkan umpan
                balik.
              </p>
            </div>
            <div className="card p-4">
              <h5 className="fw-bold mb-4">
                Belajar Bersama Tutor Profesional
              </h5>
              <div className="row">
                {reviewContent.map((review) => (
                  <div key={review.id} className="card p-3">
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={review.img}
                        alt={review.nameUser}
                        className="rounded-2 me-2"
                        style={{ width: "45px" }}
                      />
                      <div>
                        <p className="mb-0 small fw-semibold">
                          {review.nameUser}
                        </p>
                        <p className="text-muted small mb-0">
                          {review.role} di {review.company}
                        </p>
                      </div>
                    </div>
                    <p>{review.describe}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Kamu akan mempelajari</h5>
              <div className="d-flex flex-column mb-4">
                <div className="d-flex gap-3 my-2">
                  <h5
                    className="fw-bold text-wrap-update"
                    style={{ color: "#3ECF4C" }}
                  >
                    Introduction to Course 1: Foundations of User Experience
                    Design
                  </h5>
                  <i className="bi bi-chevron-up ms-auto"></i>
                </div>
                <div className="d-flex flex-column gap-3 w-100">
                  <div className="card w-100">
                    <div className="d-flex p-3">
                      <h6>The basics of user experience design</h6>
                      <div className="ms-auto">
                        <i className="bi bi-play-circle m-2"></i>
                        <span className="text-muted m-2">Video</span>
                        <i className="bi bi-clock m-2"></i>
                        <span className="text-muted m-2">12 Menit</span>
                      </div>
                    </div>
                  </div>
                  <div className="card w-100">
                    <div className="d-flex p-3">
                      <h6>Jobs in the field of user experience</h6>
                      <div className="ms-auto">
                        <i className="bi bi-play-circle m-2"></i>
                        <span className="text-muted m-2">Video</span>
                        <i className="bi bi-clock m-2"></i>
                        <span className="text-muted m-2">12 Menit</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="d-flex p-3">
                      <h6>The product development life cycle</h6>
                      <div className="ms-auto">
                        <i className="bi bi-play-circle m-2"></i>
                        <span className="text-muted m-2">Video</span>
                        <i className="bi bi-clock m-2"></i>
                        <span className="text-muted m-2">12 Menit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3">
                <h5
                  className="fw-bold mb-4 text-wrap-update"
                  style={{ color: "#3ECF4C" }}
                >
                  Universal design, inclusive design, and equity-focused design
                </h5>
                <i className="bi bi-chevron-down ms-auto"></i>
              </div>
              <div className="d-flex gap-3">
                <h5
                  className="fw-bold mb-4 text-wrap-update"
                  style={{ color: "#3ECF4C" }}
                >
                  Introduction to design sprints
                </h5>
                <i className="bi bi-chevron-down ms-auto"></i>
              </div>
              <div className="d-flex gap-3 text-wrap-update">
                <h5 className="fw-bold" style={{ color: "#3ECF4C" }}>
                  Introduction to UX research
                </h5>
                <i className="bi bi-chevron-down ms-auto"></i>
              </div>
            </div>
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Rating dan Review</h5>
              <div className="row">
                {reviewContent.map((review) => (
                  <div key={review.id} className="card p-3">
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={review.img}
                        alt={review.nameUser}
                        className="rounded-2 me-2"
                        style={{ width: "45px" }}
                      />
                      <div>
                        <p className="mb-0 small fw-semibold">
                          {review.nameUser}
                        </p>
                        <p className="text-muted small mb-0">
                          {review.role} di {review.company}
                        </p>
                      </div>
                    </div>
                    <p>{review.describe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="fw-bold mb-1">Video pembelajaran terkait lainnya</h4>
          <p className="text-muted mb-4">
            Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
          </p>
          <div className="row g-4">
            {videos.slice(0, 3).map((video) => (
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
                        <StarRating score={3} />
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
        </div>
      </div>
      <Footer />
    </>
  );
}
