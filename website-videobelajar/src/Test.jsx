import React, { useState } from "react";
import "./InputLabel.css"; // Kita akan buat file CSS terpisah

const InputLabel = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <h1>Input Label dengan Border</h1>

      <form onSubmit={handleSubmit}>
        {/* Default Blue Variant */}
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name" className="form-label">
            Nama Lengkap
          </label>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email" className="form-label">
            Alamat Email
          </label>
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password" className="form-label">
            Kata Sandi
          </label>
        </div>

        <h3 className="variants-title">Variasi Warna Lainnya</h3>

        {/* Red Variant */}
        <div className="form-group variant-1">
          <input
            type="text"
            className="form-input"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone" className="form-label">
            Nomor Telepon (Merah)
          </label>
        </div>

        {/* Green Variant */}
        <div className="form-group variant-2">
          <input
            type="text"
            className="form-input"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="address" className="form-label">
            Alamat (Hijau)
          </label>
        </div>

        {/* Purple Variant */}
        <div className="form-group variant-3">
          <input
            type="text"
            className="form-input"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="city" className="form-label">
            Kota (Ungu)
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Daftar Sekarang
        </button>
      </form>

      <div className="demo-note">
        <h3>Cara Kerja Desain Ini:</h3>
        <p>
          Label ditempatkan secara absolut di atas input field. Garis border
          input terlihat "terputus" di belakang label karena label memiliki
          background putih yang menutupi bagian border tersebut.
        </p>
        <p>
          <strong>Fitur Baru:</strong> Warna border input dan label berubah
          secara bersamaan saat input dalam keadaan fokus.
        </p>
      </div>
    </div>
  );
};

// Komponen InputField yang dapat digunakan kembali
const InputField = ({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  variant = "default",
  required = false,
}) => {
  return (
    <div
      className={`form-group ${
        variant !== "default" ? `variant-${variant}` : ""
      }`}
    >
      <input
        type={type}
        className="form-input"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  );
};

// Contoh penggunaan komponen InputField
const InputLabelWithReusableComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Input Label dengan Komponen Reusable</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <InputField
          id="username"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <InputField
          id="fullName"
          name="fullName"
          label="Nama Lengkap"
          value={formData.fullName}
          onChange={handleInputChange}
          variant="1" // Red variant
          required
        />

        <InputField
          id="bio"
          name="bio"
          label="Bio"
          value={formData.bio}
          onChange={handleInputChange}
          variant="2" // Green variant
        />

        <button type="submit" className="submit-btn">
          Simpan Profil
        </button>
      </form>
    </div>
  );
};

// Komponen utama yang mengekspor kedua versi
const Test = () => {
  return (
    <>
      <InputLabel />
      <InputLabelWithReusableComponent />
    </>
  );
};

export default Test;
