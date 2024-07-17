import React from "react";
import { MenuData } from "../Data/Data";

const Menu = ({ title }) => {
  const Data = MenuData.filter((item) => item.category === title);

  return (
    <div className=" flex flex-col justify-center items-center w-full pt-36 px-5 h-full md:pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-center py-8 justify-center items-center">
        {Data.map(({ id, src, name, price }) => {
          return (
            <div
              key={id}
              className="flex flex-row border-b border-white py-5  md:w-96"
            >
              <img
                src={src}
                alt=""
                className="rounded-md w-36 md:w-44 h-32 object-cover mt-5"
              />

              <div className="flex flex-col items-start justify-start text-gray-800 mx-5 my-4 ">
                <h2 className="havana-font text-bold text-base md:text-lg font-bold capitalize py-2 text-four">
                  {name}
                </h2>
                <p className="font-bold">{price}</p>
              </div>
            </div>
          );
        })}
        {title === "Crêpes & Gaufres" || title === "Pancakes" ? (
          <div className="flex gap-2">
            <p className="havana-font font-bold text-four">
              Supplément Boule De Glace
            </p>
            <p className="font-bold">+ 150 da</p>
          </div>
        ) : title === "Jus Pressé" ? (
          <p className="havana-font font-bold text-four">
            (deux fruits au choix)
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
