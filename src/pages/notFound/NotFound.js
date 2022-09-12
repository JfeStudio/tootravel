import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/path/not-found.svg";

export default function NotFound() {
  return (
    <div className="mt-16 flex h-[55vh] items-center justify-center lg:h-[70vh]">
      <div className="container mx-auto">
        <Link className="" to="/">
          <img
            className="mx-auto w-full lg:max-w-md"
            src={error404}
            alt="NOT FOUND"
          />
        </Link>
      </div>
    </div>
  );
}
