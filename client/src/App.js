import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { EditMovie } from './Movies/EditMovie'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          console.log(props)
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path='/edit-movie/:id' render={props => {
        return <EditMovie {...props} />
      }} />
    </>
  );
};

export default App;
