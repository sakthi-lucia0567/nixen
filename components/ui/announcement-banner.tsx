"use client";

import Link from "next/link";
import React, { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-20 py-2.5 sm:px-14 "
      style={{ height: "64px" }}
    >
      <span className="flex-none rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
        New
      </span>
      <p className="flex-1 text-sm font-light text-gray-500 dark:text-gray-400">
        We have launched our product GMB Business Listing Data{" "}
        <Link
          href="#"
          className="inline-flex items-center gap-x-1 font-semibold text-blue-500"
        >
          Check it out <span aria-hidden="true">→</span>
        </Link>
      </p>
      <button
        data-collapse-toggle="banner"
        type="button"
        onClick={() => setIsVisible(false)}
        className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBanner;
