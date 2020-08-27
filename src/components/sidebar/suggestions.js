import React from 'react';
import SuggestedProfile from './suggested-profile';

export default function Suggestions() {
  return (
    <div className="suggestions rounded flex flex-col">
      <div className="text-sm suggestions__header flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
        <p className="font-bold text-black-light text-xs">See all</p>
      </div>
      <div className="suggestions__body mt-4 grid gap-5">
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
      </div>
    </div>
  );
}
