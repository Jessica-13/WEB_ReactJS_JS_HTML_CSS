import React, { useState } from 'react';

function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »  const [count, setCount] = useState(0);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Vous avez cliqu\xE9 ',
      count,
      ' fois'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return setCount(count + 1);
        } },
      'Cliquez ici'
    )
  );
}