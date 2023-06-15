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
          <button className="support-button">Танцюристи</button>
          <button className="support-button">Тренери</button>
          <button className="support-button">Судді</button>
          <button className="support-button">Батьки</button>
          <button className="support-button">Інші</button>
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
