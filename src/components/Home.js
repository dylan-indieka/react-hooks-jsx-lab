import React from 'react';

// Assuming these variables are imported or defined above this component
const name = 'John Doe';  // Example name
const city = 'New York';  // Example city

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
// This component displays a heading with the name and city of a web developer.