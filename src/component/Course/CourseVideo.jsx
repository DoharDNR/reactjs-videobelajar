import videoImg from "../../assets/img-resource/customer8.png";
import StarRating from "../Beranda/StarRating";
import FooterCourse from "./FooterCourse";

const CourseVideo = () => {
  return (
    <div className="d-flex flex-column gap-2 w-100">
      <video src="/" className="bg-black w-100 h-50"></video>
      <div className="p-3 d-flex flex-column gap-2">
        <h6 className="fw-bold">{"Praktikkan Skill dengan Technical Book"}</h6>
        <p className="text-muted small">
          Pelajari dan praktikkan skill teknis dalam berbagai industri dengan
          Technical Book Riselearn
        </p>
        <div className="card-sale-mentor">
          <img
            src={videoImg}
            alt={"video.instructor"}
            className="rounded-2 me-2"
            style={{ width: "45px" }}
          />
          <div>
            <p className="mb-0 small fw-semibold">{"Jenna Ortega"}</p>
            <p className="text-muted small mb-0">
              {"Senior Accountant di Gojek"}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-1 align-items-center">
            <StarRating score={3} />
            <span className="text-muted small">{"3.0"}</span>
            <span className="text-muted small">{"(86)"}</span>
          </div>
        </div>

        <div className="course-content-switch">
          <FooterCourse />
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
