// import { NavLink } from "react-router-dom";
import { useContext } from "react";
import styles from "./header.module.css";
import { GlobalContext } from "../context/GlobalContext";
import { GoRepo } from "react-icons/go";

const Header = () => {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <header className={styles.header}>
        <div className={styles["img__holder"]}>
          <img src={user.avatar_url} alt="" />
        </div>
        <span>{user.login}</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <GoRepo style={{ marginRight: "0.5rem" }} />
          Repositories:{user.public_repos}
        </span>

        {/* <ul className={styles["nav-menu"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/repos"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Repostitories
            </NavLink>
          </li>
        </ul> */}
      </header>
    </>
  );
};

export default Header;
