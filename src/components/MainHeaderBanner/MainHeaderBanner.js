import React, {Component} from 'react';

export default class MainHeaderBanner extends Component {
  render() {
    return (
      <main_header_component style={{backgroundImage: 'url(http://www.thissongslaps.com/wp-content/uploads/2014/12/chemical-brothers.jpg)'}} className="main_header_component color">
        <div className="highlight_band">
          <div className="cover"><img src="https://upload.wikimedia.org/wikipedia/en/8/80/CB-WeAretheNight.jpg" /> </div>
        </div>
      </main_header_component>
    );
  }
}
