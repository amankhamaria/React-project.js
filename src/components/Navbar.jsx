import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Navbar(props) {
  console.log(props);
  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-3 flex justify-between items-center bg-neutral-950 z-10 border-b border-b-neutral-100/10">
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
        <div className="flex gap-1 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
            className="h-8"
          />
          <h1 className="font-semibold text-2xl">YouTube</h1>
        </div>
      </div>
    </header>
  );
}

export default Navbar;