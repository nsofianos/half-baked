import "./Adjuster.css";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Adjuster() {
  return (
    <div className="adjuster">
      <ToggleButtonGroup>
        <ToggleButton value="left" aria-label="left aligned">
          Divide
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Multiply
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Adjuster;
