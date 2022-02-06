import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Multiplier() {
  return (
    <div className="multiplier">
      <ToggleButtonGroup sx={{ m: 2 }}>
        <ToggleButton value="1.5" variant="contained">
          1.5
        </ToggleButton>
        <ToggleButton value="2" variant="contained">
          2
        </ToggleButton>
        <ToggleButton value="3" variant="contained">
          3
        </ToggleButton>
        <ToggleButton value="4" variant="contained">
          4
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Multiplier;
