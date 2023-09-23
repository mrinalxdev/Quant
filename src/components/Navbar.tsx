import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container rounded-xl">
        <div className="flex-1">
          <Link href='/' className="text-2xl font-bold">Thoughts</Link>
        </div>
        <div className="flex-none">
          <Link href='/create'>
          <button className="btn border-2 border-white btn-ghost font-mono">
            Create Thought
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
