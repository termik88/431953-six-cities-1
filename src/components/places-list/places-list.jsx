import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._onHover = this._onHover.bind(this);
    this._offHover = this._offHover.bind(this);
    this._onImageClick = this._onImageClick.bind(this);
  }

  _onHover(value) {
    this.setState({
      activeCard: value
    });
  }

  _offHover() {
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
          onHover={this._onHover}
          offHover={this._offHover}
          onImageClick={this._onImageClick}
          onTitleClick={() => {}}
        />)}
      </div>
    );
  }
}

export default PlaceList;

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    premiumStatus: PropTypes.bool.isRequired,
    srcImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
  ).isRequired
};
