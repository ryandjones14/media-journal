import React from 'react';
import './type-tile.css';

function TypeTile(props) {
  return (
    <button className={"media-type " + (props.selectedTypeId === props.id ? 'selected' : '')} onClick={(e) => props.selectMediaType(props.id, e)}>{props.type}</button>
  );
}

export default TypeTile;
