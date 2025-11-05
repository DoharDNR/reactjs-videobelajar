import CourseCollection from "../component/Beranda/CourseCollection";
import NavbarImg from "../component/Beranda/HeaderLogin";
import HeroSection from "../component/Beranda/HeroSection";
import Newsletter from "../component/Beranda/Newsletter";
import Footer from "../component/Footer";

export default function Beranda() {
  return (
    <>
      <NavbarImg />
      <HeroSection />
      <CourseCollection />
      <Newsletter />
      <Footer />
    </>
  );
}
