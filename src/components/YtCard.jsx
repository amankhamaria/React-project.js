import React from "react";
import { Link } from "react-router";

function YtCard(props) {
  console.log(props.videoDetails.id);

  return (
    <figure>
      <Link to={`/videos/${props.videoDetails.id}`}>
        <img
          src={props.videoDetails.thumbnail}
          alt=""
          className="w-full rounded-lg"
        />
        <figcaption className="flex gap-2 pt-2 px-2">
          <img
            src={props.videoDetails.chanelLogo}
            alt=""
            className="rounded-full h-10 w-10"
          />
          <div>
            <h3 className="text-sm font-semibold line-clamp-2">
              {props.videoDetails.title}
            </h3>
            <p className="text-xs">{props.videoDetails.chanelName}</p>
            <p className="text-xs">
              {props.videoDetails.views} views {props.videoDetails.uploadedTime}
            </p>
          </div>
        </figcaption>
      </Link>
    </figure>
  );
}

export default YtCard;