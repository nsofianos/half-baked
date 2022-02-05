import Adjuster from "./components/Adjuster";
import Divider from "./components/Divider";
import "./App.css";
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
            <Divider />
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Recipe"
                  multiline
                  variant="standard"
                  placeholder="paste recipe here"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Converted"
                  multiline
                  disabled
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
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
