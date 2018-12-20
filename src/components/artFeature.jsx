import React from 'react';

function ArtFeature(props){
  return(
    <div className = "feature">
      <img className = "feature_img" src = {props.current.url} alt = "thumbnail"/>
      <div>
        <h2> {props.current.title}</h2>
        <p> {props.current.medium}</p>
      </div>
    </div>
    )
}

export default ArtFeature;
