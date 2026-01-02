import DetailProductCard from "../component/DetailProductCard";
import Footer from "../component/Footer";
import HeaderNav from "../component/HeaderNav";
import "../component/PaymentMethod/PaymentMethod.css";
import PaymentMethodList from "../component/PaymentMethod/PaymentMethodList";
import { BankTransfer, EWallet } from "../database/DaftarKonten.js";
import Metode from "../assets/Stepper-Metode.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PaymentMethod() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    get("/product.json")
      .then((product) => {
        const getItems = Object.keys(product).map((keys) => ({
          id: keys,
          ...product[keys],
        }));
        setData(getItems.find((items) => items.id === id));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <HeaderNav logout={"none"} isPayment={"block"} step={0} />
      <div className="d-flex flex-column gap-4 m-3">
        <img src={Metode} alt="" className="payment-method-show" />
        <div className="detail-product-mobile">
          <DetailProductCard
            id={data.id}
            title={data.title}
            price={data.price}
          />

          <div className="w-100 row g-3 mx-auto">
            <PaymentMethodList BankTransfer={BankTransfer} EWallet={EWallet} />
            <div className="card p-4">
              <h5 className="fw-bold mb-4">Ringkasan Pesanan</h5>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Video Learning: {data.title}.</p>
                <h6 className="w-100 text-end">{"Rp 767.500"}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-muted">Biaya Admin</p>
                <h6>{"Rp 7.000"}</h6>
              </div>
              <hr className="border border-black"></hr>
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold">Total Pembayaran</h6>
                <h6 style={{ color: "#3ECF4C" }}>{"Rp 774.500"}</h6>
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
      <Footer />
    </>
  );
}
