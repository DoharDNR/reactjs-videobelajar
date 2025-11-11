import "./Profil.css";
import profilImg from "./icon/profil.png";

export default function DaftarProfil() {
  return (
    <div className="card p-4 gap-2">
      <div className="d-flex gap-3">
        <img src={profilImg} alt="" style={{ width: "90px", height: "90px" }} />
        <div>
          <h4 className="m-0">Jennie Ruby Jane</h4>
          <p className=" m-0">rubyjane@gmail.com</p>
          <button
            className="border-0 bg-transparent fw-bold p-0"
            style={{ color: "#F64920" }}
          >
            Ganti Foto Profil
          </button>
        </div>
      </div>
      <hr />
      <form>
        <div className="profil-mobile-mode gap-3">
          <div className="profil-input-field w-100">
            <input
              type="text"
              id="name"
              className="profil-form-input"
              required
            />
            <label htmlFor="name" className="profil-form-label">
              Nama Lengkap
            </label>
          </div>

          <div className="profil-input-field w-100">
            <input
              type="email"
              id="email"
              className="profil-form-input"
              required
            />
            <label htmlFor="email" className="profil-form-label">
              Email
            </label>
          </div>

          <div className="profil-input-field profil-mobile-switch">
            <select id="option" className="profil-form-input" required>
              <option value="0">Perempuan</option>
              <option value="1">Laki-laki</option>
            </select>
            <label htmlFor="option" className="profil-form-label">
              Jenis Kelamin
            </label>
          </div>

          <div className="d-flex gap-3 w-100">
            <div className="profil-input-field w-50">
              <select className="profil-form-input" required>
                <option value="0">+62</option>
                <option value="1">+08</option>
              </select>
            </div>

            <div className="profil-input-field w-100">
              <input
                type="number"
                id="phone"
                className="profil-form-input"
                required
              />
              <label htmlFor="phone" className="profil-form-label">
                No. Hp
              </label>
            </div>
          </div>

          <div className="profil-input-field profil-mobile-switch">
            <input
              type="password"
              id="password"
              className="profil-form-input"
              required
            />
            <label htmlFor="password" className="profil-form-label">
              Password
            </label>
          </div>

          <div className="profil-input-field profil-mobile-switch">
            <input
              type="password"
              id="confirm-password"
              className="profil-form-input"
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
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
