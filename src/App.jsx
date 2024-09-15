import { useState } from "react";
import Buddy from "./buddy.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  const [birthdays, setBirthdays] = useState(data);

  function handleDeleteAll() {
    const newArray = [];
    setBirthdays(newArray);
  }

  function handleDeleteBirthday(id) {
    setBirthdays((prev) => prev.filter((birthday) => birthday.id !== id));
  }

  return (
    <main className="container">
      <h1> {birthdays.length} Birthdays Today </h1>
      <section className="birthday__section">
        {birthdays.map((birthday) => {
          return (
            birthdays && (
              <Buddy
                key={birthday.id}
                {...birthday}
                handleDeleteBirthday={handleDeleteBirthday}
              />
            )
          );
        })}
      </section>
      <button className="clear-all-btn" onClick={handleDeleteAll}>
        {" "}
        Clear All{" "}
      </button>
    </main>
  );
}

export default App;
