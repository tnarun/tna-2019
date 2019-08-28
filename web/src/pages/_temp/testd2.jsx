import React from 'react'

const videojs = window.videojs

const PLAY_URL = 'http://live.teamkn.com/d2/d2.m3u8?auth_key=1562480122-0-0-94a70b5287bced5665fdc08afa79617a'

// const PLAY_URL = 'http://live.teamkn.com/d2/d2.flv?auth_key=1562480122-0-0-7d8a7c059b1bf53e3cc58cd5f602af6a'

const videoJsOptions = {
  autoplay: true,
  controls: true
}

export default () => (
  <VideoPlayer { ... videoJsOptions } />
)

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(
      this.videoNode, 
      this.props, 
      () => {
        console.log('onPlayerReady', this.player)
        setTimeout(() => {
          this.player.play()
        }, 1000)
      }
    )
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div style={{ width: '1280px', height: '960px' }}>
        <video 
          ref={ node => this.videoNode = node } 
          className='video-js vjs-16-9'
          data-setup='{"language":"zh-CN"}'
        >
          <source src={ PLAY_URL } type='application/x-mpegURL' />
        </video>
      </div>
    )
  }
}