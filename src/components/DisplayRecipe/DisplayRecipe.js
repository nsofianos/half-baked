import { Container } from "@mui/material";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "./DisplayRecipe.css";

const DisplayRecipe = (props) => {
  return (
    <div className="recipe-display-container">
      <div className="recipe-display">{props.convertedRecipe}</div>
      <Button
        value={"edit"}
        onClick={props.displayHandler}
        className="button convert-button"
      >
        <FontAwesomeIcon
          icon={faAnglesLeft}
          size="2x"
          className="icon arrowIconBack"
        />
      </Button>
    </div>
  );
};

export default DisplayRecipe;
