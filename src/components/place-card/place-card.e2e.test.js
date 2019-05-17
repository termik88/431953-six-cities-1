import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  id: 0,
  premiumStatus: true,
  srcImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 93,
  title: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`
};


it(`Click on card title correctly works`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    offer = {mock}
    onMouseEnter= {() => {}}
    onMouseLeave={() => {}}
    onImageClick={() => {}}
    onTitleClick={clickHandler}
  />);

  placeCard.find(`.place-card__name a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Click on card image correctly works`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    offer = {mock}
    onMouseEnter= {() => {}}
    onMouseLeave={() => {}}
    onImageClick={clickHandler}
    onTitleClick={() => {}}
  />);

  placeCard.find(`.place-card__image`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledWith(mock.id);
});
