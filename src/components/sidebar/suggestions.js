import React, { useState, useEffect, useReducer } from 'react';
import SuggestedProfile from './suggested-profile';
import { useAuthListener } from '../../hooks';
import { getSuggestedProfiles } from '../../services/firebase';

export default function Suggestions() {
  const { user } = useAuthListener();
  const [profiles, setProfiles] = useState([]);
  const [updated, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(user.uid);
      setProfiles(response);
    }
    suggestedProfiles();
  }, [updated]);

  return profiles.length > 0 ? (
    <div className="suggestions rounded flex flex-col">
      <div className="text-sm suggestions__header flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="suggestions__body mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            forceUpdate={forceUpdate}
          />
        ))}
      </div>
    </div>
  ) : null;
}
