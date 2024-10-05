import React from "react";

function Note(props) {
  return (
    <div className="note">
      <div>
        <img src={props.img1} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.duration}</p>
        <h3>{props.location}</h3>
        <img src={props.img2} />
        <p>{props.content}</p>
        <a href={props.referanceVideoLink}>{props.referanceVideoLinkName}</a>
      </div>
    </div>
  );
}

export default Note;
