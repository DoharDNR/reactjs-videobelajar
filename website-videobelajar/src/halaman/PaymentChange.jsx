import DetailProductCard from "../component/DetailProductCard";
import "../component/PaymentMethod/PaymentMethod.css";
import PaymentChangeSummary from "../component/PaymentChange/PaymentChangeSummary";

export default function PaymentChange() {
  return (
    <>
      <div className="d-flex flex-column gap-4 m-3">
        <div className="detail-product-mobile">
          <DetailProductCard />

          <div className="w-100 row g-3 mx-auto">
            <PaymentChangeSummary />

            <div className="card p-4">
              <h5 className="fw-bold mb-4">Metode Pembayaran</h5>
              <div className="d-flex flex-column gap-3">
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">Transfer Bank</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">E-Wallet</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex border border-1 rounded p-2">
                    <div className="w-100">Kartu Kredit/Debit</div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
