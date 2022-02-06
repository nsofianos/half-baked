import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Divider() {
  return (
    <ToggleButtonGroup sx={{ m: 2 }}>
      <ToggleButton value="half" variant="contained">
        Half
      </ToggleButton>
      <ToggleButton value="third" variant="contained">
        Third
      </ToggleButton>
      <ToggleButton value="quarter" variant="contained">
        Quarter
      </ToggleButton>
      <ToggleButton value="eighth" variant="contained">
        Eighth
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Divider;
