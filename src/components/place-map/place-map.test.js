import React from "react";
import renderer from "react-test-renderer";

import PlaceMap from "./place-map.jsx";

const mock = [
  {
    id: 0,
    premiumStatus: true,
    srcImage: ``,
    price: 120,
    rating: 93,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [52.369553943508, 4.85309666406198]
  }
];

it(`PlacesList correctly renders`, () => {
  const tree = renderer.create(<PlaceMap
    offers = {mock}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
