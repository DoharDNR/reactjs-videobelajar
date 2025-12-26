import Banner from "../../assets/banner.jpg";
import RatingStars from "../../component/StarRating";

export default function HeroSection() {
  return (
    <section className="container">
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
          className="position-absolute top-50 start-50 translate-middle text-white"
          style={{ width: "80%" }}
        >
          <h1 className="fw-bold mb-3">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h1>
          <p className="mb-4">
            Belajar bersama tutor profesional di Video Course. Kapanpun, di
            manapun.
          </p>
          <div className="d-flex gap-2 align-items-center">
            <RatingStars score={3} />
            <span className="text-gray">{"3.5"}</span>
            <span className="text-gray">{"(86)"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
