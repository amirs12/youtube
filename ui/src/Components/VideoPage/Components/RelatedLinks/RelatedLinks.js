import React, { Component } from 'react';

import './RelatedLinks.css';

class RelatedLinks extends Component {
    render() {
      return (
        <div className="related-links">
          <div className="related1">♫ Listen to the complete Narcos: Season 3 soundtrack on YouTube: <a className="related-link1" href="http://bit.ly/2nkz9Un">http://bit.ly/2nkz9Un</a></div>
          <div className="related2">⇓ Stream/Download the Narcos: Season 3 soundtrack : <a className="related-link2" href="https://netflix.lnk.to/NarcosID">https://netflix.lnk.to/NarcosID</a></div>
          <div className="related3">✔ Subscribe to Movie Music Club → <a className="related-link3" href="http://bit.ly/1Sb2dFX">http://bit.ly/1Sb2dFX</a></div>
          <div className="show-more">SHOW MORE</div>
        </div>
      );
    }
};

export default RelatedLinks;