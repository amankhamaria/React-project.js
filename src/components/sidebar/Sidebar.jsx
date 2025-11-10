import React from "react";
import { Link, NavLink } from "react-router";

import style from "./Sidebar.module.css"

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

function Sidebar() {
  return (
    <aside  className="aside-bar">
      <ul>
        <li className={style.navlinks}>
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive
                
            }
          >
            <AiFillHome size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/shorts"
            className={({ isActive }) =>
              isActive
                
            }
          >
            <SiYoutubeshorts/>

            <span>Shorts</span>
          </NavLink>
          <NavLink
            to="/subcriptions"
            className={({ isActive }) =>
              isActive
                
            }
          >
            <MdSubscriptions/>
            <span>Subscription</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;