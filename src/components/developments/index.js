
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { styled } from 'goober'

export const StyledImg = styled('img')`
  max-width: 100%;
`;

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
          <section>
            <h2>{developments.Heading}</h2>
            <p>{developments.Description}</p>
            { developments?.Photos.map((img) => <StyledImg src={`http://localhost:1337${img.url}`} />)}
          </section>
        );
      })}
    </section>
  )
};

export default Developments;

