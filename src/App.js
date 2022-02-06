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
  const [currentRecipe, setCurrentRecipe] = useState("");
  const recipeChangeHandler = (event) => {
    setCurrentRecipe(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 10, mb: 5 }}>
      <CssBaseline>
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
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", m: 2 }}>
              <RestaurantMenuIcon sx={{ mr: 1 }} fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Half Baked
              </Typography>
            </Box>
            <Adjuster />
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
                  value={currentRecipe}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </CssBaseline>
    </Container>
  );
}

export default App;
