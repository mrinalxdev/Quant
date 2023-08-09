import React from "react";

const FeedbackItem = () => {
  return (
    <div className="my-8 flex items-center gap-6">
      <div>
        <h2 className="font-bold">Nice thought Mrinal !</h2>
        <p className="text-gray-600 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nesciunt voluptatibus debitis ea corporis exercitationem voluptatum
          nemo excepturi totam error.
        </p>
      </div>
      <div>
        <button className="shadow-sm shadow-gray-400 border rounded-md px-3 py-2 flex items-center gap-4 text-gray-600">
          {" "}
          <span className="triangle"></span>20
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
