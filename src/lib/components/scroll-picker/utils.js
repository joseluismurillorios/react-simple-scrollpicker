export const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const HOURS = Array.from({ length: 12 }, (_, i) => (i + 1));
export const MINUTES = Array.from({ length: 12 }, (_, i) => (i * 5));

export const roundUpTo = roundTo => x => Math.ceil(x / roundTo) * roundTo;
export const roundUpTo5Minutes = roundUpTo(1000 * 60 * 5);

export const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export const getIndex = (touchMoveY, index, height, length) => {
  const currentTop = (index * height * -1);
  const nextIndex = ((currentTop + touchMoveY) / height) * -1;
  const clamped = clamp(nextIndex, 0, length - 1);
  return clamped;
};
