import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const changeSiderBar = () => setActive(!active);

  return (
    <div className="max-w-[1170px] flex items-end justify-between mx-auto py-16 gap-1 lg:flex-col md:pt-6">
      <div className="flex w-full max-w-[716px] justify-between gap-2">
        <img
          src="src/assets/logo.svg"
          alt="Blog"
        />

        <div className="md:hidden">
          <Navbar />
        </div>

        <div className="hidden md:flex">
          {!active ? (
            <img
              src="src/assets/Menu.svg"
              alt="Menu"
              onClick={changeSiderBar}
              className="h-8 w-8 hover:font-bold "
            />
          ) : (
            <div className="bg-purple-900 fixed h-full w-full pt-6 top-0 left-1">
              <img
                src="src/assets/Close.svg"
                alt="Fechar"
                onClick={changeSiderBar}
                className="h-8 w-8 fixed right-1 mr-4 hover:font-bold hover:bg-red-700"
              />
              <Navbar />
            </div>
          )}
        </div>
      </div>

      <form className="flex  lg:max-w-[500px] lg:w-full lg:mx-auto mt-3 ">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-purple-900 py-3 px-6 rounded-l text-sm text-white outline-none flex lg:w-full "
        />
        <button type="submit">
          <img
            src="src/assets/search.svg"
            alt="Seach"
            sizes="24"
            className="px-6 py-[10px] bg-purple-100 rounded-r hover:opacity-95 transition-opacity min-h[44px] min-w-[72px] "
          />
        </button>
      </form>
    </div>
  );
};

export default Header;
