import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


export default function Jumbotrons() {
  return (
    <div>
        <div class="jumbotron" style={{width:900, marginLeft:300, backgroundColor:'#e9e9e9'}}>
          <h1 class="display-4"><strong style={{margin:20}}>A Warm Welcome!</strong></h1>
          <p class="lead" style={{margin:15}}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                          It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button" style={{margin:20}}>Call to action</a>
          </p>
        </div>
    </div>
  );
}

