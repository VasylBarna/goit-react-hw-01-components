import StatisticList from './components/StatisticList';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <StatisticList label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
