import React, { useContext } from 'react';
import { formatDistance } from 'date-fns';
import { ActionsContext } from '../../context';

export default function Comments({ posted }) {
  const { comments } = useContext(ActionsContext);

  return (
    <div className="post__comments p-4 pt-1 pb-4">
      {comments.length >= 3 && (
        <p className="text-sm text-gray-base mb-1 cursor-pointer">
          View all {comments.length} comments
        </p>
      )}
      {comments.slice(0, 3).map((item) => (
        <p key={`${item.comment}-${item.displayName}`}>
          <span className="mr-1 font-bold">@{item.displayName}</span>
          <span>{item.comment}</span>
        </p>
      ))}
      <p className="text-gray-base uppercase text-xs mt-2">
        {formatDistance(posted, new Date())} ago
      </p>
    </div>
  );
}
