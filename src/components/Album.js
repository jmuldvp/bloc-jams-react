import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album =>
      album.slug === this.props.match.params.slug
    );

    this.state = {
      album: album || {},
    };
  }
  render() {

    return(
      <section className="album">
        {this.props.match.params.slug}
        <section id="album-info">
          <img id="album-cover-art" alt="" src={this.state.album.albumCover || ''} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            <section className="song-list">
              {console.log(this.state.album.songs)}
              {
                this.state.album.songs.map( (song, index) =>
                  <tr key={index}>{song.title}</tr>
                )
              }
            </section>
          </tbody>
        </table>
      </section>
    )
  }
}

export default Album;
