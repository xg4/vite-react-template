import { map } from 'lodash';
import React from 'react';

function About() {
  console.log(
    map([1, 2, 3, 4], (i) => i * 2),
    'lodash map',
  );

  return <div>about</div>;
}

export default About;
