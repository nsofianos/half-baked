import "./Adjuster.css";
import Divider from "./Divider";
import Multiplier from "./Multiplier";
import ButtonGroup from "./UI/ButtonGroup";

function Adjuster(props) {
  const adjusterButtons = [
    { label: "divide", value: "divide" },
    {
      label: "multiply",
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
    <div className="adjuster-container">
      <p>i want to..</p>
      {/* divide/multiply */}
      <ButtonGroup
        className="adjuster-button-group"
        buttons={adjusterButtons}
        onClickHandler={props.onAdjusterChange}
      ></ButtonGroup>

      <p>by..</p>
      {/* multiplier */}
      {getAdjuster(
        props.currentAdjuster,
        props.currentMultiplier,
        props.onMultiplierChange
      )}
    </div>
  );
}

export default Adjuster;
