import React, { useParams, useState } from 'react';
import './media.css';

function Media(props) {
  const [mediaTitle, setMediaTitle] = useState('');

  const mediaTitles = props.type.titles.map((title) => {
    return (
      <div className="title" key={title.id}>
        <p>{title.title}</p>
        <button onClick={() => deleteTitle(title.id)}>delete</button>
      </div>
    );
  });

  function handleChange(event) {
    event.preventDefault();
    setMediaTitle(event.target.value);
  }

  function handleKeyPress(event) {
    // event.preventDefault();
    if (event.charCode === 13) {
      addTitle();
      // props.addMediaTitle(mediaTitle);
      // setMediaTitle('');
    };
  }

  function addTitle() {
    if (mediaTitle === '') return;

    props.addMediaTitle(mediaTitle);
    setMediaTitle('');
  }

  function deleteTitle(mediaTitleId) {
    props.deleteMediaTitle(mediaTitleId);
    setMediaTitle('');
  }

  return (
    <div className="media">
      <input
      className="input"
        type="text"
        placeholder="title"
        aria-label="title"
        value={mediaTitle}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTitle}>Add</button>
      <div className="titles">
        {mediaTitles}
      </div>
    </div>
  );
}

export default Media;
