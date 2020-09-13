import React, { useContext } from 'react';
import { FirebaseContext } from '../../context';
import { useAuthListener } from '../../hooks';
import { getUser } from '../../services/firebase';

export default function SuggestedProfile({ username, profileId, forceUpdate }) {
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  async function handleFollowUser() {
    const [{ docId }] = await getUser(user.uid);
    forceUpdate();

    return firebase
      .firestore()
      .collection('users')
      .doc(docId)
      .update({
        following: FieldValue.arrayUnion(profileId),
      });
  }

  return (
    <div className="suggested-user flex flex-row items-center align-items justify-between">
      <div className="suggested-user__info flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <p className="font-bold text-sm">{username}</p>
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
  );
}
