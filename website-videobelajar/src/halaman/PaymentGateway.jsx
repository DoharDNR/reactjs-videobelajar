import "../component/PaymentGateway/PaymentGateway.css";
import PaymentGuide from "../component/PaymentGateway/PaymentGuide";
import DetailProductCard from "../component/DetailProductCard";
import PaymentGatewaySummary from "../component/PaymentGateway/PaymentGatewaySummary";
import Bayar from "../assets/Stepper-Bayar.svg";
import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";

export default function PaymentGateway() {
  return (
    <>
      <HeaderNav logout={"none"} isPayment={"block"} step={1} />
      <div
        className="d-flex gap-2 justify-content-center align-items-center p-3"
        style={{ backgroundColor: "#FEE8D2CC" }}
      >
        Selesaikan pemesanan dalam
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          00
        </div>
        :
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          50
        </div>
        :
        <div
          className="rounded"
          style={{
            padding: "5px",
            backgroundColor: "#F64920",
            color: "#fff",
          }}
        >
          55
        </div>
      </div>
      <div className="d-flex flex-column gap-4 m-3">
        <img src={Bayar} alt="" className="payment-method-show" />
        <div className="detail-product-mobile">
          <DetailProductCard />

          <div className="w-100 row g-3 mx-auto">
            <PaymentGatewaySummary />
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Tata Cara Pembayaran</h5>
              <div className="row gap-3">
                <PaymentGuide />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
