import Adjuster from "./components/Adjuster";
import "./App.css";
import { useState } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
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
    <Container component="main" maxWidth="sm" sx={{ mt: 10, mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            alignItems: "center",
            p: 2,
            display: "flex",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", m: 2 }}>
            <RestaurantMenuIcon
              sx={{ mr: 1 }}
              fontSize="large"
              color="primary"
            />
            <Typography variant="h6" gutterBottom>
              Half Baked
            </Typography>
          </Box>
          <Adjuster
            currentAdjuster={adjuster}
            currentMultiplier={multiplier}
            onAdjusterChange={adjusterHandler}
            onMultiplierChange={multiplierChangeHandler}
          />
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={6}>
              <TextField
                id="pasted-recipe"
                multiline
                variant="standard"
                placeholder="paste recipe here"
                onChange={recipeChangeHandler}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="converted-recipe"
                placeholder="converted"
                multiline
                disabled
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                value={convertedRecipe}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
