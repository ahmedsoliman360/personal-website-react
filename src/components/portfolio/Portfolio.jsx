import React from "react";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  // designPortfolio,
  contentPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "java":
        setData(mobilePortfolio);
        break;
      case "dataSci":
        setData(contentPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
