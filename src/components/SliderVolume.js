import React from "react";

class SliderVolume extends React.Component {
  constructor(props) {
    super(props);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(e) {
    this.props.onVolumeChange(e.target.value);
  }

  render() {
    var volume = this.props.volume;
    return (
      <input
        type="range"
        step="0.01"
        min="0"
        max="1"
        value={volume}
        onChange={this.handleVolumeChange}
        className="slider"
      ></input>
    );
  }
}

export default SliderVolume;
