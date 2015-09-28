import React, {Component, PropTypes } from 'react';
import MainHeaderBackground from '../MainHeader/MainHeaderBackground';

export default class TrackJumbotron extends Component {
  static propTypes = {
    track: PropTypes.object
  }
  render() {
    const {track} = this.props; // eslint-disable-line no-shadow
    return (
      <div>
        <MainHeaderBackground image={track ? track.cover : ''} />
        <div className="headerContent">
          <div className="row">
            <div className="col-sub-xs-18 col-sub-sm-18 col-sub-md-5 col-sub-lg-5">
              <img className="col-sub-lg-18 coverImage" src={track ? track.cover : ''} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
