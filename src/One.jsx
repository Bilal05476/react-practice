import { useNavigate } from "react-router-dom";

const One = () => {
  const history = useNavigate();
  const click = () => {
    history("/two");
  };
  return (
    <div>
      <h1>One</h1>
      
      <button onClick={() => click()}>Click Me</button>
    </div>
  );
};
export default One;
