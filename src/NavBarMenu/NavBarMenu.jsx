import React, { useState, useEffect } from "react";
import { menuLinks } from "../Data/Data";
import Menu from "../Menu/Menu";

const activeButton = "bg-four";
const activeColor = "bg-four/50";
const activetext = "text-white";
const activeBorder = "bg-third";

const NavBarMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [active, setActive] = useState(
    menuLinks.map((item, index) => index === 0)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuLinks.map((item, i) => i === index);
    setActive(newActive);
  };

  return (
    <>
      <div className="w-full overflow-x-scroll pt-20 fixed bg-gray-50">
        <ul className="flex flex-row  select-none py-3 px-5  ">
          {menuLinks.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex justify-center items-center w-48 rounded-lg cursor-pointer p-3 border mr-2  
                  ${active[id] ? activeBorder : ""}`}
                >
                  <p
                    className={` text-bold capitalize font-bold ${
                      active[id] ? activetext : "text-primary"
                    }`}
                  >
                    {" "}
                    {item.title}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <>
        <Menu title={menuLinks[activeTab].title} />
      </>
    </>
  );
};

export default NavBarMenu;
