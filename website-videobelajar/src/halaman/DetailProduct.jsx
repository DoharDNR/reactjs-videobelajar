import HeroSection from "../component/DetailProduct/DetailProductHS";
import "../component/DetailProduct/DetailProduct.css";
import { videos } from "../database/DaftarKonten";
import StarRating from "../component/Beranda/StarRating";
import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";
import DetailProductCard from "../component/DetailProduct/DetailProductCard";
import DetailProductMentor from "../component/DetailProduct/DetailProductMentor";
import DetailProductList from "../component/DetailProduct/DetailProductList";
import DetailProductReview from "../component/DetailProduct/DetailProductReview";

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
          <DetailProductCard />

          <div className="row gap-4 w-100 m-auto">
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
            <DetailProductMentor reviewContent={reviewContent} />
            <DetailProductList />
            <DetailProductReview reviewContent={reviewContent} />
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
