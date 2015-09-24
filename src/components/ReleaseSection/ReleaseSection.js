import React, {Component, PropTypes } from 'react';
import ReleaseComponent from '../ReleaseComponent/ReleaseComponent';
import Headline from '../Headline/Headline';

export default class ReleaseSection extends Component {
  render() {
    return (
    <div className="row margin-bottom">
      <Headline title={this.props.title} playAllVisible />
        <ReleaseComponent cover="http://geo-media.beatport.com/image_size/500x500/12267695.jpg"
            title="My release title"
            label="My label"/>
    </div>
    );
  }
}

ReleaseSection.propTypes = {
  title: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};
