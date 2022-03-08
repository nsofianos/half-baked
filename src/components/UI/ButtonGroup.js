import "./ButtonGroup.css";
import Button from "./Button";
import { useState } from "react";

function ButtonGroup(props) {
  const [clickedId, setClickedId] = useState(-1);
  const classes = "button-group " + props.className;

  const handleClick = (event, id) => {
    props.onClickHandler(event);
    setClickedId(id);
  };
  return (
    <div className={classes}>
      {props.buttons.map((button, i) => (
        <Button
          key={i}
          className={clickedId === i ? "button selected" : "button"}
          onClick={(event) => handleClick(event, i)}
          value={button.value}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}

export default ButtonGroup;
