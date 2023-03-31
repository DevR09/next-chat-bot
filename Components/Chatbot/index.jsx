import config from './config.js';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

export const ChatBox = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};