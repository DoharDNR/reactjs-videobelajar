const DaftarPesananList = ({ video }) => {
  return (
    <>
      <div
        className="rounded-top p-3 profil-mobile-mode w-100"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <div className="d-flex gap-2">
          <p className="text-muted mobile-mode-switch">No. Invoice:</p>
          <a href="#">{"HEL/VI/10062023"}</a>
          <p className="text-muted mobile-mode-switch">Waktu Pembayaran:</p>
          <p className="text-muted">{"10 Juni 2023, 14.17"}</p>
        </div>
        <div
          className="btn"
          style={{
            ...(video.status === "Berhasil" && {
              backgroundColor: "#E0FDDF",
              color: "#38D189",
            }),
            ...(video.status === "Gagal" && {
              backgroundColor: "#FCE3D1",
              color: "#FF5C2B",
            }),
            ...(video.status === "Belum Bayar" && {
              backgroundColor: "#FFF7D7CC",
              color: "#FFBD3A",
            }),
          }}
        >
          {video.status}
        </div>
      </div>

      <div className="border-top border-bottom p-3 profil-mobile-mode">
        <div className="d-flex gap-3 align-items-center">
          <img
            src={video.banner}
            alt={video.title}
            className="card-img"
            style={{ width: "52px", height: "52px", objectFit: "cover" }}
          />
          <p className="m-0">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan...
          </p>
        </div>

        <div className="border-start px-3">
          <h5 className="text-muted">Harga</h5>
          <h6 className="fw-bold">{"Rp 300.000"}</h6>
        </div>
      </div>

      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <span className="text-muted">Total Pembayaran</span>
        <span className="fw-bold text-success-update">Rp 300.000</span>
      </div>
    </>
  );
};

export default DaftarPesananList;
