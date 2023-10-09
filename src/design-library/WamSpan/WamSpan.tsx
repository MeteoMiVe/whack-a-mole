import { CSSProperties, useMemo } from 'react';

import css from './wam-span.module.css';
import classNames from 'classnames';
import { WAMColor, WAM_COLORS } from '../../utils/constants/colors';

type Props = {
  text: string;
  dataTestId?: string;
  color?: WAMColor;
  className?: string;
};

const WamSpan = (props: Props) => {
  const { text, color = WAM_COLORS.black, dataTestId, className } = props;

  // Using inline style is bad practise because of new object creation, using memoized object instead
  const style = useMemo(() => {
    const resStyle: CSSProperties = {};

    if (color) {
      resStyle.color = color;
    }

    return resStyle;
  }, [color]);

  return (
    <span data-test-id={dataTestId} className={classNames(css['wam-span'], className)} style={style}>
      {text}
    </span>
  );
};

export default WamSpan;
