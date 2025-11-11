import { useState } from "react";
import DaftarPesanan from "../component/Profile/DaftarPesanan";
import "../component/Profile/Profil.css";
import DaftarKelas from "../component/Profile/DaftarKelas";
import DaftarProfil from "../component/Profile/DaftarProfil";

export default function Pesanan() {
  const [selectedComponent, setSelectedComponent] = useState("pesanan");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "profil":
        return <DaftarProfil />;
      case "kelas":
        return <DaftarKelas />;
      case "pesanan":
        return <DaftarPesanan />;
      default:
        return;
    }
  };

  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? "#FFF7D7CC" : "#fff",
    color: isActive ? "#FFBD3A" : "#3A354161",
    borderColor: isActive ? "#FFBD3A" : "#fff",
  });
  const menuItems = [
    { key: "profil", label: "Profil Saya", icon: "bi-person-fill" },
    { key: "kelas", label: "Kelas Saya", icon: "bi-journal-bookmark-fill" },
    { key: "pesanan", label: "Pesanan Saya", icon: "bi-basket2" },
  ];
  return (
    <>
      <div className="p-3 gap-3 profil-mobile-mode">
        <div className="h-100">
          <h5>Daftar Pesanan</h5>
          <p className="text-muted">Informasi terperinci mengenai pembelian</p>
          <div className="card p-3">
            {menuItems.map((item) => (
              <button
                key={item.key}
                className="btn"
                onClick={() => setSelectedComponent(item.key)}
                style={buttonStyle(selectedComponent === item.key)}
              >
                <div className="d-flex align-items-center gap-2">
                  <i className={`bi ${item.icon}`} />
                  <h6 className="m-0">{item.label}</h6>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="w-100">{renderComponent()}</div>
      </div>
    </>
  );
}
