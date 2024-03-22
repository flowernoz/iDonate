import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyBooleanContext } from "../../context";
import "./style.css";
import logo from "../../assets/applogo.png";
import { data } from "../../static/links";

export default function Sidebar() {
  const { isToggled } = useContext(MyBooleanContext);
  return (
    <aside
      className="sidebar"
      style={
        ({ width: isToggled ? "60px" : "250px" })}
    >
      <div className="header">
        <h1 className="moniker">
          <img className="logo" src={logo} alt="logo" />
          {!isToggled && "iDonate"}
        </h1>
      </div>
      <div className="aside_body">
        {data.map((item, inx) => (
          <NavLink className="aside_link" to={item.link} key={inx}>
            <item.icon />
            {!isToggled && item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
