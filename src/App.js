import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="left">
        <h1>Launch your Data Career in</h1>
        <h2>Weeks, not Years</h2>
        <p>What to expect:</p>
        <ul>
          <li>Short-answer questions & No cover letter</li>
          <li>Takes 4 mins on average</li>
        </ul>
        <button className="primary-button">Start Your Journey</button>
        <p>109 people have filled this out</p>
      </div>
      <div className="right">
        <div className="rating">
          <p className="rating-text">Rated on</p>
          <p className="rating-number">4.8</p>
          <p className="rating-text">Course Report</p>
        </div>
        <p>Our students <span className="highlight">used to</span> work at</p>
        <div className="logos">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
          <img src="https://www.ibm.com/brand/assets/images/ibm-logo.svg" alt="IBM" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nike_logo_%282008%29.svg/1200px-Nike_logo_%282008%29.svg.png" alt="Nike" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/EBay_logo_%282020%29.svg/1200px-EBay_logo_%282020%29.svg.png" alt="ebay" />
        </div>
      </div>
    </div>
  );
};

export default App;
