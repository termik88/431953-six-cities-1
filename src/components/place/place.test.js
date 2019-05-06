import React from "react";
import renderer from "react-test-renderer";

import Place from "./place.jsx";

it(`Place correctly renders`, () => {
  const test = renderer.create(<Place
    place = {{
      title: `Beautiful &amp; luxurious apartment at great location`
    }}
  />).toJSON();

  expect(test).toMatchSnapshot();
});
