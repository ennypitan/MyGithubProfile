import React from "react";
import styles from "./profile.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaFileCode, FaGithub } from "react-icons/fa6";

function Profile({ profile }) {
  return (
    <>
      <div className={styles.profile} aria-label="profile Section">
        <div className={styles.img__holder}>
          <img
            className="profile-img"
            src={profile.avatar_url}
            alt="profile image"
          />
        </div>
        <div className={styles.profile__container}>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>

          <div className={styles.profile__info} aria-label="profile info">
            <div className={styles.info__row}>
              <span>
                <MdPeopleAlt style={{ marginRight: "0.5rem" }} />
                {profile.followers} Follower
              </span>
              <span>
                <FaUserPlus style={{ marginRight: "0.5rem" }} />{" "}
                {profile.following} Following
              </span>
              <span>
                <RiGitRepositoryFill style={{ marginRight: "0.5rem" }} />
                {profile.public_repos}Public Repos
              </span>
            </div>
            <div className={styles.info__row}>
              <span>
                <FaFileCode style={{ marginRight: "0.5rem" }} />{" "}
                {profile.public_gists} Public Gists
              </span>
              <span>
                <FaGithub style={{ marginRight: "0.5rem" }} />
                <a target="_blank" rel="noreferrer" href={profile.html_url}>
                  {profile.html_url}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
