import { format } from 'date-fns';

export const formatMessageTime = (date) => {
  return format(date, 'HH:mm:ss');
};

export const formatFullDate = (date) => {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}; 