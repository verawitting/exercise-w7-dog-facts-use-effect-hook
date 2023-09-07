import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [fact, setFact] = useState(null);
  const fetchDogFact = () => {
    fetch(dogApi)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          let cleanData = data.data;
          console.log(cleanData);
          console.log(cleanData[0].attributes);
          setFact(cleanData[0].attributes.body);
        }
      })
      .catch((error) => {
        console.error("Error fetching the dog fact:", error);
      });
  };
  const dogApi = "https://dogapi.dog/api/v2/facts";
  useEffect(() => {
    fetchDogFact();
  }, []);
  return (
    <div className="App">
      <DogFact fact={fact} />
      <button onClick={fetchDogFact}>Get Another Fact</button>
    </div>
  );
};
