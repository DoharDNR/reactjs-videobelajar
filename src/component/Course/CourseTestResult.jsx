import Background from "./img/img-doneTest.svg";
import Correct from "./img/Icon-correct.svg";
import Wrong from "./img/Icon-wrong.svg";
import "./CourseTestResult.css";

export default function CourseTestResult({ nama }) {
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
                backgroundColor: "#38D189",
                color: "#fff",
              }}
            >
              <p className="m-0">Nilai</p>
              <h6>{"100"}</h6>
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
                {"10"}
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
                {"10"}
              </h6>
            </div>
          </div>
          <h5>Selesai!</h5>
          <p className="text-muted">
            Pretest sudah selesai dan kami sudah mengetahui progresmu.
          </p>
          <p className="text-muted">Saatnya memulai kelas!</p>
        </div>
      </div>
    </>
  );
}
