import StarRating from "../Beranda/StarRating";

const CoursePopup = () => {
  return (
    <div className="vh-100 w-100 position-absolute z-1">
      <div className="bg-black w-100 h-100 opacity-25"></div>
      <div className="card position-absolute align-items-center justify-content-between p-3 course-popup">
        <div>
          <h5 className="text-center">Tulis Review Terbaikmu!</h5>
          <p>Apakah kamu yakin untuk menyelesaikan pretest ini?</p>
        </div>
        <StarRating score={3} />
        <textarea
          name="tulis"
          id="tulis"
          placeholder="Masukkan Review"
          className="w-100 rounded h-25"
          style={{ borderColor: "#3A35411F" }}
        ></textarea>
        <div
          className="gap-3 justify-content-between payment-method-mobile"
          style={{ width: "100%" }}
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
