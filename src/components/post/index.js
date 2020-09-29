import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({
  content: { docId, username, imageSrc, caption, likes, userLikedPhoto, comments, dateCreated }
}) {
  const commentInput = useRef(null);

  function handleFocus() {
    commentInput.current.focus();
  }

  return (
    <div className="post rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header username={username} />
      <Image src={imageSrc} caption={caption} />
      <Actions
        docId={docId}
        totalLikes={likes.length}
        likedPhoto={userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer username={username} caption={caption} />
      <Comments
        docId={docId}
        comments={comments}
        posted={dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  }).isRequired
};
