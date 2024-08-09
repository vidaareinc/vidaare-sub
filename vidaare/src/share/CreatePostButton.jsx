import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function CreatePostButton() {
  return (
    <Link
      to="/createpost"
      className="fixed bottom-24 right-8 p-4 bg-transparent text-white rounded-lg w-48 h-18 flex items-center justify-center shadow-xl text-2xl backdrop-blur-lg"
    >
      <PencilSquareIcon className="w-6 h-6" /> &nbsp; Create Post
    </Link>
  );
}
