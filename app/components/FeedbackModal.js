"use state";
import React from "react";
import Button from "./Button";

const FeedbackModal = ({ setShow }) => {
  return (
    <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:items-center">
      <button onClick={() => setShow(false)} className="fixed hidden md:block top-2 md:top-4 right-4 md:text-white text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="w-full">
        <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden">
          <div className="relative">
            <button className="absolute top-4 left-5 md:hidden" onClick={() => setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            </button>
            <h2 className="p-4 text-center border-b-4">Make Suggestions</h2>
          </div>
          <form className="p-9">
            <label className="block mt-4 mb-1">Title</label>
            <input
              className="w-full border p-2 rounded-lg"
              type="text"
              placeholder="A short descriptive title"
            />
            <label className="block mt-4 mb-1">Details</label>
            <textarea
              className="w-full border p-2 rounded-lg"
              placeholder="A short description "
            ></textarea>
            <div className="flex gap-3 mt-2 justify-end">
              <Button>Attach Files</Button>
              <Button primary>Create Posts</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
