import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
