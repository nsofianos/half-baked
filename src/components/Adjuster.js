import "./Adjuster.css";
import Button from "@mui/material/Button";

function Adjuster() {
  return (
    <div className="adjuster">
      <Button variant="contained">Divide Recipe</Button>
      <Button variant="contained">Multiply recipe</Button>
    </div>
  );
}

export default Adjuster;
