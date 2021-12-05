import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => {
          const randomColor = `rgb(${randomNum(266)}, ${randomNum(
            266,
          )}, ${randomNum(266)})`;
          return (
            <li
              className={s.item}
              key={stat.id}
              style={{ backgroundColor: randomColor }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
