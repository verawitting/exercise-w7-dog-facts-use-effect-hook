export const DogFact = ({ fact }) => {
  let cleanFact = fact.attributes.body;
  return <div>{!cleanFact ? "Loading..." : cleanFact} </div>;
};
