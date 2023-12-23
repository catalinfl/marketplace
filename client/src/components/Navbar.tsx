import { useEffect, useState } from "react";
import { getResolution, isMobileHandle } from "../utils/navUtils";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export type Resolution = {
  width: number;
  height: number;
};

const Navbar = () => {

  const [resolution, setResolution] = useState<Resolution>({
    width: window.screen.width,
    height: window.screen.height,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      const { width, height } = getResolution();
      setResolution({ width, height });
    });

    window.addEventListener("resize", () => {
      const { width, height } = getResolution();
      setResolution({ width, height });
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setIsMobile(isMobileHandle(resolution));
  }, [resolution]);

  const variants = {
    open: { opacity: 1, x: 0, y: 0 },
    closed: { opacity: 0, x: 100, y: 0 },
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  };

  return (
      <div className="flex py-2 gap-2 
      max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto 
      bg-secondary border-[2px] border-neutral mt-1 rounded-lg">
        <div className="flex justify-start flex-[1] items-center">
          <p className="text-lg font-bold pl-5 cursor-pointer text-white">
            Testlogo
          </p>
        </div>
        <div className="flex flex-row flex-[3] justify-center items-center gap-2">
          <div className="flex items-center gap-2 p-2 w-full">
            <input
              spellCheck="false"
              type="text"
              placeholder="Search a product..."
              className="input input-bordered input-sm text-[1rem] font-thin bg-white rounded-lg w-full"
            />
            <CiSearch className="text-white font-bold bg-primary rounded-lg text-4xl cursor-pointer" />
          </div>
          {!isMobile ? 
            <div className="flex items-end gap-2 w-full justify-end pr-3">
              <button className="btn btn-primary text-white"> Sign in </button>
              <button className="btn btn-primary text-white"> About </button>
              <button className="btn btn-neutral"> Membership </button>
            </div>
           : 
            <div
              onClick={toggleHamburger}
              className="bg-primary p-2 text-2xl cursor-pointer text-white rounded-lg mr-3"
            >
              <GiHamburgerMenu />
            </div>
          }
        </div>
        {isMobile && isHamburgerOpen ? 
          <motion.div
            initial="closed"
            animate="open"
            transition={{ duration: 0.5 }}
            variants={variants}
            className="absolute bg-neutral top-16 right-4 sm:right-8 md:right-12 h-auto max-w-[10rem] rounded-md w-full p-2 justify-center flex flex-col items-center"
          >
            <p className="text-white text-center cursor-pointer hover:bg-primary transition-all duration-500 w-full">
              test
            </p>
            <p className="text-white text-center cursor-pointer hover:bg-primary transition-all duration-500 w-full">
              test
            </p>
          </motion.div>
         : null }
      </div>
  );
};

export default Navbar;