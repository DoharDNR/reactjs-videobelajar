export default function DetailProductCard() {
  return (
    <div className="card gap-3 p-4 h-100 m-0">
      <div className="w-100">
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
          <p className="bg-warning rounded-pill p-2 text-light">Diskon 50%</p>
        </div>
        <p className="text-primary m-0">
          Penawaran spesial tersisa 2 hari lagi!
        </p>
      </div>
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
  );
}
