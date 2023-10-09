import React from 'react';
import css from './wam-button.module.css';

type Props = {
  id: string; // For potential testing
  text: string;
  onClick: () => void;
};

const WamButton = (props: Props) => {
  const { id, text, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button id={id} className={css['wam-button']} onClick={handleClick}>
      {text}
    </button>
  );
};

export default WamButton;
