export type WAMColor = 'black' | 'red' | 'green' | 'blue';

// Using an object instead of an enum prevents the enum import in each "non-design" component
export const WAM_COLORS: Record<WAMColor, string> = {
  black: 'black',
  red: 'red',
  green: 'green',
  blue: 'blue'
};
