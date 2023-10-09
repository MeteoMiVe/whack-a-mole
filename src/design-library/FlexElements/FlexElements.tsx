import classNames from 'classnames';
import { CSSProperties, ReactNode, useMemo } from 'react';

import css from './flex-elements.module.css';

type FlexDirection = 'row' | 'column';
type AlignItems = 'start' | 'center' | 'end';
type JustifyContent = 'start' | 'center' | 'space-between' | 'end';

type Props = {
  children: ReactNode;
  flexDirection?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: string;
  className?: string;
};

export default function FlexElements(props: Props) {
  const { gap, flexDirection, alignItems, justifyContent, children, className } = props;

  // Using inline style is bad practise because of new object creation, using memoized object instead
  const style = useMemo(() => {
    const res: CSSProperties = {};

    if (flexDirection) {
      res.flexDirection = flexDirection;
    }

    if (alignItems) {
      res.alignItems = alignItems;
    }

    if (justifyContent) {
      res.justifyContent = justifyContent;
    }

    if (gap) {
      res.gap = gap;
    }

    return res;
  }, [flexDirection, alignItems, justifyContent, gap]);

  return (
    <div className={classNames(css['flex-elements'], className)} style={style}>
      {children}
    </div>
  );
}
