export default function PaymentGatewaySummary() {
  return (
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
          Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer &
          Product Manager.
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
        <h6 style={{ color: "#3ECF4C" }}>{"Rp 774.500"}</h6>
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
  );
}
