import React from 'react';

function Food({name, picture}){ 
  
  return (
    <div> 
      <h2>i like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [{
  name : "F15",
  image : "https://i.redd.it/5mtrag24lavz.jpg"
},
{
  name : "F18",
  image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/US_Navy_050702-N-5781F-165_An_F-A-18E_Super_Hornet_assigned_to_Strike_Fighter_Squadron_Two_Seven_(VFA-27)_performs_during_an_air_power_demonstration.jpg/1920px-US_Navy_050702-N-5781F-165_An_F-A-18E_Super_Hornet_assigned_to_Strike_Fighter_Squadron_Two_Seven_(VFA-27)_performs_during_an_air_power_demonstration.jpg"
},
{
  name : "F16",
  image : "https://nationalinterest.org/sites/default/files/main_images/f-16_fighting_falcon.jpg"
}];

function App() {
  return (
    <div >
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
