"use client";
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackModal from "./components/FeedbackModal";
import Button from "./components/Button";

export default function Home() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);

  function openFeedbackModal() {
    setShowFeedbackModal(true);
  }

  function openFeedbackPopupItem(feedback) {
    setShowFeedbackPopupItem(feedback);
  }
  const feedbacks = [
    {
      title: "Nice Thought Mrinal",
      description:
        "Nice thought given by Mrinal for everyone in the comment section for this is the",
      votesCount: 80,
    },
    {
      title: "Nice one Mrinal",
      description:
        "Nice thought given by Mrinal for everyone in the comment section for this is the",
      votesCount: 30,
    },
    {
      title: "This is awesome thought",
      description:
        "Nice thought given by Mrinal for everyone in the comment section for this is the",
      votesCount: 90,
    },
  ];

  return (
    <main className="bg-white md:max-w-[900px] mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-8">
        <h1 className="font-bold text-xl">Mrinal Pramanick</h1>
        <p className="text-opacity-90 text-slate-700">
          So today's thought of the day is "Give yourself some time so that you
          can work on yourself"{" "}
        </p>
      </div>
      <div className="bg-gray-100 px-8 py-4 text-right flex border-b-4 ">
        <div className="grow"></div>
        <div>
          <Button onClick={openFeedbackModal} primary>
            Make a suggestions
          </Button>
        </div>
      </div>
      <div className="px-8">
        {feedbacks.map((feedback) => (
          <FeedbackItem
            {...feedback}
            onOpen={() => openFeedbackPopupItem(feedback)}
          />
        ))}
      </div>
      {showFeedbackModal && <FeedbackModal setShow={setShowFeedbackModal} />}
      {showFeedbackPopupItem && (
        <div>
          opened feedback : {showFeedbackPopupItem.title}
        </div>
      )}
    </main>
  );
}
