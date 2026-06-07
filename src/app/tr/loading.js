import React from "react";
import { getDictionary } from "../../lib/i18n";

export default function TurkishLoading() {
  const dictionary = getDictionary("tr");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#121212] px-4 text-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
      <h2 className="mt-8 text-2xl font-bold text-white">
        {dictionary.loading.title}
      </h2>
      <p className="mt-2 text-[#ADB7BE]">
        {dictionary.loading.description}
      </p>
    </div>
  );
}
