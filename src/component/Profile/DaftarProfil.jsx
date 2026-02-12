import React, { useEffect, useState } from "react";
import "./Profil.css";
import profilImg from "./icon/profil.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser } from "../../features/users/userThunks";

export default function DaftarProfil() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { data, isLoading, error } = useSelector((state) => state.users);

  const item = React.useMemo(() => {
    return data.find((u) => u.email === token);
  }, [data, token]);

  const [change, setChange] = useState({
    fullname: "",
    email: "",
    gender: "perempuan",
    regionCode: "+62",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!item) return;
    setChange((prev) => {
      const next = {
        ...prev,
        fullname: item.fullname || "",
        email: item.email || "",
        phone: item.phone || "",
      };

      if (
        prev.fullname === next.fullname &&
        prev.email === next.email &&
        prev.phone === next.phone
      ) {
        return prev;
      }

      return next;
    });
  }, [item]);

  const result = {
    fullname: change.fullname,
    email: change.email,
    gender: change.gender,
    regionCode: change.regionCode,
    phone: change.phone,
    password: change.password,
  };

  const handleChange = (e) => {
    setChange({ ...change, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = item.id;
    dispatch(updateUser({ id, data: result }));
    alert("Perubahan berhasil!");
  };

  if (isLoading.fetch) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="card p-4 gap-2">
      <div className="d-flex gap-3">
        <img src={profilImg} alt="" style={{ width: "90px", height: "90px" }} />
        <div>
          <h4 className="m-0">{!item ? "Loading..." : item.fullname}</h4>
          <p className=" m-0">{!item ? "Loading..." : item.email}</p>
          <button
            className="border-0 bg-transparent fw-bold p-0"
            style={{ color: "#F64920" }}
          >
            Ganti Foto Profil
          </button>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="profil-mobile-mode gap-3 flex-wrap">
          <div className="profil-input-field">
            <input
              type="text"
              id="fullname"
              value={change.fullname}
              onChange={handleChange}
              className="profil-form-input"
              required
            />
            <label htmlFor="name" className="profil-form-label">
              Nama Lengkap
            </label>
          </div>

          <div className="profil-input-field">
            <input
              type="email"
              id="email"
              value={change.email}
              onChange={handleChange}
              className="profil-form-input"
              required
            />
            <label htmlFor="email" className="profil-form-label">
              Email
            </label>
          </div>

          <div className="profil-input-field">
            <select
              id="gender"
              className="profil-form-input"
              value={change.gender}
              onChange={handleChange}
              required
            >
              <option value="perempuan">Perempuan</option>
              <option value="laki-laki">Laki-laki</option>
            </select>
            <label htmlFor="option" className="profil-form-label">
              Jenis Kelamin
            </label>
          </div>

          <div className="d-flex gap-3">
            <div className="profil-input-field w-50">
              <select
                className="profil-form-input"
                id="regionCode"
                value={change.regionCode}
                onChange={handleChange}
                required
              >
                <option value="+62">+62</option>
                <option value="+08">+08</option>
              </select>
            </div>

            <div className="profil-input-field w-100">
              <input
                type="number"
                id="phone"
                className="profil-form-input"
                value={change.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="profil-form-label">
                No. Hp
              </label>
            </div>
          </div>

          <div className="profil-input-field">
            <input
              type="password"
              id="password"
              className="profil-form-input"
              value={change.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="profil-form-label">
              Password
            </label>
          </div>

          <div className="profil-input-field">
            <input
              type="password"
              id="confirmPassword"
              className="profil-form-input"
              value={change.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirm-password" className="profil-form-label">
              Konfirmasi Password
            </label>
          </div>
        </div>
        <div className="profil-form-button mt-3">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "#3ECF4C", color: "#fff" }}
            disabled={isLoading.update}
          >
            {isLoading.update ? "Updating..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
