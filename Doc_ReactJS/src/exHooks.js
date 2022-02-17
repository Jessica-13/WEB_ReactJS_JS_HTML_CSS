import React, { useState } from 'react';

function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
