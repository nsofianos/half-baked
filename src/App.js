import Adjuster from "./components/Adjuster";
import Divider from "./components/Divider";
import Ingredients from "./components/Ingredients";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Adjuster />
      <Divider />
      <Ingredients />
    </div>
  );
}

export default App;
