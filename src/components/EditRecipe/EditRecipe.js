import Adjuster from "../Adjuster/Adjuster";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faAnglesRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import "./EditRecipe.css";

function EditRecipe(props) {
  return (
    <div className="main-container">
      <div className="edit-container">
        {props.inputType === "link" ? (
          // link input selected
          <div className="recipe-input-container">
            <Button
              value="manual"
              className="change-input-type-button"
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
          // manual input selected
          <div className="recipe-input-container">
            <Button
              value="link"
              className="change-input-type-button"
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
      </div>

      {/* display recipe button */}
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
