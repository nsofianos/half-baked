import Adjuster from "./Adjuster";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Box } from "@mui/material";
import { useState } from "react";

function EditRecipe(props) {
  const [adjuster, setAdjuster] = useState("divide");

  //divide/multiply toggle
  const adjusterHandler = (event) => {
    let newAdjuster = event.target.value;
    if (newAdjuster !== null) setAdjuster(newAdjuster);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        p: 4,
        borderRadius: 4,
        mt: 24,
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Textarea
            className="recipe-input"
            placeholder="paste recipe here"
            onChange={props.recipeChangeHandler}
          />
          <Adjuster
            currentAdjuster={adjuster}
            currentMultiplier={props.multiplier}
            onAdjusterChange={adjusterHandler}
            onMultiplierChange={props.multiplierChangeHandler}
          />
        </Box>
      </Box>
      <Button
        value={"display"}
        onClick={props.displayHandler}
        className="button convert-button"
      >
        OK
        <FontAwesomeIcon
          className="arrowIconOk"
          icon={faArrowRight}
          size="1x"
        />
      </Button>
    </Container>
  );
}

export default EditRecipe;
