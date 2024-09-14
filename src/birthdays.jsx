import React from "react";
import birthdays from "./data.js";

function Birthday() {
  const [id, name, age, image] = birthdays;
  return (
    <>
      <article id={id}>
        <img src={image} alt="404" />
        <div>
          <h3>{name}</h3>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
}

export default Birthday;
