import { TextField } from "@mui/material";
function Ingredients() {
  return (
    <div className="ingredients">
      <TextField
        id="outlined-basic"
        label="Recipe"
        multiline
        variant="standard"
        placeholder="paste recipe here"
      />
      <TextField
        id="outlined-basic"
        label="Converted"
        multiline
        disabled
        variant="standard"
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
}

export default Ingredients;
