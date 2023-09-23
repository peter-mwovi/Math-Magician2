import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning',
        {
          headers: {
            'X-Api-Key': '7dNv3dPLyWZJxICA0hs6lA==wAAIzbPtBz8H98N7',
          },
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const { quote, author } = data[0];
      setQuote(quote);
      setAuthor(author);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quotes">
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error.message}
      </p>
      )}
      {!loading && !error && (
        <div className="details">
          <h3>Random quotes...</h3>
          <p>
            {quote}
            <span> - </span>
            <em>
              {author}
            </em>
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
