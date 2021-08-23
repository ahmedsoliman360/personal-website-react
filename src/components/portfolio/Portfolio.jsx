import React from "react";
import "./Portfolio.scss";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Websites</li>
        <li>Java Projects</li>
        <li>Data Science</li>
        <li>Python Projects</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"
            alt=""
          />
          <h3>Test App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"
            alt=""
          />
          <h3>Test App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"
            alt=""
          />
          <h3>Test App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"
            alt=""
          />
          <h3>Test App</h3>
        </div>
      </div>
    </div>
  );
}
