import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      song: "",
      artist: "",
      genre: "",
      rating: "",
      songs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      song: "",
      artist: "",
      genre: "",
      rating: "",
      songs: [
        this.state.song +
          "" +
          this.state.artist +
          this.state.genre +
          this.state.rating
      ]
    });
  }

  addSong = song => {
    // doe iets om de state aan te passen
  };

  render() {
    return (
      <div>
        <SongForm
          addSong={this.addSong}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>

        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
