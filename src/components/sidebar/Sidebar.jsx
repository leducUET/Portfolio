import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

export default function Sidebar() {
  const theme = useSelector((state) => state.controlColor.theme);
  return (
    <div className={`sidebar sidebar-${theme}`}>
      <div className="top">
        <NavLink className="logo feature-link" to="home">
          <li>
            <span>LvD</span>
          </li>
        </NavLink>
      </div>
      <div className="center">
        <ul>
          <NavLink className="feature-link" to="home">
            <li>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
          </NavLink>

          <NavLink className="feature-link" to="about">
            <li>
              <i class="fas fa-user"></i>
              <span>About</span>
            </li>
          </NavLink>

          <NavLink className="feature-link" to="services">
            <li>
              <i class="fas fa-list"></i>
              <span>Services</span>
            </li>
          </NavLink>

          <NavLink className="feature-link" to="portfolio">
            <li>
              <i class="fas fa-briefcase"></i>
              <span>Portfolio</span>
            </li>
          </NavLink>

          <NavLink className="feature-link" to="contact">
            <li>
              <i class="fas fa-id-card"></i>
              <span>Contact</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
