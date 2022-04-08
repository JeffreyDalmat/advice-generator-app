// == Import
import { useState } from 'react';
import axios from 'axios';

import './app.scss';

import Advice from 'src/components/Advice';
import Citation from 'src/components/Citation';
import Divider from 'src/components/Divider';
import Dice from 'src/components/Dice';
import ErrorMessage from 'src/components/ErrorMessage';

// == Composant
function App() {
  const [isCitation, setIsCitation] = useState({
    id: null,
    advice: 'Click the dice to start',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCitations = () => {
    setIsLoading(true);
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const response = res.data;
        setIsCitation(response.slip);
      })
      .catch((error) => (
        setError('Erreur de récupération des données')
      ))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDiceClick = () => {
    loadCitations();
  };
  return (
    <div className="app">
      <Advice number={isCitation.id} />
      <Citation
        id={isCitation.id}
        advice={isCitation.advice}
      />
      <Divider />
      {
        error && <ErrorMessage errorMessage={error} />
      }
      <Dice
        isLoading={isLoading}
        onDiceClick={handleDiceClick}
      />
    </div>
  );
}

// == Export
export default App;
