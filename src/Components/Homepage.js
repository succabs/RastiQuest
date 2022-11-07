import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import map1 from '../Photos/map1.jpg';
import map2 from '../Photos/map2.jpg';
import drinks from '../Photos/drinks.jpg';
import action from '../Photos/action.jpg';
import Button from 'react-bootstrap/Button';
import {
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
  import Enter from './Enter';
  import Create from './Create';

export default function HomePage() {
return (
<>

<div className="container-fluid pb-3">
<div class="row text-center">
<div>
<h1>Welcome to RastiQuest!</h1>
<p>Have an unforgettable experience with RastiQuest - The ultimate tool for planning fun activities!</p>
<p>Create a perfectly tailored adventure for your group. It's easy!</p>
<h3>Explore RastiQuest</h3>
</div>

<div  className="container-fluid p-3 col text-center">

<Button variant="primary" as={Link} to="/Create">Create Quest</Button>{''}
<Button variant="primary" as={Link} to="/Enter">Enter Quest</Button>{' '}

</div>


<Carousel interval="5000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={map1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={action}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={drinks}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div></div>

</>
);
}