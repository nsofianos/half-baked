import Button from "./UI/Button";
import ButtonGroup from "./UI/ButtonGroup";
import { dividerValues } from "../data/multiplierData";

function Divider(props) {
  return (
    <ButtonGroup
      onClickHandler={props.onMultiplierChange}
      // value={props.currentMultiplier}
      buttonValues={dividerValues}
    >
      <Button value={0.5} variant="contained">
        Half
      </Button>
      <Button value={0.333} variant="contained">
        Third
      </Button>
      <Button value={0.25} variant="contained">
        Quarter
      </Button>
      <Button value={0.125} variant="contained">
        Eighth
      </Button>
    </ButtonGroup>
  );
}

export default Divider;
