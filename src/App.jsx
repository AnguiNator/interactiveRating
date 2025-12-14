import Card from "./components/Card"
import Thanks from "./components/Thanks";
import { useState } from "react";

function App() {


  const [rating, setRating] = useState(null);
  const [display, setDisplay] = useState(true);
  return (
    <>
      <Card rating={rating} setRating={setRating} display={display} setDisplay={setDisplay} />
      <Thanks rating={rating} display={display} />
    </>
  )
}

export default App
