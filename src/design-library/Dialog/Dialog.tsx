import { ReactNode } from 'react';

import FlexElements from '../FlexElements/FlexElements';
import css from './dialog.module.css';

type Props = {
  children: ReactNode;
};

const Dialog = (props: Props) => {
  return (
    <FlexElements className={css['dialog-wrapper']} justifyContent="center" alignItems="center">
      <FlexElements className={css['dialog']} flexDirection="column" alignItems="center">
        {props.children}
      </FlexElements>
    </FlexElements>
  );
};

export default Dialog;
