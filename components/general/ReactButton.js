import { useHistory } from "react-router-dom";

const ReactButton = ({page}) => {
  let history = useHistory();

  function handleClick() {
    history.push("/" + page);
  }

  return (
    <button type="button" onClick={handleClick}>
      To {page} page - React Router
    </button>
  );
}

export default ReactButton
