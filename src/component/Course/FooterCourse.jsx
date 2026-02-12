export default function FooterCourse() {
  return (
    <div
      className="d-flex align-items-center justify-content-between px-3"
      style={{ width: "100%", height: "4rem", backgroundColor: "#3ECF4C" }}
    >
      <div className="d-flex text-light">
        <i className="bi bi-chevron-left"></i>
        Sebelumnya
      </div>
      <div className="d-flex text-light">
        Selanjutnya
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
}
