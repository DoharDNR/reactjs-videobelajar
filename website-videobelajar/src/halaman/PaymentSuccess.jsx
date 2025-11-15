import HeaderNav from "../component/HeaderNav";
import Done from "../assets/Stepper-Done.svg";

export default function PaymentSuccess() {
  return (
    <>
      <HeaderNav logout={"none"} isPayment={"block"} step={2} />
      <div className="p-3">
        <img src={Done} alt="" className="payment-method-show w-100" />
        <div className="d-flex vh-100 justify-content-center align-items-center">
          <div className="card p-3">
            <img src="/src/assets/online-shopping-female.svg" alt="" />
            <div className="d-flex flex-column align-items-center p-3">
              <h5 className="fw-bold">Pembayaran Berhasil!</h5>
              <p className="text-muted">
                Silakan cek email kamu untuk informasi lebih lanjut. Hubungi
                kami jika ada kendala.
              </p>
              <button
                className="btn w-75"
                style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
              >
                Lihat Detail Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
