import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { multiplierValues } from "../data/multiplierData";

function Multiplier(props) {
  return (
    <div className="multiplier">
      <ToggleButtonGroup
        color="primary"
        exclusive
        sx={{ m: 2 }}
        onChange={props.onMultiplierChange}
        value={props.currentMultiplier}
      >
        <ToggleButton value={1.5} variant="contained">
          1.5
        </ToggleButton>
        <ToggleButton value={2} variant="contained">
          2
        </ToggleButton>
        <ToggleButton value={3} variant="contained">
          3
        </ToggleButton>
        <ToggleButton value={4} variant="contained">
          4
        </ToggleButton>
        <ToggleButton value={5} variant="contained">
          5
        </ToggleButton>
        <ToggleButton value={6} variant="contained">
          6
        </ToggleButton>
        <ToggleButton value={7} variant="contained">
          7
        </ToggleButton>
        <ToggleButton value={8} variant="contained">
          8
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Multiplier;
