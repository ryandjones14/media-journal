import React, { useState } from 'react';
import './App.css';
import TypeTile from './components/molecules/type-tile/type-tile';
import Media from './components/molecules/media/media';

function App() {

  const defaultMediaTypes = [
    { id: 0, medium: 'movie', titles: [] },
    { id: 1, medium: 'book', titles: [] },
    { id: 2, medium: 'tv', titles: [] },
    { id: 3, medium: 'music', titles: [] },
    { id: 4, medium: 'podcast', titles: [] },
  ];
  const [ media, setMedia ] = useState(defaultMediaTypes);
  const [ selectedType, setSelectedType ] = useState(media[0]);

  const mediaTypes = media.map((mediaType) => {
    return (
      <TypeTile
        key={mediaType.id.toString()}
        id={mediaType.id}
        selectedTypeId={selectedType.id}
        type={mediaType.medium}
        selectMediaType={selectMediaType}
      />
    );
  });
  
  function selectMediaType(id, e) {
    let selectedType = media.filter(type => type.id === id)[0];
    setSelectedType(selectedType);
  }

  function addMediaTitle(title) {
    const mediaId = selectedType.id;
    const id = Math.floor((mediaId + 1) * (Math.random() * 1000));
    let newTitle = {
      id,
      title,
    }
    let mediaCopy = [...media];
    mediaCopy[mediaId].titles.push(newTitle);
    setMedia(mediaCopy);
  }

  function deleteMediaTitle(id) {
    const mediaId = selectedType.id;
    let mediaCopy = [...media];
    let titlesCopy = mediaCopy[mediaId].titles;
    let itemToDelete = titlesCopy.find(title => title.id === id);
    let indexToDelete = titlesCopy.indexOf(itemToDelete);

    titlesCopy.splice(indexToDelete, 1);
    console.log(titlesCopy);
    mediaCopy[mediaId].titles = titlesCopy;
    setMedia(mediaCopy);
  }

  return (
    <div className="app">
      <h1>Media Journal</h1>
      <div className="media-types">
        {mediaTypes}
      </div>
      <div className="selected-media">
        <Media type={selectedType} addMediaTitle={addMediaTitle} deleteMediaTitle={deleteMediaTitle}/>
      </div>
    </div>
  );
}

export default App;
