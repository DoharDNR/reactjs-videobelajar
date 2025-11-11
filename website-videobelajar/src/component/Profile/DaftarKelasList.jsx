import Modul from "./icon/Modul.svg";
import Time from "./icon/Time.svg";

const DaftarKelasList = ({ video }) => {
  return (
    <>
      <div
        className="rounded-top p-3 d-flex justify-content-between"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <div className="d-flex gap-2 align-items-center">
          <p className="m-0">{"12/12"}</p>
          <p className="text-muted m-0">Modul Terselesaikan</p>
        </div>
        <div
          className="btn"
          style={{
            ...(video.status === "Selesai" && {
              backgroundColor: "#E0FDDF",
              color: "#38D189",
            }),
            ...(video.status === "Sedang Berjalan" && {
              backgroundColor: "#FFF7D7CC",
              color: "#FFBD3A",
            }),
          }}
        >
          {video.status}
        </div>
      </div>

      <div className="border-top border-bottom p-3">
        <div className="profil-mobile-card gap-3">
          <img
            src={video.banner}
            alt={video.title}
            className="profil-card-img rounded-2"
            style={{ objectFit: "cover" }}
          />
          <div className="d-flex flex-column gap-2">
            <h6 className="fw-bold">{video.title}</h6>
            <p className="text-muted small card-sale-hidden">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan...
            </p>
            <div className="card-sale-mentor">
              <img
                src={video.img}
                alt={video.instructor}
                className="rounded-2 me-2"
                style={{ width: "45px" }}
              />
              <div>
                <p className="mb-0 small fw-semibold">{video.instructor}</p>
                <p className="text-muted small mb-0">{video.role}</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <img src={Modul} alt="Modul" />
              <span>{"12 Modul"}</span>
              <img src={Time} alt="Modul" />
              <span>{"360 Menit"}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex profil-mobile-card justify-content-between p-3 gap-3"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="text-muted">Progres Kelas:</span>
          <h5 className="m-0">{video.progress}%</h5>
          <div
            className="progress w-50"
            style={{ height: "0.5rem" }}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{
                width: `${video.progress}%`,
                backgroundColor: "#F64920",
              }}
            ></div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-end w-100">
          <button
            className="btn"
            style={{ borderColor: "#3ECF4C", color: "#3ECF4C" }}
          >
            Unduh Sertifikat
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
          >
            Lihat Detail Kelas
          </button>
        </div>
      </div>
    </>
  );
};

export default DaftarKelasList;
