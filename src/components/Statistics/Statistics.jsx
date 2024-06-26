import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.container}>
        {options.map((name, i) => {
          return (
            <p key={i} className={`${css[name]} ${css.text}`}>
              {name}:{}
              <span className={css.numbers}>{statistic[name]}</span>
            </p>
          );
        })}
        <p className={css.total}>
          Total: <span className={css.numbers}>{total}</span>
        </p>
        <p className={css.good}>
          Positive feedback:{' '}
          <span className={css.numbers}>{positivePercentage()}</span>%
        </p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
