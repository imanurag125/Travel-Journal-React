import React from "react";
import loc from "./loc.png";
function Card({ props }) {
  console.log(props);
  return (
    <>
      <img className="country__img" src={props.imageUrl} alt="" />

      <div className="content">
        <div className="header__wrapper">
          <img src={loc} alt="" />
          <span className="country__name">{props.location}</span>
          <a className="map" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>

      {/* <div className="border"></div> */}
    </>
  );
}

export default Card;
