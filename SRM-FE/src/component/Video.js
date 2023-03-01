import React from 'react';

const Video = () => {
  return (
    <div className="container-video">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/Rf3_qQs8Fhc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
