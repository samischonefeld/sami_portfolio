import React from 'react';

function ArtItem(props){

function featureImage(id){
  props.onClick(id)
}

return(
  <div
    onClick = {() => featureImage(props.artwork.id)}
  >
    <img className = "thumbnail_img" imagenumber = {props.artwork.id} src = {props.artwork.url} alt = "thumbnail" />
  </div>
  )
}

export default ArtItem;
