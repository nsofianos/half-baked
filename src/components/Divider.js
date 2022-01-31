import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Divider() {
  return (
    <div className="divider">
      <ToggleButtonGroup>
        <ToggleButton variant="contained">Half</ToggleButton>
        <ToggleButton variant="contained">Third</ToggleButton>
        <ToggleButton variant="contained">Quarter</ToggleButton>
        <ToggleButton variant="contained">Eighth</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Divider;
