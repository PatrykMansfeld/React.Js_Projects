import React, { useState, useEffect } from 'react';

function Randomizer() {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch('https://animechan.vercel.app/api/random');
        const data = await response.json();
        console.log(data)
        setQuote(data.quote);
        setAnime(data.anime);
        setCharacter(data.character);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    if (isLoading) {
      fetchQuote();
    }
  }, [isLoading]);

  const handleButtonClick = () => {
    setIsLoading(true);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{quote}</h1>
          <h2>{anime}</h2>
          <h3>{character}</h3>
        </div>
      )}
      <button onClick={handleButtonClick}>Get Quote</button>
    </React.Fragment>
  );
}

export default Randomizer;
