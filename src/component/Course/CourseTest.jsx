import Background from "./img/background.svg";

export default function CourseTest({ number }) {
  const data = [
    {
      data1:
        "Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari",
      data2: "Syarat Nilai Kelulusan: - Durasi Ujian: 5 Menit",
      data3:
        "Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini",
      button: "Masuk Pre-Test",
    },
    {
      data1:
        "Kerjakan quiz dengan sebaik mungkin untuk mengukur pemahaman terkait materi yang telah kamu pelajari",
      data2: "Syarat Nilai Kelulusan: 60%",
      data3:
        "Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu dapat melanjutkan ke modul berikutnya",
      button: "Masuk Quiz",
    },
    {
      data1:
        "Kerjakan ujian akhir dengan sebaik mungkin untuk mengukur pemahamanmu terkait seluruh materi yang telah kamu pelajari",
      data2: "Syarat Nilai Kelulusan: 60%",
      data3:
        "Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu bisa mendapatkan sertifikat kelulusan kelas",
      button: "Masuk Ujian Akhir",
    },
  ];

  const bankSoal = [
    { no: 1, soal: "" },
    { no: 2, soal: "" },
    { no: 3, soal: "" },
    { no: 4, soal: "" },
    { no: 5, soal: "" },
    { no: 6, soal: "" },
    { no: 7, soal: "" },
    { no: 8, soal: "" },
    { no: 9, soal: "" },
    { no: 10, soal: "" },
  ];

  return (
    <>
      <div style={{ display: "none" }}>
        <img src={Background} alt="" />
        <div className="d-flex flex-column gap-3 p-3">
          <div className="py-3">
            <h6 className="fw-bold">Aturan</h6>
            <p className="text-muted">{data[number].data1}</p>
            <p className="text-muted">{data[number].data2}</p>
            <p className="text-muted">{data[number].data3}</p>
          </div>
          <button
            className="btn px-4"
            style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
          >
            {data[number].button}
          </button>
        </div>
      </div>

      <div className="course-video-row">
        <div className="border border-1 course-button-number">
          <h5 className="fw-bold mb-3">List Soal</h5>
          <div className="d-flex flex-wrap gap-3 justify-content-between mb-3">
            {bankSoal.map((list) => (
              <div key={list.no}>
                <input type="radio" id={`btn${list.no}`} name="buttonGroup" />
                <label htmlFor={`btn${list.no}`} className="button-label">
                  {list.no}
                </label>
              </div>
            ))}
          </div>
          <div
            className="w-100 rounded p-3"
            style={{
              border: "1px solid #0980E2",
              backgroundColor: "#EBF9FE",
              color: "#0980E2",
            }}
          >
            Selesaikan semua soal untuk mengakhiri quiz
          </div>
        </div>

        <div className="p-3">
          <h4 className="fw-bold">Pertanyaan 1</h4>
          <p className="text-muted">
            Memikirkan dan mengantisipasi secara teliti adanya user secara tidak
            sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan
            membuat default yang mengurangi kepanikan pada user adalah
            pengertian dari ...
          </p>
          <div>
            <label className="d-flex radio-item radio-green p-3 gap-3 mb-3">
              <input type="radio" name="color" className="radio-input" />
              <span className="radio-custom"></span>
              <span className="radio-label w-100">
                Memikirkan tentang default *
              </span>
            </label>
            <label className="d-flex radio-item radio-green p-3 gap-3 mb-3">
              <input type="radio" name="color" className="radio-input" />
              <span className="radio-custom"></span>
              <span className="radio-label w-100">
                Memperitmbangkan page layout berdasarkan suatu tujuan tertentu
              </span>
            </label>
            <label className="d-flex radio-item radio-green p-3 gap-3 mb-3">
              <input type="radio" name="color" className="radio-input" />
              <span className="radio-custom"></span>
              <span className="radio-label w-100">
                Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi
                saat itu juga
              </span>
            </label>
            <label className="d-flex radio-item radio-green p-3 gap-3 mb-3">
              <input type="radio" name="color" className="radio-input" />
              <span className="radio-custom"></span>
              <span className="radio-label w-100">
                Menciptakan konsistensi dan menggunakan elemen UI umum
              </span>
            </label>
          </div>
          <div className="d-flex align-items-end gap-3 h-50">
            <button
              className="w-50 rounded"
              style={{
                border: "1px solid #3ECF4C",
                backgroundColor: "#fff",
                color: "#3ecf4c",
                height: "10%",
              }}
            >
              <i className="bi bi-arrow-left"></i>Sebelumnya
            </button>
            <button
              className="border text-light w-50 rounded"
              style={{ backgroundColor: "#3ECF4C", height: "10%" }}
            >
              Selanjutnya<i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
