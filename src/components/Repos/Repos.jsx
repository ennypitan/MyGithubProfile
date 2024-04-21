import React from "react";
import { Link } from "react-router-dom";
import styles from "./repos.module.css";
// import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
// import { ReactComponent as Fork } from "../assets/GitFork.svg";
// import { ReactComponent as Star } from "../assets/Star.svg";

function Repos({ currentRepo, searchTerm }) {
  return (
    <div className={styles["repo__container"]}>
      {currentRepo
        .filter((repo) => {
          if (searchTerm == "") {
            return repo;
          } else if (
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return repo;
          }
        })
        .map((repo) => (
          <Link key={repo.id} to={`/repo/${repo.name}`}>
            <div className={styles["repo__item"]}>
              <h3>{repo.name}</h3>
              <span className={styles["repo__desc"]}>{repo.description}</span>
              <div className={styles["repo__under__info"]}>
                <span>Visibility: {repo.visibility}</span>
                <span>Forks: {repo.forks}</span>
                <span>Stars: {repo.stargazers_count}</span>
                <span>Language: {repo.language}</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
export default Repos;
