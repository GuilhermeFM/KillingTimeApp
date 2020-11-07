import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import { FiXCircle } from 'react-icons/fi';

import { ToastContainer, ToastContent } from './styles';

import { useToast } from '../../hooks/toast';

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  content?: string;
}

const Content: React.FC<{ style: object; message: IToastMessage }> = ({ style, message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);
    return () => clearTimeout(timer);
  }, [message.id, removeToast]);

  return (
    <ToastContent style={style} type={message.type}>
      <div>
        <strong>{message.title}</strong>
        {message.content && <p>{message.content}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </ToastContent>
  );
};

const Container: React.FC<{ messages: IToastMessage[] }> = ({ messages }) => {
  const transition = useTransition(messages, {
    key: message => message.id,
    from: { right: '-120%', opacity: '0' },
    enter: { right: '0%', opacity: '1' },
    leave: { right: '-120%', opacity: '0' },
  });

  return (
    <ToastContainer>
      {transition((style, item) => (
        <Content message={item} style={style} />
      ))}
    </ToastContainer>
  );
};

export default Container;
