"use client";
import Link from "next/link";
import React, {useState} from "react";
import { HiHome, HiOutlineOfficeBuilding, HiMenuAlt1 } from "react-icons/hi";

const MySidebar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="w-fit h-screen p-2">
      <aside>
        <div className="flex gap-3 justify-start items-center hover:bg-slate-300 p-3 rounded" role="button" onClick={() => setToggle(!toggle)}>
          <HiMenuAlt1 />
          <label className={`${toggle ? 'hidden' : 'block'}`} role="button">Menu</label>
        </div>
        <Link href={'/'} className="flex gap-3 justify-start items-center hover:bg-slate-300 p-3 rounded" role="button">
          <HiHome />
          <label className={`${toggle ? 'hidden' : 'block'}`} role="button">Dashboard</label>
        </Link>
        <Link href={'/gedung'} className="flex gap-3 justify-start items-center hover:bg-slate-300 p-3 rounded" role="button">
          <HiOutlineOfficeBuilding />
          <label className={`${toggle ? 'hidden' : 'block'}`} role="button">Gedung</label>
        </Link>
      </aside>
    </div>
  );
};

export default MySidebar;
