export default async function loginUser(item) {
  // useEffect
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((data) => data.json());
}
