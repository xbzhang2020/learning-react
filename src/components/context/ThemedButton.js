import { ThemeContext } from "./context";

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
          style={{ background: context.background, color: context.foreground }}
          onClick={props.changeTheme}
        >
          {props.content}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;
