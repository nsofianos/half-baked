import "./Adjuster.css";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "./Divider";
import { Button } from "@mui/material";

function Adjuster() {
  const [adjuster, setAdjuster] = useState("divide");

  const handleAdjuster = (e, newAdjuster) => {
    setAdjuster(newAdjuster);
  };

  //determine which adjuster component to display (multiply/divide)
  const getAdjuster = (adjuster) => {
    return adjuster === "divide" ? <Divider /> : <Multiplier />;
  };

  return (
    <div className="adjuster">
      <ToggleButtonGroup
        color="primary"
        onChange={handleAdjuster}
        exclusive
        value={adjuster}
      >
        <ToggleButton value="divide" aria-label="divided">
          Divide
        </ToggleButton>
        <ToggleButton value="multiply" aria-label="multiplied">
          Multiply
        </ToggleButton>
      </ToggleButtonGroup>
      {getAdjuster(adjuster)}
    </div>
  );
}

export default Adjuster;
