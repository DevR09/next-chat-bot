// in MessageParser.jsx

import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase()
    console.log('Message ::',lowerCaseMessage)
    // if (lowerCaseMessage.includes('hello')) {
      actions.greetings(message)
    // }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;