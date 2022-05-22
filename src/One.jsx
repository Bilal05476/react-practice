import { useNavigate } from "react-router-dom";

const One = () => {
  const history = useNavigate();

  const click = (link) => {
    history(link);
  };
  return (
    <div>
      <h1>One</h1>
      <button onClick={() => click("/")}>Bedroom</button>
      <button onClick={() => click("/two")}>Kitchen</button>
    </div>
  );
};
export default One;
