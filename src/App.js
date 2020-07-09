import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "F15",
    image: "https://i.redd.it/5mtrag24lavz.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "F18",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/US_Navy_050702-N-5781F-165_An_F-A-18E_Super_Hornet_assigned_to_Strike_Fighter_Squadron_Two_Seven_(VFA-27)_performs_during_an_air_power_demonstration.jpg/1920px-US_Navy_050702-N-5781F-165_An_F-A-18E_Super_Hornet_assigned_to_Strike_Fighter_Squadron_Two_Seven_(VFA-27)_performs_during_an_air_power_demonstration.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "F16",
    image:
      "https://nationalinterest.org/sites/default/files/main_images/f-16_fighting_falcon.jpg",
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
