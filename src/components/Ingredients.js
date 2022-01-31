import { TextField } from "@mui/material";
function Ingredients() {
  return (
    <div className="ingredients">
      <TextField
        id="outlined-basic"
        label="Recipe"
        multiline
        variant="outlined"
        placeholder="paste recipe here"
      />
      <TextField
        id="outlined-basic"
        label="Converted"
        multiline
        variant="outlined"
      />
    </div>
  );
}

export default Ingredients;
