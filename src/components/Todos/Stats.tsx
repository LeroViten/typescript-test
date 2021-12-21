import './Stats.css';

interface Props {
  total: number;
  completed: number;
}

const Stats = ({ total, completed }: Props) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">All</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Done</span>
    </p>
  </div>
);

export default Stats;
