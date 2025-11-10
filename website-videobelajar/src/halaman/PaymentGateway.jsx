import "../component/PaymentGateway/PaymentGateway.css";
import PaymentGuide from "../component/PaymentGateway/PaymentGuide";
import DetailProductCard from "../component/DetailProductCard";
import PaymentGatewaySummary from "../component/PaymentGateway/PaymentGatewaySummary";

export default function PaymentGateway() {
  return (
    <>
      <div className="d-flex flex-column gap-4 m-3">
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
    </>
  );
}
