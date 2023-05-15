import { useQuery } from "react-query";
const fetchRecomendations = async () => {
  const res = await fetch(
    process.env.REACT_APP_API_URL +
      "/reviews/" +
      process.env.REACT_APP_WEBSITE_ID
  );
  return await res.json();
};

export function Get_Recomendations() {
  const { data, status } = useQuery("reviews", fetchRecomendations);
  return { data: data, status: status };
}

export const Add_Recomendations = async (name, review, rating) => {
  const website_id = process.env.REACT_APP_WEBSITE_ID;
  const data = { website_id, name, review, rating };
  return await fetch(process.env.REACT_APP_API_URL + "/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
