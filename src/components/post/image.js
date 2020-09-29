import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, caption }) {
  return (
    <div className="post__img">
      <img src={src} alt={caption} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
