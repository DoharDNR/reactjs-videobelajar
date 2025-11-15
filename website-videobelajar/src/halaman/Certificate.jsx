import iCertificate from "../assets/ModernCreativeGreenandYellowCompletionCertificate1.svg";
import StarRating from "../component/Beranda/StarRating";
import { videos } from "../database/DaftarKonten";

export default function Certificate() {
  console.log(videos);
  return (
    <div className="card p-3">
      <img src={iCertificate} alt="" />
      <div className="payment-method-mobile justify-content-between p-3">
        <div className="card-sale-desc">
          <h6 className="fw-bold">{videos[0].title}</h6>
          <p className="text-muted small card-sale-hidden">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan...
          </p>
          <div className="card-sale-mentor mb-3">
            <img
              src={videos[0].img}
              alt={videos[0].instructor}
              className="rounded-2 me-2"
              style={{ width: "45px" }}
            />
            <div>
              <p className="mb-0 small fw-semibold">{videos[0].instructor}</p>
              <p className="text-muted small mb-0">{videos[0].role}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-1 align-items-center">
              <StarRating score={3} />
              <span className="text-muted small">{videos[0].rating}</span>
              <span className="text-muted small">{"(86)"}</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="rounded p-2 h-25"
          style={{
            border: "1px solid",
            width: "13rem",
            color: "#3ECF4C",
            backgroundColor: "#fff",
          }}
        >
          <i class="bi bi-file-earmark-arrow-down-fill"></i>Download Rangkuman
        </button>
      </div>
    </div>
  );
}
