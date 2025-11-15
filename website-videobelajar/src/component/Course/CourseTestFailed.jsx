import Background from "./img/img-tryAgainTest.svg";
import Correct from "./img/Icon-correct.svg";
import Wrong from "./img/Icon-wrong.svg";
import "./CourseTestResult.css";

export default function CourseTestFailed({ nama }) {
  return (
    <>
      <div className="">
        <img src={Background} alt="" style={{ width: "100%" }} />
        <div className="p-4 px-5">
          <div>
            <h5>Tanggal {nama}:</h5>
            <p className="text-muted">23 September 2022, 10:20 AM</p>
          </div>
          <div className="d-flex w-100 mb-3 justify-content-between course-test-result">
            <div
              className="p-3 border-1 border"
              style={{
                width: "50%",
                backgroundColor: "#FF5C2B",
                color: "#fff",
              }}
            >
              <p className="m-0">Nilai</p>
              <h6>{"20"}</h6>
            </div>
            <div
              className="p-3 border-1 border"
              style={{
                width: "50%",
              }}
            >
              <p className="m-0">Soal</p>
              <h6>{"10"}</h6>
            </div>
            <div
              className="p-3 border-1 border"
              style={{
                width: "50%",
              }}
            >
              <p className="m-0">Benar</p>
              <h6>
                <img src={Correct} alt="" />
                {"2"}
              </h6>
            </div>
            <div
              className="p-3 border-1 border"
              style={{
                width: "50%",
              }}
            >
              <p className="m-0">Salah</p>
              <h6>
                <img src={Wrong} alt="" />
                {"8"}
              </h6>
            </div>
          </div>
          <h5>Sedikit Lagi!</h5>
          <p className="text-muted">
            Kamu sudah menyelesaikan quiz dengan baik namun nilaimu belum cukup
            untuk melanjutkan materi.
          </p>
          <p className="text-muted">
            Pelajari kembali modul sebelumnya dan kerjakan kembali quiz ini!
          </p>
          <button
            type="button"
            className="rounded"
            style={{
              color: "#3ecf4c",
              backgroundColor: "#fff",
              border: "1px solid",
              width: "12rem",
              height: "40px",
            }}
          >
            <i class="bi bi-arrow-clockwise"></i>
            Ulangi Quiz
          </button>
        </div>
      </div>
    </>
  );
}
