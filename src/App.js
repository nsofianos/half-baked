import "./App.css";
import DisplayRecipe from "./components/DisplayRecipe/DisplayRecipe";
import { useState } from "react";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import { convertRecipe, parseIngredients } from "./helpers/helpers";

function App() {
  const [multiplier, setMultiplier] = useState(2);
  const [currentInput, setCurrentInput] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState("edit");
  const [inputType, setInputType] = useState("link");
  const [convertedRecipe, setConvertedRecipe] = useState("");
  const [loadingRecipe, setLoadingRecipe] = useState("false");
  const [adjuster, setAdjuster] = useState("divide");

  //divide/multiply toggle
  const adjusterHandler = (event) => {
    let newAdjuster = event.target.value;
    if (newAdjuster !== null) setAdjuster(newAdjuster);
  };

  //keep track of text input
  const inputChangeHandler = (event) => {
    setCurrentInput(event.target.value);
  };

  //edit/display toggle
  const displayHandler = (event) => {
    setCurrentDisplay(event.currentTarget.value);
  };

  //link/manual input toggle
  const inputTypeHandler = (event) => {
    setCurrentInput("");
    setInputType(event.currentTarget.value);
    setLoadingRecipe("false");
  };

  //sets the multiplier
  const multiplierChangeHandler = (event) => {
    let multiplier = event.target.value;
    if (multiplier !== null) setMultiplier(multiplier);
  };

  //check input type, create loading effect, convert recipe, change display
  const convertRecipeHandler = (event) => {
    setLoadingRecipe("true");
    if (inputType === "link") {
      getRecipe(currentInput).then((res) => {
        return (
          setConvertedRecipe(res),
          setLoadingRecipe("false"),
          setCurrentDisplay("display"),
          setMultiplier(2),
          setAdjuster("divide")
        );
      });
    } else {
      setTimeout(() => {
        setConvertedRecipe(convertRecipe(currentInput, adjuster, multiplier));
        setLoadingRecipe("false");
        setCurrentDisplay("display");
        setMultiplier(2);
        setAdjuster("divide");
      }, 2000);
    }
  };

  //determine which display mode to render
  const getDisplay = (currentDisplay) => {
    if (currentDisplay === "edit")
      return (
        <EditRecipe
          inputChangeHandler={inputChangeHandler}
          convertRecipeHandler={convertRecipeHandler}
          displayHandler={displayHandler}
          multiplier={multiplier}
          multiplierChangeHandler={multiplierChangeHandler}
          inputType={inputType}
          inputTypeHandler={inputTypeHandler}
          loadingRecipe={loadingRecipe}
          adjuster={adjuster}
          adjusterHandler={adjusterHandler}
          currentInput={currentInput}
        />
      );
    else
      return (
        <DisplayRecipe
          convertedRecipe={convertedRecipe}
          displayHandler={displayHandler}
        />
      );
  };

  //make api call, then convert
  const getRecipe = (link) => {
    return fetch(
      `https://api.spoonacular.com/recipes/extract?apiKey=60784736b42f4252a78b0d93536a96ca&url=${link}`
    )
      .then((res) => res.json())
      .then((data) =>
        convertRecipe(
          parseIngredients(data.extendedIngredients),
          adjuster,
          multiplier
        )
      );
  };

  return (
    <>
      <div className="logo-container">
        <img alt="logo" src="/images/logo/darkdefault-monochrome.svg"></img>
      </div>
      {getDisplay(currentDisplay)}
    </>
  );
}

export default App;
