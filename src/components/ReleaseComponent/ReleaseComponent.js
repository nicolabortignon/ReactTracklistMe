import React, {Component, PropTypes } from 'react';

export default class ReleaseComponent extends Component {
  render() {
    return (
        <release_component className="col-sub-xs-2 col-sub-sm-2 col-sub-md-2 col-sub-lg-2 ">
          <release_cover>
            <overlay_controllers>
              <ul className="flexbox">
                <li className="oneSlotButton"><span className="basic-pictoplay pictoFont"></span></li>
                <li className="oneSlotButton"><span className="basic-pictoliste pictoFont"></span></li>
                <li className="twoSlotButton">
                  <span className="price_tag"> 1.09 $ </span>
                  <span className="basic-pictoshop pictoFont"></span>
                </li>
              </ul>
            </overlay_controllers>
            <img src={this.props.cover} />
          </release_cover>
          <release_title> {this.props.title} </release_title>
          <release_artists> Dominic Eulberg, Popof, Madeon</release_artists>
          <release_label> {this.props.labelName} </release_label>
        </release_component>
    );
  }
}

ReleaseComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired
};
