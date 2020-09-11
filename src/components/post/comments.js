import React, { useContext } from 'react';
import { ActionsContext } from '../../context';

export default function Comments() {
  const { comments } = useContext(ActionsContext);

  return (
    <div className="post__comments p-4 pt-1 pb-4">
      {comments.length >= 3 && (
        <p className="text-sm text-gray-base mb-1">
          View all {comments.length} comments
        </p>
      )}
      {comments.slice(0, 3).map((item) => (
        <p>
          <span className="mr-1 font-bold">@{item.user}</span>
          <span>{item.comment}</span>
        </p>
      ))}
      <p className="text-gray-base uppercase text-xs mt-2">5 hours ago</p>
    </div>
  );
}
