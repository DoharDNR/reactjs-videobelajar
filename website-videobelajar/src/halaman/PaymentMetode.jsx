import Footer from "../component/Footer";
import HeaderNav from "../component/HeaderNav";
import "../component/PaymentMethod/PaymentMethod.css";
import PaymentMethodList from "../component/PaymentMethod/PaymentMethodList";
import { BankTransfer, EWallet } from "../database/DaftarKonten.js";
import Metode from "../assets/Stepper-Metode.svg";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentMethod({ data, isLoading, error }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const info = data.find((items) => items.id === id);

  const handlePayment = () => {
    navigate("/payment-gateway/" + id);
  };

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <HeaderNav logout={"none"} isPayment={"block"} step={0} />
      <div className="d-flex flex-column gap-4 m-3">
        <img src={Metode} alt="" className="payment-method-show" />

        {/* CardProduct */}
        <div className="detail-product-mobile">
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
            <PaymentMethodList BankTransfer={BankTransfer} EWallet={EWallet} />
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Ringkasan Pesanan</h5>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Video Learning: {data.title}.</p>
                <h6 className="w-100 text-end">{"Rp 767.500"}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Biaya Admin</p>
                <h6>{"Rp 7.000"}</h6>
              </div>
              <hr className="border border-black"></hr>
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold">Total Pembayaran</h6>
                <h6 style={{ color: "#3ECF4C" }}>{"Rp 774.500"}</h6>
              </div>
              <button
                className="btn"
                style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
                onClick={handlePayment}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
