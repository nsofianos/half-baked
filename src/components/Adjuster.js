import "./Adjuster.css";
import { useState } from "react";
import { ToggleButton, Box } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "./Divider";
import Multiplier from "./Multiplier";

function Adjuster() {
  const [adjuster, setAdjuster] = useState("divide");

  const handleAdjuster = (e, newAdjuster) => {
    if (newAdjuster !== null) setAdjuster(newAdjuster);
  };

  //determine which adjuster component to display (multiply/divide)
  const getAdjuster = (adjuster) => {
    return adjuster === "divide" ? <Divider /> : <Multiplier />;
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ToggleButtonGroup
        color="primary"
        onChange={handleAdjuster}
        exclusive
        value={adjuster}
        sx={{ m: 2 }}
      >
        <ToggleButton value="divide" aria-label="divided">
          Divide
        </ToggleButton>
        <ToggleButton value="multiply" aria-label="multiplied">
          Multiply
        </ToggleButton>
      </ToggleButtonGroup>
      {getAdjuster(adjuster)}
    </Box>
  );
}

export default Adjuster;
