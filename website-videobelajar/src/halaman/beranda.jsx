import BerandaContent from "../component/Beranda/BerandaContent";
import Header from "../component/HeaderNav";
import HeroSection from "../component/Beranda/HeroSection";
import Newsletter from "../component/Beranda/Newsletter";
import Footer from "../component/Footer";

export default function Beranda() {
  return (
    <>
      <Header color="#333" />
      <HeroSection />
      <BerandaContent />
      <Newsletter />
      <Footer />
    </>
  );
}
