import { useState } from "react";

export default function FilterSection({
  icon,
  title,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="p-3 border rounded-4 bg-white">
      <div
        className="d-flex justify-content-between align-items-center mb-2"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <div className="d-flex gap-2">
          <img src={icon} alt="" />
          <h6 className="fw-semibold text-success-update m-0">{title}</h6>
        </div>
        <i className={`bi bi-chevron-${open ? "up" : "down"} text-success`}></i>
      </div>

      {open && <div>{children}</div>}
    </div>
  );
}
