import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";

const Error = () => {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className={styles["error__container"]}>
        <h1 style={{ fontSize: "10rem" }}>404</h1>
        <h3>This page does not exist</h3>
        <button className={styles["git__btn"]} onClick={goBack}>
          Back to the Home Page
        </button>
      </div>
    </>
  );
};

export default Error;
