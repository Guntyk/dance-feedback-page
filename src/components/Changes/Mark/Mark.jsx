export default function Mark({ id, title, text }) {
  return (
    <li className="changes-mark">
      <span className="mark-title">
        <span className="text">{title}</span>
        <span className="number">0{id}</span>
      </span>
      <hr className="mark-line" />
      <p className="mark-text">{text}</p>
    </li>
  );
}
