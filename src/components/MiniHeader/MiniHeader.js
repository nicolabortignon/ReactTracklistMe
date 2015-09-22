import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/artist';

@connect(
    state => ({artist: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class InfoBar extends Component {
  static propTypes = {
    artist: PropTypes.object,
    load: PropTypes.func.isRequired
  }
  render() {
    const {artist, load} = this.props; // eslint-disable-line no-shadow
    return (
      <mini_header_component onClick={load} >
        <img src={artist.avatar}/>
        <description>
          <text_description>
            <author> author </author>
            <title>{artist.displayName}</title>
           </text_description>
            <button className="btn btn-primary" onClick={load}>Reload from server</button>
        </description>
      </mini_header_component>
    );
  }
}
