import Button from "@mui/material/Button";

function Divider() {
  return (
    <div className="divider">
      <Button variant="contained">Half</Button>
      <Button variant="contained">Third</Button>
      <Button variant="contained">Quarter</Button>
      <Button variant="contained">Eighth</Button>
    </div>
  );
}

export default Divider;
