import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.feedbackFormWrapper}>
    <h4 className={styles.title}>Statistics</h4>
    <ul className={styles.itemLists}>
      <li>
        Good: <span className={styles.positive}>{good}</span>
      </li>
      <li>
        Neutral: <span className={styles.neutral}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={styles.negative}>{bad}</span>
      </li>
      <li>
        Total feedbacks: <span>{total}</span>
      </li>
      <li>
        Positive feedbacks: <span>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
