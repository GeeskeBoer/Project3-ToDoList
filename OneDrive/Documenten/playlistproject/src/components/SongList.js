import React, { Component } from "react";

const SongList = props => (
  <div>
    {props.songs.map((song, index) => (
      <p key={index}>{song}</p>
    ))}
  </div>
);

export default SongList;
