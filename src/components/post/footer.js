import React, { useContext } from 'react';
import { ActionsContext } from '../../context';

export default function Footer({ caption }) {
  const { username } = useContext(ActionsContext);

  return (
    <div className="post__footer p-4 pt-2 pb-0">
      <span className="mr-1 font-bold">@{username}</span>
      <span>{caption}</span>
    </div>
  );
}
