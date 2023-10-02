// DogFact Component
export const DogFact = ({ fact }) => {
  console.log("FACTS", fact)
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
const cleanFact = fact[0].attributes.body;
//console.log("cleanFact:",cleanFact)
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <div>
      <h1>dog fact here.</h1>
      {cleanFact}
    </div>);
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />

