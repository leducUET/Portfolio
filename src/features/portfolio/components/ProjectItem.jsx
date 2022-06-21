import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  return (
    <>
      <Link to={props.link}>
        <img src={props.srcImg} alt="" className="thumbnail" />
      </Link>
      <h4>{props.title}</h4>
    </>
  );
}
