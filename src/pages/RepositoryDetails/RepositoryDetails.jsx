import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./repositoryDetails.module.css";
import { FaCodeBranch, FaStar, FaEye, FaGithub, FaFile } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaCircleNotch } from "react-icons/fa";
import { MdVisibilityOff } from "react-icons/md";
import { MdDangerous } from "react-icons/md";

function RepositoryDetails() {
  const { Id } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const url = "https://api.github.com";
  // const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  useEffect(() => {
    fetchRepo();
  }, [Id]);

  // fetch single repo
  const fetchRepo = async () => {
    const response = await fetch(`${url}/repos/ennypitan/${Id}`);
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  if (loading) return <div className="loader"></div>;

  return (
    <div
      className={`${styles["flex-row"]} ${styles["overview__details__container"]}`}
      aria-label="Single repo container"
    >
      <div className={styles["flex-container"]}>
        <div className="repo">
          <h3> {repo.name}</h3>
          <span>{repo.description}</span>
          <h3>Repository Information</h3>
          <div className={styles["repo__info__box"]}>
            <span className={styles["repo__info__tag"]}>
              <FaCodeBranch style={{ marginRight: "0.7rem" }} />
              Branch:
              {repo.default_branch}
            </span>
            <span className={styles["repo__info__tag"]}>
              <FaCodeFork style={{ marginRight: "0.7rem" }} />
              Forks:
              {repo.forks}
            </span>
            <span className={styles["repo__info__tag"]}>
              <FaCircleNotch style={{ marginRight: "0.7rem" }} /> Language:{" "}
              {repo.language}
            </span>
            <span className={styles["repo__info__tag"]}>
              <FaStar style={{ marginRight: "0.7rem" }} />
              Stars: {repo.stargazers_count}
            </span>
            <span className={styles["repo__info__tag"]}>
              <FaEye style={{ marginRight: "0.7rem" }} />
              Watchers: {repo.watchers}
            </span>

            <span className={styles["repo__info__tag"]}>
              <FaFile style={{ marginRight: "0.7rem" }} />
              File Size: {repo.size}kb
            </span>
            <span className={styles["repo__info__tag"]}>
              <MdVisibilityOff style={{ marginRight: "0.7rem" }} />
              Visibility : {repo.visibility}
            </span>
            <span className={styles["repo__info__tag"]}>
              <MdDangerous style={{ marginRight: "0.7rem" }} />
              Open Issues : {repo.open_issues}
            </span>
            <span className={styles["repo__info__tag"]}>
              Created : {repo.created_at}
            </span>
          </div>

          <div className="btn-cont flex">
            <Link
              className={styles["git__btn"]}
              to={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> View on Github
            </Link>

            <button className={styles["git__btn"]} onClick={goBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryDetails;
