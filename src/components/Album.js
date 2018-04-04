import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.slug)
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }
  render() {
    return(
      <section className="album">
        {this.props.match.params.slug} Album will go here
        <section id="album-info">
          <img id="album-cover-art" alt="" src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
      </section>
    )
  }
}

export default Album;
