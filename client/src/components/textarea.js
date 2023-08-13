import "../styles/textarea.scss";
export default function Textarea(props) {
  return (
    <textarea
      //   id="about"
      //   name="about"
      //   rows={3}
      className="textarea"
      disabled={props.disabled}
      defaultValue={""}
    />
  );
}
