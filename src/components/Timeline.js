import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Post from './post';
import { useFollowedUsersPhotos } from '../hooks';

export default function Timeline() {
  const photos = useFollowedUsersPhotos();

  return (
    <div className="container col-span-2">
      {photos.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <Skeleton count={3} width={677} height={1185} className="mb-16" />
      )}
    </div>
  );
}
