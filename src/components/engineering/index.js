import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Engineering = () => {
  const [engineerings, setEngineerings] = useState(null);
  useEffect(() => {
    fetch('http://localhost:1337/engineerings')
      .then((data) => data.json())
      .then((data) => {
        setEngineerings(data);
      });
  }, []);
  return (
    <section>
      { engineerings?.map((engineering) => {
        return (
          <>
            <h2>{engineering.Heading}</h2>
            <p>{engineering.Description}</p>
            { engineering?.Photos.map((img) => <img src={`http://localhost:1337${img.url}`} />)}
          </>
        );
      })}
    </section>
  )
};

export default Engineering;
