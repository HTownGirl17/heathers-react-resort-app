import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "ree cocktails",
        info:
          "Amet voluptate in id occaecat exercitation aliquip consequat sunt excepteur."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Amet voluptate in id occaecat exercitation aliquip consequat sunt excepteur."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Amet voluptate in id occaecat exercitation aliquip consequat sunt excepteur."
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Amet voluptate in id occaecat exercitation aliquip consequat sunt excepteur."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
