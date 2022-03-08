import ButtonGroup from "./UI/ButtonGroup";
import { multiplierValues } from "../data/multiplierData";

function Multiplier(props) {
  return (
    <ButtonGroup
      buttons={multiplierValues}
      buttonClass={"multiplier-button"}
      className="multiplier-button-group"
      onClickHandler={props.onMultiplierChange}
    ></ButtonGroup>
  );
}

export default Multiplier;
