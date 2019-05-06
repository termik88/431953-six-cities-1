import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Place from './place.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on card correctly works`, () => {
  const clickHandler = jest.fn();
  const main = shallow(<Place
    place = {{title: `Beautiful &amp; luxurious apartment at great location`}}
    onCardClick = {clickHandler}
  />);

  main.find(`.place-card__name a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});


