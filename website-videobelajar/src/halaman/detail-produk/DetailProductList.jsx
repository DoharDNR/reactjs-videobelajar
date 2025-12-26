export default function DetailProductList() {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Kamu akan mempelajari</h5>
      <div className="d-flex flex-column mb-4">
        <div className="d-flex gap-3 my-2">
          <h5 className="fw-bold text-wrap-update" style={{ color: "#3ECF4C" }}>
            Introduction to Course 1: Foundations of User Experience Design
          </h5>
          <i className="bi bi-chevron-up ms-auto"></i>
        </div>
        <div className="d-flex flex-column gap-3 w-100">
          <div className="card m-0">
            <div className="d-flex p-3 gap-2">
              <h6>The basics of user experience design</h6>
              <div className="ms-auto">
                <i className="bi bi-play-circle m-2"></i>
                <span className="text-muted m-2">Video</span>
                <i className="bi bi-clock m-2"></i>
                <span className="text-muted m-2">12 Menit</span>
              </div>
            </div>
          </div>
          <div className="card m-0">
            <div className="d-flex p-3 gap-2">
              <h6>Jobs in the field of user experience</h6>
              <div className="ms-auto">
                <i className="bi bi-play-circle m-2"></i>
                <span className="text-muted m-2">Video</span>
                <i className="bi bi-clock m-2"></i>
                <span className="text-muted m-2">12 Menit</span>
              </div>
            </div>
          </div>
          <div className="card m-0">
            <div className="d-flex p-3 gap-2">
              <h6>The product development life cycle</h6>
              <div className="ms-auto">
                <i className="bi bi-play-circle m-2"></i>
                <span className="text-muted m-2">Video</span>
                <i className="bi bi-clock m-2"></i>
                <span className="text-muted m-2">12 Menit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3">
        <h5
          className="fw-bold mb-4 text-wrap-update"
          style={{ color: "#3ECF4C" }}
        >
          Universal design, inclusive design, and equity-focused design
        </h5>
        <i className="bi bi-chevron-down ms-auto"></i>
      </div>
      <div className="d-flex gap-3">
        <h5
          className="fw-bold mb-4 text-wrap-update"
          style={{ color: "#3ECF4C" }}
        >
          Introduction to design sprints
        </h5>
        <i className="bi bi-chevron-down ms-auto"></i>
      </div>
      <div className="d-flex gap-3 text-wrap-update">
        <h5 className="fw-bold" style={{ color: "#3ECF4C" }}>
          Introduction to UX research
        </h5>
        <i className="bi bi-chevron-down ms-auto"></i>
      </div>
    </div>
  );
}
