import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.FriendListItem} key={id}>
    <span className={isOnline ? styles.Online : styles.Offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="30" />
    <p className={styles.avatarName}>{name}</p>
  </li>
);

export default FriendListItem;
