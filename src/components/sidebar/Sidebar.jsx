import React from "react";
import { Link, NavLink } from "react-router";

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="w-[200px] px-2 h-full overflow-y-auto bg-neutral-950">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "transition-all duration-700 bg-neutral-200/10 flex gap-2 items-center p-2 text-sm"
                : "transition-all duration-700 bg-transparent flex gap-2 items-center p-2 text-sm"
            }
          >
            <AiFillHome size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/shorts"
            className={({ isActive }) =>
              isActive
                ? "transition-all duration-700 bg-neutral-200/10 flex gap-2 items-center p-2 text-sm"
                : "transition-all duration-700 bg-transparent flex gap-2 items-center p-2 text-sm"
            }
          >
            <SiYoutubeshorts size={20} />

            <span>Shorts</span>
          </NavLink>
          <NavLink
            to="/subcriptions"
            className={({ isActive }) =>
              isActive
                ? "transition-all duration-700 bg-neutral-200/10 flex gap-2 items-center p-2 text-sm border-b border-b-neutral-200/20"
                : "transition-all duration-700 bg-transparent flex gap-2 items-center p-2 text-sm border-b border-b-neutral-200/20"
            }
          >
            <MdSubscriptions size={20} />
            <span>Subscription</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;