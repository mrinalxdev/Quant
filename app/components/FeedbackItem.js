import React from "react";

const FeedbackItem = ({ onOpen, title, description, votesCount }) => {
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onOpen();
      }}
      className="my-8 flex items-center gap-6"
    >
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-600 text-sm ">{description}</p>
      </div>
      <div>
        <button className="shadow-sm shadow-gray-400 border rounded-md px-3 py-2 flex items-center gap-4 text-gray-600">
          {" "}
          <span className="triangle"></span>
          {votesCount}
        </button>
      </div>
    </a>
  );
};

export default FeedbackItem;
