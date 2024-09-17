import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear(); //
  return (
    <div>
      <div className="px-4">
        <div className="flex items-center  rounded-md justify-between p-4 px-6 bg-green-400">
          <h1 className="text-xl font-bold">
            Qu'attends-tu pour te demarquez{" "}
          </h1>
          <a href="mailto:relsign77@gmail.com" className="text-sm font-bold">
            Discutonts
          </a>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-center justify-between px-8">
          <NavLink>Rel 10sign</NavLink>
          <div className="">
            <p>Coding and design by Fawase DOHOU </p>
            <p>© {currentYear}. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
