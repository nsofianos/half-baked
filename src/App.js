import Adjuster from "./components/Adjuster";
import RecipeDisplay from "./components/RecipeDisplay";
import Textarea from "./components/UI/Textarea";
import "./App.css";
import { useState } from "react";
import {
  Paper,
  Grid,
  Container,
  Box,
  Typography,
  TextField,
} from "@mui/material";

function App() {
  const [convertedRecipe, setConvertedRecipe] = useState("");
  const [adjuster, setAdjuster] = useState("divide");
  const [multiplier, setMultiplier] = useState(0.5);

  //divide/multiply toggle
  const adjusterHandler = (event, newAdjuster) => {
    if (newAdjuster !== null) setAdjuster(newAdjuster);
  };

  const multiplierChangeHandler = (event, newMultiplier) => {
    if (newMultiplier !== null) setMultiplier(newMultiplier);
  };

  const recipeChangeHandler = (event) => {
    setConvertedRecipe(convertRecipe(event.target.value));
  };

  const convertRecipe = (recipe) => {
    let convertedRecipe = "";
    for (let i = 0; i < recipe.length; i++) {
      parseInt(recipe.charAt(i))
        ? (convertedRecipe += parseInt(recipe.charAt(i)) * multiplier)
        : (convertedRecipe += recipe.charAt(i));
    }
    return convertedRecipe;
  };
  return (
    <>
      <div className="logo-container">
        <img src="/images/RiceCup-logo/vector/logo2.svg"></img>
      </div>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          p: 4,
          borderRadius: 4,
          mt: 30,
          mb: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Textarea
              className="recipe-input"
              placeholder="paste recipe here"
              onChange={recipeChangeHandler}
              rows="10"
              cols="45"
            />
            {/* <TextField
              id="pasted-recipe"
              variant="standard"
              placeholder="paste recipe here"
              onChange={recipeChangeHandler}
            /> */}
            <Adjuster
              currentAdjuster={adjuster}
              currentMultiplier={multiplier}
              onAdjusterChange={adjusterHandler}
              onMultiplierChange={multiplierChangeHandler}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
