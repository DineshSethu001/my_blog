import React from "react";
import "../Pages/homePage.css";
const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="name">
        <h1>Dinesh Thanigaivel</h1>
      </div>
      <div className="description">
        <p>
          I have developed two
          applications. The first one serves as a demonstrative platform
          highlighting API integration. It seamlessly checks and retrieves
          weather details from the<em>Open Weather API</em>, effectively showcasing its
          functionality.    _blog
          <br />
          The second one create a own server and fetch a data from server for
          the application
        </p>
      </div>
    </div>
  );
};
export default HomePage;
