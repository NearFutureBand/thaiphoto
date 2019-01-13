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

              <div className="card">
                <h3 className="title">family shooting</h3>
                <div className="img"></div>
              </div>

              <div className="card">
                <h3 className="title">lovestory</h3>
                <div className="img"></div>
              </div>

              <div className="card">
                <h3 className="title">wedding shooting</h3>
                <div className="img"></div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="price">
          <div className="page">
            <h1>PRICE</h1>
            <div className="content">

              <div className="card-wrapper">
                <div className="card">
                  <h3 className="title"></h3>
                  <div className="descr"></div>
                  <ul className="list"></ul>
                  <h3 className="price"></h3>
                  <a href="#">ORDER</a>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <h3 className="title"></h3>
                  <div className="descr"></div>
                  <ul className="list"></ul>
                  <h3 className="price"></h3>
                  <a href="#">ORDER</a>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <h3 className="title"></h3>
                  <div className="descr"></div>
                  <ul className="list"></ul>
                  <h3 className="price"></h3>
                  <a href="#">ORDER</a>
                </div>
              </div>
              
            
            </div>
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