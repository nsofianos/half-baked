import Adjuster from "./Adjuster";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import "./EditRecipe.css";

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
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.inputType === "link" ? (
          <div className="recipe-input-container">
            <Button
              value="manual"
              className="change-input-type"
              onClick={props.inputTypeHandler}
            >
              <FontAwesomeIcon
                icon={faKeyboard}
                size="1x"
                className="icon-md"
              />
            </Button>
            <Textarea
              className="recipe-input"
              placeholder="paste link to recipe"
              onChange={props.inputChangeHandler}
            />
          </div>
        ) : (
          <div className="recipe-input-container">
            <Button
              value="link"
              className="change-input-type"
              onClick={props.inputTypeHandler}
            >
              <FontAwesomeIcon icon={faLink} size="1x" className="icon-md" />
            </Button>
            <Textarea
              className="recipe-input"
              placeholder="paste recipe here"
              onChange={props.inputChangeHandler}
            />
          </div>
        )}

        <Adjuster
          currentAdjuster={adjuster}
          currentMultiplier={props.multiplier}
          onAdjusterChange={adjusterHandler}
          onMultiplierChange={props.multiplierChangeHandler}
        />
      </Box>
      <Button
        value={"display"}
        onClick={(e) => {
          props.convertRecipeHandler(e);
          props.displayHandler(e);
        }}
        className="button convert-button"
      >
        <FontAwesomeIcon className="icon" icon={faAnglesRight} />
      </Button>
    </Container>
  );
}

export default EditRecipe;
