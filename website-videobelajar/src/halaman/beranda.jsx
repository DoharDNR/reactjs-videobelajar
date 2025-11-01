import CourseCollection from "../component/Beranda/CourseCollection";
import NavbarImg from "../component/Beranda/Header-with-img";
import HeroSection from "../component/Beranda/HeroSection";
import Newsletter from "../component/Beranda/Newsletter";

export default function Beranda() {
  return (
    <>
      <NavbarImg />
      <HeroSection />
      <CourseCollection />
      <Newsletter />
    </>
  );
}
