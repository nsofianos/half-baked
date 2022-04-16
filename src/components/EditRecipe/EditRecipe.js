import Adjuster from "../../components/Adjuster";
import Textarea from "../../components/UI/Textarea";
import Button from "../../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faAnglesRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { Container, Box } from "@mui/material";
import "./EditRecipe.css";

function EditRecipe(props) {
  return (
    <div className="main-container">
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
          currentAdjuster={props.adjuster}
          currentMultiplier={props.multiplier}
          onAdjusterChange={props.adjusterHandler}
          onMultiplierChange={props.multiplierChangeHandler}
        />
      </Box>
      <Button
        value={"display"}
        onClick={props.convertRecipeHandler}
        className="button convert-button"
      >
        <FontAwesomeIcon
          className={props.loadingRecipe === "true" ? "icon fa-spin" : "icon"}
          icon={props.loadingRecipe === "true" ? faSpinner : faAnglesRight}
        />
      </Button>
    </div>
  );
}

export default EditRecipe;
