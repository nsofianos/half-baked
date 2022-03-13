import { Container } from "@mui/material";
import Button from "./UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "./DisplayRecipe.css";

const DisplayRecipe = (props) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        p: 4,
        borderRadius: 4,
        mt: 24,
        mb: 5,
      }}
    >
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
    </Container>
  );
};

export default DisplayRecipe;
