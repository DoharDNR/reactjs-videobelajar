const CourseRangkuman = () => {
  return (
    <div className="d-flex flex-column gap-2 w-100">
      <video src="/" className="bg-black w-100 h-50"></video>
      <div className="p-3 d-flex flex-column gap-2">
        <h6 className="fw-bold">Download Rangkuman Modul</h6>
        <p className="text-muted small">
          Silakan download rangkuman modul dari materi yang telah kamu pelajari
        </p>
        <button
          type="button"
          className="rounded p-2"
          style={{
            border: "1px solid",
            width: "13rem",
            color: "#3ECF4C",
            backgroundColor: "#fff",
          }}
        >
          <i className="bi bi-file-earmark-arrow-down-fill"></i>Download
          Rangkuman
        </button>
      </div>
    </div>
  );
};

export default CourseRangkuman;
