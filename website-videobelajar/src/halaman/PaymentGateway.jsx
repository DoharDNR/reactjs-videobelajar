import "../component/PaymentGateway/PaymentGateway.css";
import PaymentGuide from "../component/PaymentGateway/PaymentGuide";
import PaymentGatewaySummary from "../component/PaymentGateway/PaymentGatewaySummary";
import Bayar from "../assets/Stepper-Bayar.svg";
import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useCountdown } from "../hooks/useCountdown";
import { formatTime } from "../utils/formatTime";

export default function PaymentGateway({ data, isLoading, error }) {
  const { id } = useParams();

  const info = data.find((items) => items.id === id);

  const navigate = useNavigate();

  const totalSeconds = 3600;

  const secondsLeft = useCountdown(totalSeconds, () => {
    navigate("/");
  });

  const { hours, minutes, seconds } = formatTime(secondsLeft);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <HeaderNav logout={"none"} isPayment={"block"} step={1} />
      <div
        className="d-flex gap-2 justify-content-center align-items-center p-3"
        style={{ backgroundColor: "#FEE8D2CC" }}
      >
        Selesaikan pemesanan dalam
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          {hours}
        </div>
        :
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          {minutes}
        </div>
        :
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          {seconds}
        </div>
      </div>
      <div className="d-flex flex-column gap-4 m-3">
        <img src={Bayar} alt="" className="payment-method-show" />
        <div className="detail-product-mobile">
          {/* DetailProductCard */}
          <div className="card gap-3 p-4 h-100">
            <div className="w-100">
              <h5>{info.title}</h5>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h5 className="fw-bold" style={{ color: "#3ECF4C" }}>
                    Rp.{info.price / 1000}K
                  </h5>
                  <h6 className="text-muted text-decoration-line-through opacity-50">
                    Rp 500K
                  </h6>
                </div>
                <p className="bg-warning rounded-pill p-2 text-light">
                  Diskon 50%
                </p>
              </div>
              <p className="text-primary m-0">
                Penawaran spesial tersisa 2 hari lagi!
              </p>
            </div>
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
            <PaymentGatewaySummary id={id} />
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Tata Cara Pembayaran</h5>
              <div className="row gap-3">
                <PaymentGuide />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
