import classNames from 'classnames';
import React from 'react';

import css from './wam-button.module.css';

type Props = {
  text: string;
  dataTestId?: string;
  disabled?: boolean;
  onClick: () => void;
};

const WamButton = (props: Props) => {
  const { dataTestId, text, disabled = false, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      data-test-id={dataTestId}
      className={classNames(css['wam-button'], { [css['disabled']]: disabled })}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default WamButton;
