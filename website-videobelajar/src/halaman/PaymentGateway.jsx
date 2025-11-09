import { BankTransfer } from "../database/DaftarKonten";
import "../component/PaymentGateway/PaymentGateway.css";
import PaymentGuide from "../component/PaymentGateway/PaymentGuide";

export default function PaymentGateway() {
  return (
    <>
      <div className="d-flex flex-column gap-4 m-3">
        <div className="mobile-mode">
          <div className="card p-4 " style={{ height: "100%" }}>
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
            <div className="py-2">
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
            <div className="py-2">
              <h6>kelas ini sudah termasuk</h6>
              <div>
                <i className="bi bi-translate p-1"></i>
                <span className="text-muted">Bahasa Indonesia</span>
              </div>
            </div>
          </div>

          <div className="w-100 row g-3 mx-auto">
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Metode Pembayaran</h5>
              <div className="card align-items-center p-3 mb-4 gap-3">
                <img
                  src={"/src/assets/iconPayment/BCA-Logo.png"}
                  alt="BCA Logo"
                  style={{ width: "117px" }}
                />
                <p>Bayar Melalui Virtual Account {"BCA"}</p>
                <div className="d-flex gap-3">
                  <p className="text-muted mb-0">11739 081234567890</p>
                  <button className="border border-0 bg-transparent text-danger">
                    Salin
                  </button>
                </div>
              </div>
              <h5 className="fw-bold mb-4">Ringkasan Pesanan</h5>
              <div className="d-flex justify-content-between">
                <p className="text-muted">
                  Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX
                  Designer & Product Manager.
                </p>
                <h6 className="w-100 text-end">{"Rp 767.500"}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Biaya Admin</p>
                <h6>{"Rp 7.000"}</h6>
              </div>
              <hr className="border border-black"></hr>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold">Total Pembayaran</h6>
                <h6>{"Rp 774.500"}</h6>
              </div>
              <div className="payment-method-mobile">
                <button
                  className="btn w-100"
                  style={{ color: "#3ECF4C", borderColor: "#3ECF4C" }}
                >
                  Ganti Metode Pembayaran
                </button>
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Tata Cara Pembayaran</h5>
              <div className="card p-3 gap-3 w-100">
                <PaymentGuide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
