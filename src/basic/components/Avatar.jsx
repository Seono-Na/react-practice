import React from "react";

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="img" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
