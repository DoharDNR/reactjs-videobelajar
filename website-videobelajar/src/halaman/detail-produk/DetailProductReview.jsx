import StarRating from "../../component/StarRating";

const DetailProductReview = ({ reviewContent, score }) => {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Rating dan Review</h5>
      <div className="row gap-3">
        {reviewContent.map((review) => (
          <div key={review.id} className="col">
            <div className="card p-3 m-0">
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
              <div className="d-flex gap-2 align-items-center">
                <StarRating score={score} />
                <span className="text-gray">{score}</span>
                <span className="text-gray">{"(86)"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProductReview;
