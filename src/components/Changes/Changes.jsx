import { markers } from "../../data.js";
import Mark from "./Mark/Mark.jsx";
import "./Changes.css";

export default function List() {
  return (
    <section>
      <ol className="changes">
        {markers.map((marker) => (
          <Mark
            id={marker.id}
            title={marker.title}
            text={marker.text}
            key={marker.id}
          />
        ))}
      </ol>
    </section>
  );
}
