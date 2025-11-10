export default function PaymentChangeSummary() {
  return (
    <div className="card p-4">
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
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Total Pembayaran</h6>
        <h6 style={{ color: "#3ECF4C" }}>{"Rp 774.500"}</h6>
      </div>
      <button
        className="btn"
        style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
      >
        Beli Sekarang
      </button>
    </div>
  );
}
