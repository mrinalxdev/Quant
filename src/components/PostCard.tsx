import Link from "next/link";
import React from "react";

const PostCard = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl border-2">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link
              href="/blog/1"
              className="ease-in-out rounded-xl duration-150 hover:bg-lime-500 hover:text-black px-2 py-2 border-1"
            >
              Read Full
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
