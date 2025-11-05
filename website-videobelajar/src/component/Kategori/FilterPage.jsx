import { useState } from "react";
import FilterSection from "./FilterSection";
import File from "./icon/File.svg";
import Interface from "./icon/Interface.svg";
import Calender from "./icon/Calender.svg";
import "./Kategori.css";

export default function FilterPage() {
  const [selected, setSelected] = useState({});

  const toggleCheckbox = (key, value) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const resetFilters = () => setSelected({});

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold text-muted">Filter</h5>
        <button className="btn text-danger p-0" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <FilterSection icon={File} title="Bidang Studi">
        {[
          "Pemasaran",
          "Digital & Teknologi",
          "Pengembangan Diri",
          "Bisnis Manajemen",
        ].map((item) => (
          <div className="form-check mb-2" key={item}>
            <input
              className="form-check-input border-success-update"
              type="checkbox"
              checked={selected["study"] === item}
              onChange={() => toggleCheckbox("study", item)}
            />
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>

      <FilterSection icon={Interface} title="Harga">
        {["Gratis", "Berbayar"].map((item) => (
          <div className="form-check mb-2" key={item}>
            <input
              className="form-check-input border-success-update"
              type="checkbox"
              checked={selected["price"] === item}
              onChange={() => toggleCheckbox("price", item)}
            />
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>

      <FilterSection icon={Calender} title="Durasi">
        {["Kurang dari 4 Jam", "4 – 8 Jam", "Lebih dari 8 Jam"].map((item) => (
          <div className="form-check mb-2" key={item}>
            <input
              className="form-check-input border-success-update"
              type="radio"
              name="duration"
              checked={selected["duration"] === item}
              onChange={() => toggleCheckbox("duration", item)}
            />
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>
    </>
  );
}
