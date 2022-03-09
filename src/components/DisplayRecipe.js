import { Container } from "@mui/material";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DisplayRecipe = (props) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        p: 4,
        borderRadius: 4,
        mt: 24,
        mb: 5,
      }}
    >
      <Textarea
        disabled
        placeholder={props.convertedRecipe}
        className="recipe-input"
      ></Textarea>
      <Button
        value={"edit"}
        onClick={props.displayHandler}
        className="button convert-button"
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </Button>
    </Container>
  );
};

export default DisplayRecipe;
