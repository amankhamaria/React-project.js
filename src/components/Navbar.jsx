import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";
function Navbar(props) {
  console.log(props);

  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

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

      <form
        className="hidden md:flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({
            pathname: "results",
            search: `?search_query=${inputValue}`,
          });
        }}
      >
        <div className="relative">
          <input
            required
            className="max-w-md w-[550px] outline-none border border-neutral-200/30 rounded-full rounded-r-none h-10 px-4 focus:border-neutral-200 border-r-0 placeholder:text-neutral-200/20"
            placeholder="Search.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {inputValue && (
            <button
              type="button"
              className="absolute top-[50%] right-1 translate-y-[-50%] cursor-pointer"
              onClick={() => {
                console.log("hg");
                setInputValue("");
              }}
            >
              <MdClose size={20} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-neutral-800 rounded-full rounded-l-none px-6 h-10 border border-neutral-200/30"
        >
          <FaMagnifyingGlass size={20} />
        </button>
      </form>

      <div>
        <button className="rounded-full px-8 py-1.5 border text-nowrap border-neutral-200/30">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Navbar;