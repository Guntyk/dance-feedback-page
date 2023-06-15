import axios from "axios";

export const backend = axios.create({
  baseURL: "https://sgostu-backend.download/api",
});

backend.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

export const getPeople = () =>
  backend.get(
    "/people?fields=id,name,surname,town,role&sort=createdAt&pagination[pageSize]=3000"
  );
export const putPerson = (person) =>
  backend.post("/people", person, {
    headers: { "Content-Type": "application/json" },
  });
