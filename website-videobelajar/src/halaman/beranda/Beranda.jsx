import BerandaContent from "./BerandaContent";
import HeroSection from "./HeroSection";
import Newsletter from "./Newsletter";
import Footer from "../../component/Footer";
import HeaderNav from "../../component/HeaderNav";

export default function Beranda() {
  return (
    <>
      <HeaderNav />
      <HeroSection />
      <BerandaContent />
      <Newsletter />
      <Footer />
    </>
  );
}
