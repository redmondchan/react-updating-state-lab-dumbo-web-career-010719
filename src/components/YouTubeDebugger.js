// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
   }
 }
}

  handleClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
  }, console.log(this.state))
  }

  handleResolution = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution:'720p'
      }
    }
  }, console.log(this.state))
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleClick}>bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution</button>
      </div>
        )
  }
}

export default YouTubeDebugger
