import "../component/PaymentMethod/PaymentMethod.css";
import { BankTransfer, EWallet } from "../database/DaftarKonten";

export default function PaymentChange() {
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
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold">Total Pembayaran</h6>
                <h6>{"Rp 774.500"}</h6>
              </div>
              <button
                className="btn"
                style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
              >
                Beli Sekarang
              </button>
            </div>

            <div className="card p-4">
              <h5 className="fw-bold mb-4">Metode Pembayaran</h5>
              <div className="d-flex flex-column gap-3">
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">Transfer Bank</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">E-Wallet</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">Kartu Kredit/Debit</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
