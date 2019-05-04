import React from "react";
import ReactDOM from "react-dom";
import Main from './components/main/main.jsx';

ReactDOM.render(<Main
  places = {[
    {title: `Beautiful &amp; luxurious apartment at great location`},
    {title: `Wood and stone place`},
    {title: `Canal View Prinsengracht`},
    {title: `Nice, cozy, warm big bed apartment`}]}/>, document.getElementById(`root`));
