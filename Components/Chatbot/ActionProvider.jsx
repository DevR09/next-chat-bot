// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const greetings = (msg ) => {
    const botMessage = createChatBotMessage('Here, are your response of '+ msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the greetings function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            greetings,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;