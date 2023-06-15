import { usePeopleContext } from "../../context";
import { peopleRoles } from "../../data";
import Person from "./Person/Person";
import { useEffect, useState } from "react";
import "./List.css";

export default function List() {
  const [peopleList, setPeopleList] = useState([]);
  const [peopleFilter, setPeopleFilter] = useState("Усі");
  const { people } = usePeopleContext();
  const marker = document.getElementById("marker");
  const buttons = document.querySelectorAll(".support-button");

  useEffect(() => {
    if (people.length !== 0) {
      setPeopleList(people);
    }
  }, [people]);

  useEffect(() => {
    if (peopleFilter === "Усі") {
      setPeopleList(people);
    } else if (peopleFilter === "Танцюристи") {
      setPeopleList(
        people.filter((person) => person.attributes.role === "Танцюрист")
      );
    } else if (peopleFilter === "Тренери") {
      setPeopleList(
        people.filter((person) => person.attributes.role === "Тренер")
      );
    } else if (peopleFilter === "Судді") {
      setPeopleList(
        people.filter((person) => person.attributes.role === "Суддя")
      );
    } else if (peopleFilter === "Батьки") {
      setPeopleList(
        people.filter(
          (person) =>
            person.attributes.role === "Батько" ||
            person.attributes.role === "Мати"
        )
      );
    } else if (peopleFilter === "Інші") {
      setPeopleList(
        people.filter((person) => person.attributes.role === "Інше")
      );
    }
  }, [peopleFilter]);

  function indicator(e) {
    setPeopleFilter(e.innerText);
    buttons.forEach((button) => button.classList.remove("active"));
    e.classList.add("active");
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }

  return (
    <section className="support">
      <div className="support-header">
        <h2 className="title">Нас вже підтримали</h2>
        <div className="support-buttons">
          <div className="marker" id="marker"></div>
          <button
            className="support-button active"
            onClick={(e) => {
              indicator(e.target);
            }}
          >
            Усі
          </button>
          {peopleRoles.map((role) => (
            <button
              className="support-button"
              onClick={(e) => {
                indicator(e.target);
              }}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <hr className="line support-line" />
      <span className="support-number">
        Загальна кількість: {peopleList.length}
      </span>
      <ul className="support-list">
        {peopleList.length !== 0
          ? peopleList.map((person) => (
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
