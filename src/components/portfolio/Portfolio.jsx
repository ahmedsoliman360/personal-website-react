import React from "react";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Projects",
    },
    {
      id: "java",
      title: "Java Projects",
    },
    {
      id: "dataSci",
      title: "Data Science",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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
