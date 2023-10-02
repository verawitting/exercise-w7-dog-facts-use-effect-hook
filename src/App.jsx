// Import required  hooks
import React, { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState();
  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts";
  // Hint: Create a function to fetch the dog fact
  useEffect(() => {
    const fetchDogFact = () => {
      fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setDogFact(data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch", error)
      })
    }
    fetchDogFact()
  },[])

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  

  return (
    <div className="App">
      {dogFact && <DogFact fact={dogFact}/>}
    </div>
  );
};
