import FilterSection from "../Kategori/FilterSection";

export default function PaymentGuide() {
  return (
    <>
      <FilterSection title="ATM BCA">
        {[
          "1. Masukkan kartu ATM dan PIN BCA Anda",
          `2. Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"`,
          "3. Masukkan nomor Virtual Account",
          `4. Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"`,
          `5. Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah`,
          `6. Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain`,
        ].map((item) => (
          <div className="mb-2" key={item}>
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Mobiie Banking BCA">
        {[
          "1. Buka Aplikasi BCA Mobile",
          `2. Pilih "m-BCA", kemudian pilih "m-Transfer"`,
          `3. Pilih "BCA Virtual Account"`,
          `4. Masukkan nomor Virtual Account, lalu pilih "OK"`,
          `5. Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer`,
          `6. Klik "OK" untuk melanjutkan pembayaran`,
          `7. Masukkan PIN Anda untuk meng-otorisasi transaksi`,
          `8. Transaksi Anda telah selesai`,
        ].map((item) => (
          <div className="mb-2" key={item}>
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Internet Banking BCA">
        {[
          "1. Login ke KlikBCA Individual",
          `2. Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"`,
          `3. Masukkan nomor Virtual Account`,
          `4. Pilih "Lanjutkan" untuk melanjutkan pembayaran`,
          `5. Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"`,
          "6. Pembayaran telah selesai",
        ].map((item) => (
          <div className="mb-2" key={item}>
            <label className="form-check-label opacity-75">{item}</label>
          </div>
        ))}
      </FilterSection>
    </>
  );
}
