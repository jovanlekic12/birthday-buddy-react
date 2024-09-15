import React from "react";
import "./Buddy.css";
function Buddy(props) {
  const { id, name, age, image, handleDeleteBirthday } = props;
  return (
    <article className="birthday">
      <div className="user">
        <img className="profile__image" src={image} alt="user image" />
        <div className="user__info">
          <h3 className="user__name"> {name} </h3>
          <p className="user__age"> {age} years</p>
        </div>
      </div>
      <button className="delete__btn" onClick={() => handleDeleteBirthday(id)}>
        {" "}
        X{" "}
      </button>
    </article>
  );
}

export default Buddy;
