import React from 'react';

export default function AddComment() {
  return (
    <div className="post__add-comment border-t border-gray-primary">
      <form className="flex w-full justify-between pl-0 pr-5">
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
        />
        <button
          className="text-sm font-bold text-blue-medium opacity-25"
          type="button"
        >
          Post
        </button>
      </form>
    </div>
  );
}
