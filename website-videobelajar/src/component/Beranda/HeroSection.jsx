import Banner from "../../assets/banner.jpg";

export default function HeroSection() {
  return (
    <section className="container my-5">
      <div
        className="position-relative rounded-3 overflow-hidden"
        style={{ height: "400px" }}
      >
        <img
          src={Banner}
          alt="hero"
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(20%)",
          }}
        />

        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          style={{ width: "80%" }}
        >
          <h1 className="fw-bold fs-2 mb-3">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="mb-4">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Anda juga dapat berpartisipasi
            dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
          </p>
          <button className="btn btn-login px-4 py-2">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </section>
  );
}
