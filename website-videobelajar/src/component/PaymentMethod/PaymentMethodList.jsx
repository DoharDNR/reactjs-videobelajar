const PaymentMethodList = ({ BankTransfer, EWallet }) => {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Metode Pembayaran</h5>
      <div className="d-flex flex-column gap-4">
        <div className="w-100">
          <div className="d-flex border border-1 rounded p-2">
            <div className="w-100">Transfer Bank</div>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="d-flex flex-column gap-2 mx-1">
            <div className="d-flex gap-2 border border-1 rounded p-2">
              <div className="icon-crop">
                <img
                  src={BankTransfer[0].iconBank}
                  alt={BankTransfer[0].nameBank}
                />
              </div>
              <div className="w-100">Bank BCA</div>
              <i className="bi bi-check-circle-fill text-warning"></i>
            </div>
            {BankTransfer.slice(1, 9).map((bank, index) => (
              <div
                key={index}
                className="d-flex gap-2 border border-1 rounded p-2"
              >
                <img
                  src={bank.iconBank}
                  style={{
                    objectFit: "cover",
                    width: "25px",
                    height: "100%",
                    objectPosition: "left",
                  }}
                />
                <div className="w-100">{bank.nameBank}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-100">
          <div className="d-flex border border-1 rounded p-2">
            <div className="w-100">E-Wallet</div>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="d-flex flex-column gap-2 mx-1">
            {EWallet.slice(0, 9).map((wallet, index) => (
              <div
                key={index}
                className="d-flex gap-2 border border-1 rounded p-2"
              >
                <img
                  src={wallet.iconBank}
                  style={{
                    objectFit: "cover",
                    width: "25px",
                    height: "25px",
                    objectPosition: "left",
                  }}
                />
                <div className="w-100">{wallet.nameBank}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-100">
          <div className="d-flex border border-1 rounded p-2">
            <div className="w-100">Kartu Kredit/Debit</div>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="d-flex flex-column gap-2 mx-1">
            <div className="d-flex gap-2 border border-1 rounded p-2">
              <img
                src="/src/assets/iconPayment/Kredit-icon.svg"
                style={{
                  height: "25px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodList;
