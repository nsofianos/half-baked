import "./Adjuster.css";
import { ToggleButton, Box } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "./Divider";
import Button from "./UI/Button";
import Multiplier from "./Multiplier";

function Adjuster(props) {
  //determine which adjuster component to display
  const getAdjuster = (adjuster, multiplier, multiplierChange) => {
    return adjuster === "divide" ? (
      <Divider
        currentMultiplier={multiplier}
        onMultiplierChange={multiplierChange}
      />
    ) : (
      <Multiplier
        currentMultiplier={multiplier}
        onMultiplierChange={multiplierChange}
      />
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="adjuster-button-group">
        <Button
          className={`adjuster-button ${
            props.currentAdjuster === "divide" ? "selected" : ""
          }`}
          value="divide"
          onClick={props.onAdjusterChange}
        >
          Divide
        </Button>
        <Button
          className={`adjuster-button ${
            props.currentAdjuster === "multiply" ? "selected" : ""
          }`}
          value="multiply"
          onClick={props.onAdjusterChange}
        >
          Multiply
        </Button>
      </div>
      <ToggleButtonGroup
        color="primary"
        onChange={props.onAdjusterChange}
        exclusive
        value={props.currentAdjuster}
        sx={{ m: 2 }}
      >
        {/* <ToggleButton value="divide" aria-label="divided">
          Divide
        </ToggleButton>
        <ToggleButton value="multiply" aria-label="multiplied">
          Multiply
        </ToggleButton> */}
      </ToggleButtonGroup>
      {getAdjuster(
        props.currentAdjuster,
        props.currentMultiplier,
        props.onMultiplierChange
      )}
    </Box>
  );
}

export default Adjuster;
