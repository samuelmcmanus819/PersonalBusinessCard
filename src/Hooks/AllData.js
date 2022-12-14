import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/MyWebsite.png";

// works small images
import workSmall1 from "../assets/images/work_images/small/MyWebsiteSmall.png";



import img1 from "../assets/images/slider/brand-1.png";

//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Web Design",
      title: "My Business Card",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "Myself",
      langages: "ReactJS",
      link: "",
      linkText: "",
      description:
        "The site that you're looking at! This is a site that I built using ReactJS, and it's all hosted on Web3. It's the first site that I've obtained authorization to showcase here.",
    }
  ];
  const [data, setData] = useState(workItems);

  // Menu items for Homepage
  const menuItem = [
    {
      id: "01",
      name: "About",
      link: "about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Works",
      link: "works",
      icon: <FiCodesandbox />,
    },
    {
      id: "03",
      name: "Contact",
      link: "contact",
      icon: <RiContactsBookLine />,
    },
  ];


  // Slider image for Clients
  const sliderImg = [
    img1
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: icon5,
      title: "Web Development",
      des: "I am an experienced web developer, working primarily with ReactJS. I work tirelessly to make professional and elegant sites.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "2",
      icon: icon,
      title: "Smart Contract Development",
      des: "With experience developing smart contracts on Terra and Juno, I can make your next decentralized project incredible.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "3",
      icon: icon1,
      title: "Cloud Technology",
      des: "I have extensive experience utilizing cloud platforms such as AWS and Cloudmos to deploy infrastructure.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "4",
      icon: icon4,
      title: "Security",
      des: "I'm highly experienced in security, taking a risk-based approach to each project I work on to secure clients' assets.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    }
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    menuItem,
    NavLink,
    experienceArray,
    sliderImg,
  };
};

export default AllData;
