
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Developments = () => {
  const [developments, setDevelopments] = useState(null);
  useEffect(() => {
    fetch('http://localhost:1337/developments')
      .then((data) => data.json())
      .then((data) => {
        setDevelopments(data);
      });
  }, []);
  return (
    <section>
      { developments?.map((developments) => {
        return (
          <>
            <h2>{developments.Heading}</h2>
            <p>{developments.Description}</p>
            { developments?.Photos.map((img) => <img src={`http://localhost:1337${img.url}`} />)}
          </>
        );
      })}
    </section>
  )
};

export default Developments;

