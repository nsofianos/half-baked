import Adjuster from "./components/Adjuster";
import Divider from "./components/Divider";
import Ingredients from "./components/Ingredients";
import "./App.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <Paper elevation={3} className="app-container">
      <RestaurantMenuIcon fontSize="large" />
      <Adjuster />
      <Divider />
      <Ingredients />
    </Paper>
  );
}

export default App;
