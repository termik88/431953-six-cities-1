import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

it(`Main correctly renders`, () => {
  const test = renderer
    .create(<Main
      places = {[
        {title: `Beautiful &amp; luxurious apartment at great location`},
        {title: `Wood and stone place`},
        {title: `Canal View Prinsengracht`},
        {title: `Bla bla bla`}]}
    />).toJSON();

  expect(test).toMatchSnapshot();
});
