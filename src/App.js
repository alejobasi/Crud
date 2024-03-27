import React from 'react';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectsAnidados from './components/SelectAnidados';



function App () {
  return (
    <>
      <h1>Ejercicios React</h1>
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
