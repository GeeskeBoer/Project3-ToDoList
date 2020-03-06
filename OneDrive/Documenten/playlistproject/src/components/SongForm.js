import React from "react";

function SongForm(props) {
  return (
    <div className="input">
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="song"
          placeholder="Song"
          value={props.data.song}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={props.data.artist}
          onChange={props.handleChange}
        />
        <select
          name="genre"
          value={props.data.genre}
          onChange={props.handleChange}
        >
          <option value="">-- Choose a genre --</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
        </select>

        <select
          name="rating"
          value={props.data.rating}
          onChange={props.handleChange}
        >
          <option value="">-- Give a rating out of 5 --</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
        </select>
        <button> Submit </button>
      </form>
    </div>
  );
}

export default SongForm;
