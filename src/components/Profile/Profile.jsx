import React from "react";
import styles from "./profile.module.css";

function Profile({ profile }) {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles["img__holder"]}>
          <img className="profile-img" src={profile.avatar_url} alt="" />
        </div>
        <div className="profile-details-cont flex">
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>

          <div className={styles["profile__info"]}>
            <div className={styles["info__row"]}>
              <span>Followers: {profile.followers}</span>
              <span> Following: {profile.following}</span>
              <span>Public Repos:{profile.public_repos}</span>
            </div>
            <div className={styles["info__row"]}>
              <span>Public Gists: {profile.public_gists}</span>
              <span>
                Github
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
