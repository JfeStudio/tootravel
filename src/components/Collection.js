import React from "react";

export default function Collection() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:gap-6">
      <span className="btn-gradient cursor-pointer rounded-full border p-3 text-sm text-slate-50 lg:text-xs">
        All
      </span>
      <span className="cursor-pointer rounded-full border border-slate-400 bg-transparent py-3 px-4 text-sm text-slate-400 lg:text-xs">
        Trending
      </span>
      <span className="cursor-pointer rounded-full border border-slate-400 bg-transparent py-3 px-4 text-sm text-slate-400 lg:text-xs">
        Popular
      </span>
      <span className="cursor-pointer rounded-full border border-slate-400 bg-transparent py-3 px-4 text-sm text-slate-400 lg:text-xs">
        Features
      </span>
      <span className="cursor-pointer rounded-full border border-slate-400 bg-transparent py-3 px-4 text-sm text-slate-400 lg:text-xs">
        Recommend
      </span>
      <span className="cursor-pointer rounded-full border border-slate-400 bg-transparent py-3 px-4 text-sm text-slate-400 lg:text-xs">
        Tour packages
      </span>
    </div>
  );
}
