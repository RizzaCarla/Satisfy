import React from 'react';

const SongIndexItem = props => (
  <li>
    <Link to={`songs/${props.song.id}`}>{props.song.song_title}</Link>
  </li>
)

export default SongIndexItem