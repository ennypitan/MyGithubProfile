import { useContext } from "react";
import styles from "./header.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { GoRepo } from "react-icons/go";

const Header = () => {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <header className={styles.header} aria-label="header container">
        <div className={styles.img__holder} aria-label="image holder">
          <img src={user.avatar_url} alt="profile image" />
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
      </header>
    </>
  );
};

export default Header;
