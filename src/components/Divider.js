import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Divider(props) {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      sx={{ m: 2 }}
      onChange={props.onMultiplierChange}
      value={props.currentMultiplier}
    >
      <ToggleButton value={0.5} variant="contained">
        Half
      </ToggleButton>
      <ToggleButton value={0.333} variant="contained">
        Third
      </ToggleButton>
      <ToggleButton value={0.25} variant="contained">
        Quarter
      </ToggleButton>
      <ToggleButton value={0.125} variant="contained">
        Eighth
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Divider;
