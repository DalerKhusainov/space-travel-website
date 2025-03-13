// import { CSSProperties } from "react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul
        className={`${styles.primaryNavigation} flex`}
        // style={{ "--gap": "8rem" } as CSSProperties}
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${
                styles.link
              } uppercase letter-spacing-2 text-white`
            }
            to="/"
          >
            <span>01</span>Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${
                styles.link
              } uppercase letter-spacing-2 text-white`
            }
            to="/about"
          >
            <span>02</span>About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${
                styles.link
              } uppercase letter-spacing-2 text-white`
            }
            to="/contacts"
          >
            <span>03</span>Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
