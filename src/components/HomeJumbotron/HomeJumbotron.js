import React, {Component, PropTypes } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MiniHeader from '../MiniHeader/MiniHeader';

export default class HomeJumbotron extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img className="header_background" src={'http://www.thissongslaps.com/wp-content/uploads/2014/12/chemical-brothers.jpg'} />
          <div className="header_shades_holder">
            <div className="header_grey_overlay"> </div>
          </div>
        </div>
        <div className="headerContent">
          <div className="row">
            <div className="col-sub-xs-18 col-sub-sm-18 col-sub-md-12 col-sub-lg-12">
              <MainHeader />
            </div>
             {this.props.miniHeaders.map((miniHeader) =>
                <div className="col-sub-xs-9 col-sub-sm-9 col-sub-md-6 col-sub-lg-6">
                  <MiniHeader {...miniHeader}/>
                </div>
             )}
          </div>
        </div>
      </div>
    );
  }
}

HomeJumbotron.propTypes = {
  miniHeaders: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};
