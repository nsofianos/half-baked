import Adjuster from "./components/Adjuster";
import Divider from "./components/Divider";
import Ingredients from "./components/Ingredients";
import "./App.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";

function App() {
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
            <Box sx={{ display: "flex" }}>
              <RestaurantMenuIcon fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Half Baked
              </Typography>
            </Box>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={6}>
                <Adjuster />
              </Grid>
              <Grid item xs={6}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Ingredients />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </CssBaseline>
    </Container>
  );
}

export default App;
