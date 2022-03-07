import "./ButtonGroup.css";

function ButtonGroup(props) {
  const classes = "button-group " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default ButtonGroup;
