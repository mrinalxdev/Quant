"use client";

import { FormInputPost } from "@/types";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  label : string
}

const FormPost: FC<FormPostProps> = ({ submit, label }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-[40px] mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Your Name...."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content")}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Your thought and Explanation...."
      ></textarea>
      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}
      >
        <option disabled value="">
          Select tags
        </option>
        <option>Motivational</option>
        <option>Genuine</option>
        <option>Copied Thoughts 😂</option>
        <option>Others</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {label}
      </button>
    </form>
  );
};

export default FormPost;
