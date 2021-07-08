import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ stats, title }) => (
  <section>
    <h2 className="statistics-title">{title}</h2>
    <ul className={styles.StatisticsList}>
      {stats.map((item) => (
        <li key={item.id} className={styles.StatisticsItem}>
          <span>{item.label}: </span>
          <span>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
