import React from 'react';
import PropTypes from 'prop-types';

import Sprite from '../sprite/sprite.jsx';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';

const App = (props) => {
  const {offers} = props;

  return (
    <React.Fragment>
      <Sprite/>
      <Header/>
      <Main offers={offers} />
    </React.Fragment>
  );
};

export default App;

App.propTypes = {
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
