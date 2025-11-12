import React from "react";

function YtShortVideoCard(props) {
  return (
    <figure>
      <img
        src={props.videoDetails.thumbnail}
        alt=""
        className="aspect-9/16 object-cover rounded-lg"
      />
      <figcaption>
        <h3 className="text-sm font-semibold line-clamp-2">
          {props.videoDetails.title}
        </h3>
        <p className="text-xs">{props.videoDetails.views} views</p>
      </figcaption>
    </figure>
  );
}

export default YtShortVideoCard;