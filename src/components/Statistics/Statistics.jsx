import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.feedbackFormWrapper}>
    <h4 className={styles.title}>Statistics</h4>
    <p>
      Good: <span className={styles.positive}>{good}</span>
    </p>
    <p>
      Neutral: <span className={styles.neutral}>{neutral}</span>
    </p>
    <p>
      Bad: <span className={styles.negative}>{bad}</span>
    </p>
    <p>
      Total feedbacks: <span>{total}</span>
    </p>
    <p>
      Positive feedbacks: <span>{positivePercentage}%</span>
    </p>
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
