import "./Adjuster.css";
import { Box } from "@mui/material";
import Divider from "./Divider";
import Multiplier from "./Multiplier";
import ButtonGroup from "./UI/ButtonGroup";

function Adjuster(props) {
  const adjusterButtons = [
    { label: "Divide", value: "divide" },
    {
      label: "Multiply",
      value: "multiply",
    },
  ];
  //determine which adjuster component to display
  const getAdjuster = (adjuster, multiplier, multiplierChange) => {
    return adjuster === "divide" ? (
      <Divider
        currentMultiplier={multiplier}
        onMultiplierChange={multiplierChange}
      />
    ) : (
      <Multiplier
        currentMultiplier={multiplier}
        onMultiplierChange={multiplierChange}
      />
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ButtonGroup
        className="adjuster-button-group"
        buttons={adjusterButtons}
        onClickHandler={props.onAdjusterChange}
      ></ButtonGroup>

      {getAdjuster(
        props.currentAdjuster,
        props.currentMultiplier,
        props.onMultiplierChange
      )}
    </Box>
  );
}

export default Adjuster;
