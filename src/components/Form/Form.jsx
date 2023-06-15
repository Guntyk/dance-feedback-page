import { useState } from "react";
import { usePeopleContext } from "../../context";
import "./Form.css";

export default function Form() {
  const [filled, setFilled] = useState(false);
  const { createPerson } = usePeopleContext();
  function handleSubmit(e) {
    e.preventDefault();
    const person = {
      data: {
        name: e.target.name.value,
        surname: e.target.surname.value,
        town: e.target.town.value,
        role: e.target.role.value,
      },
    };
    createPerson(JSON.stringify(person));
    setFilled(true);
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.town.value = "";
    e.target.role.value = "Роль";
  }
  return (
    <section className="support-form">
      {!filled ? (
        <>
          <h2 className="title">Доєднайся до списку!</h2>
          <hr className="line" />
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-input"
              required
              type="text"
              name="name"
              placeholder="Ім'я"
            />
            <input
              className="form-input"
              required
              type="text"
              name="surname"
              placeholder="Прізвище"
            />
            <input
              className="form-input"
              required
              type="text"
              name="town"
              placeholder="Місто"
            />
            <select className="form-input select" required name="role">
              <option disabled default value="Роль">
                Роль
              </option>
              <option value="Танцюрист">Танцюрист</option>
              <option value="Тренер">Тренер</option>
              <option value="Суддя">Суддя</option>
              <option value="Батько">Батько</option>
              <option value="Мати">Мати</option>
            </select>
            <button type="submit" className="form-btn" id="form-btn">
              Підтримати
            </button>
          </form>
        </>
      ) : (
        <h2 className="title">Дякуємо за підтримку!</h2>
      )}
    </section>
  );
}
