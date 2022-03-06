import "./Textarea.css";

function Textarea(props) {
  const classes = "textarea " + props.className;
  return (
    <textarea
      className={classes}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></textarea>
  );
}

export default Textarea;
