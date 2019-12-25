import React, { Component } from "react";
import { connect } from "react-redux";
import { playVideo } from "../Redux/Action/YoutubeAPiAction";

class Playlist extends Component {
  render() {
    //console.log(this.props);
    if (!this.props.youtubeVideos) {
      return null;
    }
    return (
      <div>
        {this.props.youtubeVideos.map(whatEverData =>
          //console.log(whatEverData.id.videoId)
          <div className="card text-left" key={whatEverData.id.videoId}>
            <img
              className="card-img-top"
              src={whatEverData.snippet.thumbnails.high.url}
              onClick={() => this.props.playVideo(whatEverData)} //Changed
            />
            <div className="card-body a">
              <h6 className="card-title">
                {whatEverData.snippet.title}
              </h6>
              <p className="card-text">
                {whatEverData.snippet.channelTitle}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  //console.log(state.videolist.items)
  return {
    youtubeVideos: state.videolist.items
  };
};
export default connect(mapStateToProps, { playVideo })(Playlist);
