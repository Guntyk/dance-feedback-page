import { getPeople, putPerson } from "../api/requests";
import { useEffect, useState } from "react";

export function usePeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((response) => {
      if (response) {
        setPeople(response.at(-1).data);
      } else {
        alert("Getting people error");
      }
    });
  }, []);

  const createPerson = (personObj) => {
    putPerson(personObj).then(([createError, createdPerson]) => {
      if (createdPerson) {
        setPeople((prevPeople) => [...prevPeople, createdPerson.data]);
      } else {
        console.log(createError);
        alert("Creating error");
      }
    });
  };
  return {
    people,
    createPerson,
    setPeople,
  };
}
