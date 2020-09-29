import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  getUserByUserId,
  updateUserFollowing,
  updateFollowedUserFollowers
} from '../../services/firebase';

export default function SuggestedProfile({ userDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    const [{ docId }] = await getUserByUserId(userId);
    await updateUserFollowing(docId, profileId, false);
    await updateFollowedUserFollowers(userDocId, userId, false);
  }

  return !followed ? (
    <div className="suggested-user flex flex-row items-center align-items justify-between">
      <div className="suggested-user__info flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div className="suggested-user__follow">
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};
