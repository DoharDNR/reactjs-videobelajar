import HeroSection from "./DetailProductHS.jsx";
import "./DetailProduct.css";
import { videos } from "../../database/DaftarKonten.js";
import HeaderNav from "../../component/HeaderNav.jsx";
import Footer from "../../component/Footer.jsx";
import DetailProductCard from "../../component/DetailProductCard.jsx";
import DetailProductMentor from "./DetailProductMentor.jsx";
import DetailProductList from "./DetailProductList.jsx";
import DetailProductReview from "./DetailProductReview.jsx";
import CardSale from "../../component/CardSale.jsx";
import { useEffect, useState } from "react";
import { AUTH_URL, get } from "../../database/RestAPI.js";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    get("/product.json?auth=" + AUTH_URL)
      .then((product) =>
        setData(
          Object.keys(product).map((keys) => ({ id: keys, ...product[keys] }))
        )
      )
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const info = data.find((items) => items.id === id);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

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
            {info ? info.category : "Loading ..."}
          </a>
          <span>/</span>
          <div className="text-wrap-update">
            {info ? info.title : "Loading ..."}
          </div>
        </div>
        <HeroSection />

        <div className="detail-product-mobile">
          {info ? (
            <DetailProductCard
              id={info.id}
              title={info.title}
              price={info.price}
            />
          ) : (
            "Loading Card ..."
          )}

          <div className="row gap-4 w-100 m-auto">
            <div className="card p-4">
              <h5 className="fw-bold">Deskripsi</h5>
              <p className="fs-6 text-muted">
                {info ? info.describe : "Loading ..."}
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
            {data.slice(0, 3).map((video) => (
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
