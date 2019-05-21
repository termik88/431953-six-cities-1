import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

export default class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onImageClick = this._onImageClick.bind(this);
  }

  _onMouseEnter(value) {
    this.setState({
      activeCard: value
    });
  }

  _onMouseLeave() {
    this.setState({
      activeCard: null
    });
  }

  _onImageClick(value) {
    this.setState({
      activeCard: value
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it, i) => <PlaceCard
          key={i}
          offer={it}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          onImageClick={this._onImageClick}
          onTitleClick={() => {}}
        />)}
      </div>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    premiumStatus: PropTypes.bool.isRequired,
    srcImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
  ).isRequired
};
