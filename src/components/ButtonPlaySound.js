import React from "react";
import PlayButton from "../img/play-button.png";
import PauseButton from "../img/pause-button.png";
import RainSoundMP3 from "../audio/rain.mp3";
import RainSoundOGG from "../audio/rain.mp3";
import RainSoundMPEG from "../audio/rain.mp3";

class ButtonPlaySound extends React.Component {
  constructor(){
    super();
    this.state= {
      audioState: false,
    }
  }

  changeAudioVolume(volume) {
    var audio = document.getElementById("audio-player");
    if (audio !== null) {
      audio.volume = volume;
    }
  }

  changeAudioState(){
    this.setState({audioState : !this.state.audioState});
  }

  audioControl(state){
    var audioDocument = document.getElementById("audio-player");
    if (audioDocument != null) {
      if (!state){
        audioDocument.pause();
      } else {
        audioDocument.play();
      }
    }
  }

  render() {
    let audioButtonImage = !this.state.audioState ? PlayButton : PauseButton;
    let audioImageClass = !this.state.audioState ? "play-image" : "pause-image";
    this.changeAudioVolume(this.props.volume);
    this.audioControl(this.state.audioState);

    return (
      <div>
        <button
          class="audio-button"
          onClick={(this.changeAudioState.bind(this))}
        >
          <img
            class={audioImageClass}
            src={audioButtonImage}
            alt="Audio Button Pause/Play"
          ></img>
        </button>
        <audio id="audio-player" loop="loop">
          <source src={RainSoundMP3} type="audio/mp3"></source>
          <source src={RainSoundOGG} type="audio/ogg"></source>
          <source src={RainSoundMPEG} type="audio/mpeg"></source>
          "Your browser does not support the audio element."
        </audio>
      </div>
    );
  }
}

export default ButtonPlaySound;
