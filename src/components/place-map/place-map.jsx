import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: {
    url: `img/pin.svg`,
    size: [30, 30]
  },
  layer: {
    server: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  }
};

const ICON = leaflet.icon({
  iconUrl: SETTINGS.icon.url,
  iconSize: SETTINGS.icon.size
});

class PlaceMap extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  render() {
    return (
      <section className="cities__map map" style={{height: `100vh`}} ref={this._mapRef} />
    );
  }

  componentDidMount() {
    this._createMap();
  }

  // _findMedian(data) {
  //   // extract the .values field and sort the resulting array
  //   const m = data.sort((a, b) => a - b);
  //
  //   const middle = Math.floor((m.length - 1) / 2); // NB: operator precedence
  //   return (m.length % 2) ? m[middle] : (m[middle] + m[middle + 1]) / 2.0;
  // }

  _createMap() {
    const {offers} = this.props;
    const centerCity = [52.38333, 4.9];

    // const centerCity = [this._findMedian(offers.map((offer) => offer.coordinates[0])),
    //   this._findMedian(offers.map((offer) => offer.coordinates[1]))];

    const map = leaflet.map(this._mapRef.current, {
      layers: [
        leaflet.tileLayer(SETTINGS.layer.server, {attribution: SETTINGS.layer.attribution})
      ],
      center: centerCity,
      zoom: SETTINGS.zoom,
      zoomControl: SETTINGS.zoomControl,
      marker: SETTINGS.marker
    });

    map.setView(centerCity, SETTINGS.zoom);

    offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {ICON}).addTo(map);
    });
  }
}

export default PlaceMap;

PlaceMap.propTypes = {
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
