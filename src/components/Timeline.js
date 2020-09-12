import React from 'react';
import Post from './post';
import { useFollowedUsersPhotos } from '../hooks';

export default function Timeline() {
  const photos = useFollowedUsersPhotos();

  return (
    <div className="container col-span-2">
      {photos.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <div className="not-following">
          <p>It looks like you're not following anybody!</p>
        </div>
      )}
    </div>
  );
}
