"use client";

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const EditPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-center">Edit Thought</h1>
      <FormPost submit={handleEditPost} label="Edit Thought" />
    </div>
  );
};

export default EditPage;
