import DetailProductCard from "../component/DetailProductCard";
import "../component/PaymentMethod/PaymentMethod.css";
import PaymentMethodList from "../component/PaymentMethod/PaymentMethodList";
import { BankTransfer, EWallet } from "../database/DaftarKonten";

export default function PaymentMethod() {
  return (
    <>
      <div className="d-flex flex-column gap-4 m-3">
        <div className="detail-product-mobile">
          <DetailProductCard />

          <div className="w-100 row g-3 mx-auto">
            <PaymentMethodList BankTransfer={BankTransfer} EWallet={EWallet} />
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Ringkasan Pesanan</h5>
              <div className="d-flex justify-content-between">
                <p className="text-muted">
                  Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX
                  Designer & Product Manager.
                </p>
                <h6 className="w-100 text-end">{"Rp 767.500"}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Biaya Admin</p>
                <h6>{"Rp 7.000"}</h6>
              </div>
              <hr className="border border-black"></hr>
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold">Total Pembayaran</h6>
                <h6>{"Rp 774.500"}</h6>
              </div>
              <button
                className="btn"
                style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
