import Person from "./Person/Person";
import { people } from "../../data";
import "./List.css";

export default function List() {
  return (
    <section className="support">
      <div className="support-header">
        <h2 className="title">Хто нас вже підтримав</h2>
        <div className="support-buttons">
          <button className="support-button">1</button>
          <button className="support-button">2</button>
        </div>
      </div>
      <hr className="line support-line" />
      <ul className="support-list">
        {people.map((person) => (
          <Person
            name={person.name}
            surname={person.surname}
            town={person.town}
            role={person.role}
          />
        ))}
      </ul>
    </section>
  );
}
