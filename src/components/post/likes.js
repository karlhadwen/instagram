import React, { useContext } from 'react';
import { ActionsContext } from '../../context';

export default function Likes() {
  const { likes: likesTotal } = useContext(ActionsContext);

  return (
    <div className="post__likes p-4 py-0">
      <p className="font-bold">
        {likesTotal === 1 ? `${likesTotal} like` : `${likesTotal} likes`}
      </p>
    </div>
  );
}
