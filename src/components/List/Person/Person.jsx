export default function Person({ name, surname, town, role }) {
  return (
    <li>
      <span>{name + " " + surname}</span>
    </li>
  );
}
