import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SavedList(props) {

  let history = useHistory()

  let backHome = () => {
    console.log(history);
    history.push("/")
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={backHome}>Home</div>
    </div>
  );
}
