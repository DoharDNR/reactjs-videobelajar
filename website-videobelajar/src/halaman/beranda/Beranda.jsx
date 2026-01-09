import BerandaContent from "./BerandaContent";
import HeroSection from "./HeroSection";
import Newsletter from "./Newsletter";
import Footer from "../../component/Footer";
import HeaderNav from "../../component/HeaderNav";

export default function Beranda({ data, isLoading, error }) {
  return (
    <>
      <HeaderNav />
      <HeroSection />
      <BerandaContent data={data} isLoading={isLoading} error={error} />
      <Newsletter />
      <Footer />
    </>
  );
}
