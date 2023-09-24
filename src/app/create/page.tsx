"use client";

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-center">Add New Thought</h1>
      <FormPost submit={handleCreatePost} label="Create New Thought" />
    </div>
  );
};

export default CreatePage;
