import React from "react";
import { useParams } from "react-router";

function VideoDetails() {
  const { vid } = useParams();
  console.log(vid);

  return (
    <div>
      VideoDetails
      <h1>{vid}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${vid}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default VideoDetails;