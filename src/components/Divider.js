import ButtonGroup from "./UI/ButtonGroup";
import { dividerValues } from "../data/multiplierData";

function Divider(props) {
  return (
    <ButtonGroup
      className="divider-button-group"
      onClickHandler={props.onMultiplierChange}
      buttons={dividerValues}
    ></ButtonGroup>
  );
}

export default Divider;
