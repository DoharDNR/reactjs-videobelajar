import StarRating from "./Beranda/StarRating";
import "./CardSale.css";

const CardSale = ({ video }) => {
  return (
    <div className="card shadow-sm border-1 p-3 gap-3 m-0">
      <div className="card-sale gap-3">
        <img
          src={video.banner}
          alt={video.title}
          className="card-img"
          style={{ objectFit: "cover" }}
        />
        <div className="card-sale-desc">
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
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-1 align-items-center">
          <StarRating score={3} />
          <span className="text-muted small">{video.rating}</span>
          <span className="text-muted small">{"(86)"}</span>
        </div>
        <span className="fw-bold text-success-update">{video.price}</span>
      </div>
    </div>
  );
};

export default CardSale;
