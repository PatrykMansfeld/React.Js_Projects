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
        <p className='loading-info'>Loading...</p>
      ) : (
        <div>
          <h1 className='quote-paragraph'>{quote}</h1>
          <h2 className='anime-paragraph'>{anime}</h2>
          <h3 className='character-paragraph'>{character}</h3>
        </div>
      )}
      <button className='get-quote-btn' onClick={handleButtonClick}>Get Quote</button>
    </React.Fragment>
  );
}

export default Randomizer;
