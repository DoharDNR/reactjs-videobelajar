import HeroSection from "../component/DetailProduct/DetailProductHS";
import "../component/DetailProduct/DetailProduct.css";
import { videos } from "../database/DaftarKonten.js";
import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";
import DetailProductCard from "../component/DetailProductCard";
import DetailProductMentor from "../component/DetailProduct/DetailProductMentor";
import DetailProductList from "../component/DetailProduct/DetailProductList";
import DetailProductReview from "../component/DetailProduct/DetailProductReview";
import CardSale from "../component/CardSale";

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

        <div className="detail-product-mobile">
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
                <CardSale video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
