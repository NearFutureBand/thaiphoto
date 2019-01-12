import React, { Component } from "react";
import '../css/App.less';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <header>

        </header>

        <div className="intro">

        </div>
        
        <div className="types">
          <div className="page">
            <h1>TYPES OF SHOOTING</h1>
            <div className="content">
              <div>family shooting</div>
              <div>lovestory</div>
              <div>wedding shooting</div>
            </div>
          </div>
        </div>
        
        <div className="price">
          <div className="page">
            <h1>PRICE</h1>
          </div>
          
        </div>
        
        <div className="pause">
          <div className="background-image"></div>
        </div>

        <div className="portfolio">
          <div className="page">
            <h1>PORTFOLIO</h1>
          </div>
        </div>

        <div className="feedback">
          <div className="page">
            <h1>REVIEWS</h1>
          </div>
          
        </div>

        <div className="contact">
          <div className="page">
            <h1>CONTACTS</h1>
          </div>
          
        </div>

        <div className="map">
        </div>
        
      </div>
    );
  }
}
export default App;