import React, { Component } from 'react';
import ArtItem from './artItem.jsx';
import ArtFeature from './artFeature.jsx';
import Footer from './footer.jsx';
import HeaderArt from './header_art.jsx';

class Art extends Component {
  state = {
    current: this.props.artwork[0]
  }

  handleChange(id){
    let current = this.props.artwork.filter( d => d.id === id)
    this.setState(prevState => ({
      current: current[0]
    }))
  }

  render() {
    const artwork = this.props.artwork
    const allArtwork = artwork.map((artwork) =>{
      return(
        <ArtItem
        artwork = {artwork}
        key = {artwork.id}
        onClick = {(id) => this.handleChange(id)}
        />
        )
    })

    return(
      <div>
        <HeaderArt />
      <h1 className = "art">Art</h1>
      <main className = "container">
        <aside clasName = "thumbnail_container">
          {allArtwork}
        </aside>
        <ArtFeature current = {this.state.current} />
      </main>
      <Footer />
      </div>
      )
  }
}

export default Art;
