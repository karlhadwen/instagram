import React, { useState } from 'react';
import { ActionsContext } from '../../context';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Likes from './likes';
import Footer from './footer';
import Comments from './comments';
import AddComment from './add-comment';

export default function Post({ content }) {
  const [likes, setLikes] = useState(content.likes.length);
  const [comments, setComments] = useState(content.comments);

  return (
    <div className="post rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header username={content.username} />
      <Image src={content.imageSrc} />

      <ActionsContext.Provider
        value={{
          docId: content.docId,
          username: content.username,
          likes,
          setLikes,
          comments,
          setComments,
        }}
      >
        <Actions likedPhoto={content.userLikedPhoto} />
        <Likes />

        <Footer caption={content.caption} />
        <Comments posted={content.dateCreated} />
        <AddComment />
      </ActionsContext.Provider>
    </div>
  );
}
