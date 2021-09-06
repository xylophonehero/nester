import { useHistory } from "react-router-dom";

const ReactButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/test");
  }

  return (
    <button type="button" onClick={handleClick}>
      To test page React Router
    </button>
  );
}

export default ReactButton
