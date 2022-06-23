import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { changeTheme } from "../../redux/slices/controlColorSlice";
import "./main.scss";

export default function Main() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(
    useSelector((state) => state.controlColor.theme)
  );
  const handleSubmitTheme = (event) => {
    event.preventDefault();
    dispatch(changeTheme());
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`main`}>
      <div className="left">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="color-control">
        <div className="theme">
          <button onClick={handleSubmitTheme}>
            {theme === "dark" ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
