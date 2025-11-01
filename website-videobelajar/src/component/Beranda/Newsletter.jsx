import Gambar from "../../assets/banner-newsletter.jpg";

export default function Newsletter() {
  return (
    <section className="container my-5">
      <div
        className="position-relative rounded-3 overflow-hidden"
        style={{
          height: "400px",
        }}
      >
        <img
          src={Gambar}
          alt="hero"
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(20%)",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          style={{ width: "60%" }}
        >
          <p className="text-uppercase opacity-50 mb-2">Newsletter</p>
          <h4 className="fw-bold fs-1">Mau Belajar Lebih Banyak?</h4>
          <p className="mb-4 opacity-50">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <form className="d-flex bg-light rounded p-2 justify-content-center justify-content-between gap-2">
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              className="border-0 w-100"
              style={{ minWidth: "250px" }}
            />
            <button className="btn btn-warning text-white">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
