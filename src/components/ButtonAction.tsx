import { PencilRuler, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/1" className="btn btn-primary mr-3">
      <PencilRuler /> Edit
      </Link>
      <button className="btn btn-error"> <Trash2 /> Delete</button>
    </div>
  );
};

export default ButtonAction;
