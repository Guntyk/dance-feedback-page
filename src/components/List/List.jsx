import Person from "./Person/Person";
import { people } from "../../data";
import "./List.css";

export default function List() {
  return (
    <section>
      <h2 cla>Хто нас вже підтримав</h2>
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
