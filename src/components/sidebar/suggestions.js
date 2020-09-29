/* eslint-disable no-nested-ternary */
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
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
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default memo(Suggestions);

Suggestions.propTypes = {
  userId: PropTypes.string
};
