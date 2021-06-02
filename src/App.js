import React from "react";
import ButtonPlaySound from "./components/ButtonPlaySound.js";
import SliderVolume from "./components/SliderVolume.js";
import SocialMedia from "./components/SocialMedia.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: "0.5" };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(volume) {
    this.setState({ volume });
  }

  render() {
    var volume = this.state.volume;

    return (
      <html>
        <head>
          <title>Rainy Mood Like</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <div className="vertical-center">
            <ButtonPlaySound volume={volume} />
            <SliderVolume
              volume={volume}
              onVolumeChange={this.handleVolumeChange}
            />
            <h1>Rainy Mood (Like)</h1>
            <h2>Rain Sounds for Sleep & Study</h2>
            <SocialMedia />
          </div>
        </body>
        <footer>
          <p>
            This website is a learning project, copy from{" "}
            <a href="https://www.rainymood.com/" target="_blank">
              RainyMood
            </a>
          </p>
        </footer>
      </html>
    );
  }
}

export default App;
