const CourseList = () => {
  const listCourse = [
    {
      key: "test",
      status: false,
      title: "Pre-Test: Introduction to HR",
      icon: "bi-file-earmark-check",
      count: "10 Pertanyaan",
    },
    {
      key: "video",
      status: false,
      title: "Video: Introduction to HR",
      icon: "bi-play-circle",
      count: "12 Menit",
    },
    {
      key: "video",
      status: false,
      title: "Video: Introduction to HR",
      icon: "bi-play-circle",
      count: "12 Menit",
    },
    {
      key: "video",
      status: false,
      title: "Video: Introduction to HR",
      icon: "bi-play-circle",
      count: "12 Menit",
    },
    {
      key: "video",
      status: false,
      title: "Video: Introduction to HR",
      icon: "bi-play-circle",
      count: "12 Menit",
    },
    {
      key: "rangkuman",
      status: false,
      title: "Rangkuman: Introduction to HR",
      icon: "bi-book",
      count: "12 Menit",
    },
    {
      key: "quiz",
      status: false,
      title: "Quiz: Introduction to HR",
      icon: "bi-file-earmark-check",
      count: "10 Pertanyaan",
    },
    {
      key: "ujian",
      status: false,
      title: "Ujian Akhir: Introduction to HR",
      icon: "bi-file-earmark-check",
      count: "10 Pertanyaan",
    },
  ];
  return (
    <div
      className="p-4 border-1 border"
      style={{ maxWidth: "430px", width: "100%" }}
    >
      <h5 className="fw-bold mb-4">Daftar Produk</h5>
      <hr />
      <div className="d-flex flex-column mb-4">
        <div className="d-flex gap-3 my-2">
          <h5 className="fw-bold text-wrap-update">Introduction to HR</h5>
          <i className="bi bi-chevron-up ms-auto"></i>
        </div>
        <div className="d-flex flex-column gap-3">
          {listCourse.map((list, idx) => (
            <button
              key={idx}
              className="btn border border-1 d-flex m-0 p-3 flex-row gap-2 course-button"
              // onClick={() => setSelectedComponent(list.key)}
            >
              {list.status ? (
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "#3ECF4C" }}
                ></i>
              ) : (
                <i className={`bi ${list.icon}`}></i>
              )}
              <div className="d-flex flex-column mb-0">
                <div className="d-flex gap-2 align-items-center">
                  <span className="m-0">{list.title}</span>
                </div>
                <p className="text-muted me-auto">{list.count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="d-flex gap-3">
        <h5 className="fw-bold mb-4 text-wrap-update">Introduction to HR</h5>
        <i className="bi bi-chevron-down ms-auto"></i>
      </div>

      <div
        className="d-flex align-items-center gap-3 p-3"
        style={{ backgroundColor: "#FFBD3A", color: "#fff" }}
      >
        <i className="bi bi-star"></i>
        <p className="m-0">Beri Review & Rating</p>
      </div>
    </div>
  );
};

export default CourseList;
