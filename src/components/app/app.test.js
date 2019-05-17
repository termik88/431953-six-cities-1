import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const mock = [
  {
    id: 0,
    premiumStatus: true,
    srcImage: ``,
    price: 120,
    rating: 93,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`
  },
  {
    id: 1,
    premiumStatus: false,
    srcImage: ``,
    price: 80,
    rating: 80,
    title: `Wood and stone place`,
    type: `Private room`
  }
];

it(`App correctly renders`, () => {
  const test = renderer
    .create(<App
      offers = {mock}
    />).toJSON();

  expect(test).toMatchSnapshot();
});
