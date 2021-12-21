import { useState } from 'react';
import './Colorpicker.css';

type Option = {
  label: string;
  color: string;
};

interface IProps {
  options: Option[];
  initialOptionPos?: number;
}

export default function Colorpicker({ options, initialOptionPos = 2 }: IProps) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPos - 1);

  const setActiveIdx = (index: number) => setActiveOptionIdx(index);

  const makeOptionClassName = (index: number) => {
    const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIdx];
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Chosen color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
