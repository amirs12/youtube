import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UpNextHeader from './Components/UpNextHeader/UpNextHeader.js';
import NextVideoContainer from './Components/NextVideoContainer/NextVideoContainer.js';
import UpNextVideos from './Components/UpNextVideos/UpNextVideos.js';

import './UpNextColumn.css';

class UpNextColumn extends Component {  
  render() {
    const { thumbId } = this.props
    let nextId = parseInt(thumbId, 10) + 1
    if(nextId === 20) {
      nextId = "0"
    }
    const next = nextId.toString()

    return (
      <div className="up-next-column">
        <UpNextHeader />
        <div className="first-next-wrapper">
          <Link to={`/video/${nextId}`} className="first-next">
            <NextVideoContainer thumbId={nextId}/>
          </Link>
        </div>
        <UpNextVideos thumbId={thumbId} nextId={next}/>
      </div>
    );
  }
};

export default UpNextColumn;