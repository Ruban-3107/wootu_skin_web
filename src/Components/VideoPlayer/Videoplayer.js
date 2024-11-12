import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "../Treatments/Treatments.css"


const VideoPlayer = ({ videoSrc }) => {

    const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

    return(
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-item-center justify-content-center mb-4"> {/* Use col-3 for four cards in a row */}
      <div className="card h-100 position-relative video-card w-100">
        <iframe
          src={isPlaying ? videoSrc : ''}
          className="card-img-top"
          style={{ width: '100%', height: '400px' }} // Set height according to your need
          frameBorder="0"
          allowFullScreen
          title="Video"
        />
        <div
          className="play-pause-overlay d-flex justify-content-center align-items-center"
          onClick={togglePlayPause}
        >
          <i className={`play-pause-icon ${isPlaying ? 'pause-icon' : 'play-icon'}`}></i>
        </div>
      </div>
    </div>
    )
}

export default VideoPlayer;