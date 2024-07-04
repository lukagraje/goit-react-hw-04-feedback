import PropTypes from "prop-types";
import styles from "./scss/Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.stats}>
      <p>
        Good:<span> {good}</span>
      </p>
      <p>
        Neutral:<span> {neutral}</span>
      </p>
      <p>
        Bad:<span> {bad}</span>
      </p>
      <p>
        Total:<span> {total}</span>
      </p>
      <p>
        Positive feedback:<span> {positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
