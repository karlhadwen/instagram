import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../context';
import { useAuthListener } from '../../hooks';

export default function AddComment({ docId, comments, setComments }) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useAuthListener();

  function handleSubmitComment(event) {
    event.preventDefault();

    setComments([{ displayName, comment }, ...comments]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  }

  return (
    <div className="post__add-comment border-t border-gray-primary">
      <form
        className="flex w-full justify-between pl-0 pr-5"
        onSubmit={handleSubmitComment}
        method="POST"
      >
        <input
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && 'opacity-25'
          }`}
          type="button"
          disabled={!comment}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}
