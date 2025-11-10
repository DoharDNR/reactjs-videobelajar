const DetailProductMentor = ({ reviewContent }) => {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Belajar Bersama Tutor Profesional</h5>
      <div className="row">
        {reviewContent.map((review) => (
          <div key={review.id} className="col">
            <div className="card p-3">
              <div className="d-flex align-items-center mb-2">
                <img
                  src={review.img}
                  alt={review.nameUser}
                  className="rounded-2 me-2"
                  style={{ width: "45px" }}
                />
                <div>
                  <p className="mb-0 small fw-semibold">{review.nameUser}</p>
                  <p className="text-muted small mb-0">
                    {review.role} di {review.company}
                  </p>
                </div>
              </div>
              <p>{review.describe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProductMentor;
