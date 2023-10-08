import { CSSProperties, useMemo } from 'react';

import css from './wam-span.module.css';
import classNames from 'classnames';
import { WAMColor, WAM_COLORS } from '../../utils/constants/colors';

type Props = {
  text: string;
  color?: WAMColor;
  className?: string;
};

const WamSpan = (props: Props) => {
  const { text, color = WAM_COLORS.black, className } = props;

  // Using inline style is bad practise because of new object creation
  const style = useMemo(() => {
    const resStyle: CSSProperties = {};

    if (color) {
      resStyle.color = color;
    }

    return resStyle;
  }, [color]);

  return (
    <span className={classNames(css['wam-span'], className)} style={style}>
      {text}
    </span>
  );
};

export default WamSpan;
