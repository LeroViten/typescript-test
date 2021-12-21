import React, { useState } from 'react';
import './Counter.css';

interface IProps {
  initialValue?: number;
  step?: number;
}

export default function Counter({ initialValue = 0, step = 1 }: IProps) {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((value) => value + step);
  const decrement = () => setValue((value) => value - step);

  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={increment}>
          Increase on {step}
        </button>
        <button type="button" onClick={decrement}>
          Decrease on {step}
        </button>
      </div>
    </div>
  );
}
