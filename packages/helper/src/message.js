import { formatMessageTime } from './date.js';

export const createMessage = (text, sender) => {
  return {
    text,
    sender,
    timestamp: new Date()
  };
};

export const formatMessage = (message) => {
  const time = message.timestamp ? formatMessageTime(message.timestamp) : '';
  return `[${time}] ${message.sender}: ${message.text}`;
}; 