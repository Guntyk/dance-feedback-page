import "./Person.css";

export default function Person({ name, surname, town, role }) {
  return (
    <li className="person">
      <span className="person-info town">{town}</span>
      <span className="person-info name">{name + " " + surname}</span>
      <span className="person-info role">{role}</span>
    </li>
  );
}
