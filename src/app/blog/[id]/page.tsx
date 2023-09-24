import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <>
      <div className="mb-8">
        <BackButton />
        <h2 className="text-2xl font-bold my-4 text-slate-100">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-400">Post Detailes of Post one</p>
    </>
  );
};

export default BlogDetailPage;
