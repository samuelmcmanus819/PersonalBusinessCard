import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import UseData from "../../Hooks/UseData";
import logo from "../../assets/images/logo/logo.png";
import Header from "../../Share/Header";
import HomeCard from "../../Share/HomeCard";
import PageTitle from "../../Share/PageTitle";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleTheme, check } = UseData();
  const handle = (e) => {
    handleTheme(e);
  };
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <div
          className="container   w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]"
          data-aos="fade"
        >
          <div className="w-full flex justify-between  px-4">
            {/* website logo */}
            <Link to="/">
              <img className="h-[75px] lg:h-[75px]" src={logo} alt="logo" />
            </Link>
            <div className="flex items-center">
              {/* dark and light mode button */}

              {!check ? (
                <span
                  onClick={() => handle("dark")}
                  className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiMoon className=" text-3xl " />
                </span>
              ) : (
                <span
                  onClick={() => handle("light")}
                  className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiSun className="text-white text-3xl" />
                </span>
              )}

              {/* mobile menu button */}

              {!menuOpen ? (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden   bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3 "
                >
                  <AiOutlineMenu />
                </span>
              ) : (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                >
                  <AiOutlineClose />
                </span>
              )}
            </div>
          </div>
        </div>
        <nav className={`${menuOpen ? "block lg:hidden" : "hidden"}`}>
          {/* mobile menu items */}
          <ul
            className={`${
              menuOpen
                ? "block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
                : "flex my-12 "
            }`}
          >
            {/* mobile dark and light mode button */}

            {!check ? (
              <span
                onClick={() => handle("dark")}
                className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiMoon className=" text-3xl " />
              </span>
            ) : (
              <span
                onClick={() => handle("light")}
                className="bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiSun className="text-white text-3xl" />
              </span>
            )}
          </ul>
        </nav>
        <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            {/* profile sidebar */}
            <HomeCard />
          </div>
          <div className="col-span-12 lg:col-span-8  ">
            {/* header  */}

            <Header />
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
