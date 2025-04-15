import React from 'react';
import myImage from './path/to/your/image.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a little bit about me. I'm passionate about coding and constantly learning new things!</p>
      <img src={myImage} alt="I made this" />
    </div>
  );
};

export default About;



