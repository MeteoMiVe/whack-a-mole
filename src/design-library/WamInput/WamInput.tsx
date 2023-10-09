import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

import css from './wam-input.module.css';

type Props = {
  id: string; // For potential testing
  type: HTMLInputTypeAttribute | undefined;
  value: string;
  onChange: (val: string) => void;
};

const WamInput = (props: Props) => {
  const { id, type, value, onChange } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return <input id={id} className={css['wam-input']} type={type} value={value} onChange={handleOnChange} />;
};

export default WamInput;
