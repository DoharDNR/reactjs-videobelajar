import CourseTest from "../component/Course/CourseTest";
import CourseVideo from "../component/Course/CourseVideo";
import "../component/Course/Course.css";
import { useState } from "react";
import CourseTestResult from "../component/Course/CourseTestResult";
import CourseTestFailed from "../component/Course/CourseTestFailed";
import CoursePopup from "../component/Course/CourseReviewUp";
import CourseRangkuman from "../component/Course/CourseRangkuman";
import HeaderNavCourse from "../component/HeaderNavCourse";

export default function Course() {
  const [selectedComponent, setSelectedComponent] = useState("rangkuman");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "video":
        return <CourseVideo />;
      case "pretest":
        return <CourseTest number={0} />;
      case "quiz":
        return <CourseTest number={1} />;
      case "ujian":
        return <CourseTest number={2} />;
      case "pretest-result":
        return <CourseTestResult nama={"Pre-Test"} />;
      case "pretest-failed":
        return <CourseTestFailed nama={"Pre-Test"} />;
      case "quiz-result":
        return <CourseTestResult nama={"Quiz"} />;
      case "quiz-failed":
        return <CourseTestFailed nama={"Quiz"} />;
      case "ujian-result":
        return <CourseTestResult nama={"Ujian-Akhir"} />;
      case "ujian-failed":
        return <CourseTestFailed nama={"Ujian-Akhir"} />;
      case "test-end":
        return <CoursePopup nama={"Ujian-Akhir"} />;
      case "rangkuman":
        return <CourseRangkuman />;
      default:
        alert("Halaman Tidak Tersedia");
        break;
    }
  };

  const listCourse = [
    {
      key: "pretest",
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
    <>
      <HeaderNavCourse classMode={"none"} />
      <div className="bg-light vh-100">
        <div className="course-video-row">
          {renderComponent()}

          <div
            className="p-4 border-1 border h-100 w-100"
            style={{ maxWidth: "430px" }}
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
                    className="btn border border-1 d-flex m-0 flex-row gap-2 course-button"
                    onClick={() => setSelectedComponent(list.key)}
                    style={{ height: "60px" }}
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
                      <p className="text-muted me-auto p-0">{list.count}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="d-flex gap-3">
              <h5 className="fw-bold mb-4 text-wrap-update">
                Introduction to HR
              </h5>
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
        </div>
      </div>
    </>
  );
}
