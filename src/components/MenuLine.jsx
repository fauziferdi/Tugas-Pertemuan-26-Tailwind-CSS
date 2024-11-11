import React from "react";

const MenuLine = ({ judul, menuPlus }) => {
  return (
    <div className="mt-4 mb-2">
      <p className="inline bg-green-500 text-white py-2 px-4">{judul}</p>

      {menuPlus && (
        <div className="float-right">
          <a
            className="inline text-slate-600 hover:text-green-500 ms-2"
            href="#"
          >
            Founder Letter
          </a>
          <a
            className="inline text-slate-600 hover:text-green-500 ms-2"
            href="#"
          >
            Milestone
          </a>
        </div>
      )}
      <hr className="border-4 border-green-500 " />
    </div>
  );
};

export default MenuLine;
