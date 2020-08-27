import React from 'react';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Likes from './likes';
import Footer from './footer';
import Comments from './comments';
import AddComment from './add-comment';

export default function Post() {
  return (
    <div className="post rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header />
      <Image />
      <Actions />
      <Likes />
      <Footer />
      <Comments />
      <AddComment />
    </div>
  );
}
