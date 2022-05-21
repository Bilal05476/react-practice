import { NavLink } from "react-router-dom";

const MainLink = (props) => {
  return <NavLink to="/two">{props.name}</NavLink>;
};

export default MainLink;
