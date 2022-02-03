import Adjuster from "./components/Adjuster";
import Divider from "./components/Divider";
import Ingredients from "./components/Ingredients";
import "./App.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Paper, Grid, Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <CssBaseline>
      <Container component="main" maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "50%",
            width: "50%",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <RestaurantMenuIcon fontSize="large" />
            </Grid>
            <Grid item xs={6}>
              <Adjuster />
            </Grid>
          </Grid>
          <Divider />
          <Ingredients />
        </Paper>
      </Container>
    </CssBaseline>
  );
}

export default App;
