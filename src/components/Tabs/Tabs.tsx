import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";

export default function Tabs() {
  return (
    <div className={`${styles.tabsList} flex`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? styles.activeTab : ""} ${
            styles.tab
          } uppercase text-accent bg-dark ff-sans-cond letter-spacing-2`
        }
      >
        Moon
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? styles.activeTab : ""} ${
            styles.tab
          } uppercase text-accent bg-dark ff-sans-cond letter-spacing-2`
        }
      >
        Mars
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? styles.activeTab : ""} ${
            styles.tab
          } uppercase text-accent bg-dark ff-sans-cond letter-spacing-2`
        }
      >
        Europa
      </NavLink>
    </div>
  );
}
