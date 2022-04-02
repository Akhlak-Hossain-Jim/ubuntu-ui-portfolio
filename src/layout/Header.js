import React, { useState } from "react";
import styledComponents from "styled-components";

export default function Header() {
  const [DATE, setDATE] = useState();
  setInterval(() => {
    const date = new Date();
    setDATE(
      `${date.getDate()} ${
        {
          0: "Jan",
          1: "Feb",
          2: "Mar",
          3: "Apr",
          4: "May",
          5: "Jun",
          6: "Jul",
          7: "Aug",
          8: "Sep",
          9: "Oct",
          10: "Nov",
          11: "Dec",
        }[date.getMonth()]
      } ${date.getHour()}:${date.getMinutes()}`
    );

    // console.log(DATE);
  }, 1000);
  return (
    <Container>
      <div className="elements">Activities</div>
      <div className="elements">{DATE}</div>
      <div className="elements"></div>
    </Container>
  );
}

const Container = styledComponents.header`
background-color: var(--nav-bg);
height:27px;
color: var(--nav-text);
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
font-size: 14px;
`;
