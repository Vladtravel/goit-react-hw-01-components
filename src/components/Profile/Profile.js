import React from "react";
import defaultFoto from "./default-foto.png";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

export const Profile = ({ avatar, name, tag, location, stats }) => (
  <>
    <div className={styles.Profile}>
      <img src={avatar} alt="Аватар пользователя" />
      <ul className={styles.ProfileInfoList}>
        <li className={styles.ProfileName}>{name} </li>
        <li className={styles.ProfileTag}>@{tag} </li>
        <li className={styles.ProfileLocation}>{location}</li>
      </ul>
      <ul className={styles.ProfileStatisticList}>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileData}>Followers: </span>
          <span className={styles.ProfileStatistic}>{stats.followers}</span>
        </li>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileData}>Views: </span>
          <span className={styles.ProfileStatistic}>{stats.views}</span>
        </li>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileData}>Likes: </span>
          <span className={styles.ProfileStatistic}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

Profile.defaultProps = {
  avatar: defaultFoto,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  alt: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
