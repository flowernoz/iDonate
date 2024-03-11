import {
  IconTriangleSquareCircle,
  IconLayoutBoardSplit,
  IconMessage,
  IconCashBanknote,
  IconArrowUpRight,
  IconCashBanknoteOff,
  IconReceiptDollar,
  IconNotebook,
  IconUserCircle,
} from "@tabler/icons-react";
import "./style.css";
import { useContext } from "react";
import { MyBooleanContext } from "../../context";
import logo from "../../assets/applogo.png";
import { NavLink } from "react-router-dom";
const data = [
  { label: "Boshqaruv paneli", icon: IconLayoutBoardSplit, link: "/" },
  {
    label: "Xabarlar paneli",
    icon: IconMessage,
    link: "/messages",
  },
  {
    label: "To'lovlar tarixi",
    icon: IconCashBanknote,
    link: "/payment-history",
  },
  { label: "Top donaterlar", icon: IconArrowUpRight, link: "/top-donators" },
  {
    label: "Pulni yechish",
    icon: IconCashBanknoteOff,
    link: "/withdraw-money",
  },
  { label: "Pul yig'ish", icon: IconReceiptDollar, link: "/collect-money" },
  { label: "Donat sahifasi", icon: IconNotebook, link: "/donat-page" },
  {
    label: "Vidjet sozlamalari",
    icon: IconTriangleSquareCircle,
    link: "/settings",
  },
  { label: "Profil", icon: IconUserCircle, link: "/profile" },
];

export default function Sidebar() {
  const { isToggled } = useContext(MyBooleanContext);
  return (
    <nav
      className="navbar"
      style={isToggled ? { width: "60px" } : { width: "250px" }}
    >
      <div className="header">
        <h1 className="code">
          <img className="logo" src={logo} alt="logo" />
          {!isToggled && "iDonate"}
        </h1>
      </div>
      <div className="navBody">
        {data.map((item, inx) => (
          <NavLink className="control" to={item.link} key={inx}>
            <item.icon />
            {!isToggled && item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
