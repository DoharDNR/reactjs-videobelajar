import imgIndikator from "./img/img-indicator.svg";

const CoursePopup = ({ nama }) => {
  return (
    <div className="vh-100 w-100 position-absolute z-1">
      <div className="bg-black w-100 h-100 opacity-25"></div>
      <div className="card position-absolute align-items-center justify-content-center course-popup p-3">
        <img src={imgIndikator} alt="" style={{ height: "60%" }} />
        <div>
          <h5 className="text-center">Selesaikan {nama}</h5>
          <p>Apakah kamu yakin untuk menyelesaikan pretest ini?</p>
        </div>
        <div
          className="gap-3 justify-content-between payment-method-mobile"
          style={{ height: "10%", width: "100%" }}
        >
          <button
            type="button"
            className="rounded h-100 w-100"
            style={{
              color: "#3ecf4c",
              backgroundColor: "#fff",
              border: "1px solid",
            }}
          >
            Batal
          </button>
          <button
            type="button"
            className="rounded border-0 h-100 w-100"
            style={{
              backgroundColor: "#3ecf4c",
              color: "#fff",
            }}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
