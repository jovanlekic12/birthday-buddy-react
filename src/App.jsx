import { useState } from "react";
import Birthday from "./birthdays.jsx";
import birthdays from "./data.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section>
          {birthdays.map((birthday) => {
            return birthdays && <Birthday key={birthday.id} {...Birthday} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
