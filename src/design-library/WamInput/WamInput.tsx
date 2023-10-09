import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

import css from './wam-input.module.css';

type Props = {
  type: HTMLInputTypeAttribute | undefined;
  value: string;
  dataTestId?: string;
  onChange: (val: string) => void;
};

const WamInput = (props: Props) => {
  const { dataTestId, type, value, onChange } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <input data-test-id={dataTestId} className={css['wam-input']} type={type} value={value} onChange={handleOnChange} />
  );
};

export default WamInput;
