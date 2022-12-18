import { format } from 'date-fns';

export const dateToString = (date: Date) => {
  if (!date) return null;
  return format(date, 'yyyy年M月d日 HH時mm分');
};
