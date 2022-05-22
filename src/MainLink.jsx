import { NavLink } from "react-router-dom";

const MainLink = ({ name, to }) => {
  return <NavLink to={`${to}`}>{name}</NavLink>;
};

export default MainLink;
