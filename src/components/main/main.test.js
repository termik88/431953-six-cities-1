import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

const mock = [
  {
    id: 0,
    premiumStatus: true,
    srcImage: ``,
    price: 120,
    rating: 93,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 1,
    premiumStatus: false,
    srcImage: ``,
    price: 80,
    rating: 80,
    title: `Wood and stone place`,
    type: `Private room`,
    coordinates: [52.369553943508, 4.85309666406198]
  }
];

it(`Main correctly renders`, () => {
  const tree = renderer.create(<Main
    offers = {mock}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
