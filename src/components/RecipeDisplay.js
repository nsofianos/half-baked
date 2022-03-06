import { Box, TextField } from "@mui/material";

const RecipeDisplay = (props) => {
  return (
    <Box sx={{ backgroundColor: "#7D5A50", borderRadius: 4 }}>
      <TextField
        id="converted-recipe"
        placeholder="converted"
        multiline
        disabled
        variant="standard"
        InputProps={{
          readOnly: true,
        }}
        value={props.currentRecipe}
      />
    </Box>
  );
};

export default RecipeDisplay;
