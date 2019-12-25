import React from "react";

export const Title = () => (
  <div className="header">
    <img
      className="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
      alt="alt"
    />
    <div className="links">
      <a href="/">MAP</a>
      <a href="/">COMMUNITY</a>
      <a href="/">NEWS</a>
      <a href="/">MANAGIZE</a>
      <a href="/">ABOUT</a>
      <div className="upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
        </svg>
        <div className="btn-text">UPLOAD ART</div>
      </div>
    </div>
  </div>
);
