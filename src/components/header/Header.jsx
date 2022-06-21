import React from "react";
import "./header.scss";
export default function Header(props) {
  return (
    <div className={`header header-${props.theme}`}>
      <h1>
        <span>{props.title}</span>
      </h1>
    </div>
  );
}
