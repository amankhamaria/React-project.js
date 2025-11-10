import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Navbar(props) {
  console.log(props);
  return (
    <header className="h-16 flex justify-between items-center bg-neutral-800 text-neutral-100">
      <div className="flex gap-2">
        <button
          className="block md:hidden hover:cursor-pointer"
          onClick={props.onMenuBtnClick}
        >
          {props.isSidebarOpen ? (
            <MdClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/960px-YouTube_2024.svg.png"
          className="w-32"
        />
      </div>
    </header>
  );
}

export default Navbar;