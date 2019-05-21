import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";

const mock = {
  id: 0,
  premiumStatus: true,
  srcImage: ``,
  price: 120,
  rating: 93,
  title: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  coordinates: [52.3909553943508, 4.85309666406198]
};

it(`PlaceCard correctly renders`, () => {

  const tree = renderer.create(<PlaceCard
    offer = {mock}
    onMouseEnter= {() => {}}
    onMouseLeave={() => {}}
    onImageClick={() => {}}
    onTitleClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
