import { usePeopleContext } from "../../context";
import Person from "./Person/Person";
import "./List.css";

export default function List() {
  const { people } = usePeopleContext();
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
        {people.length !== 0
          ? people.map((person) => (
              <Person
                name={person.attributes.name}
                surname={person.attributes.surname}
                town={person.attributes.town}
                role={person.attributes.role}
                key={person.id}
              />
            ))
          : "Завантаження..."}
      </ul>
    </section>
  );
}
