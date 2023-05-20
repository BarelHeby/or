import { useQuery } from "react-query";

const getWebsiteDetailsQuery = async () => {
  const res = await fetch(
    process.env.REACT_APP_API_URL +
      "/websites/" +
      process.env.REACT_APP_WEBSITE_ID
  );
  return await res.json();
};

const getRecommendationsQuery = async () => {
  const res = await fetch(
    process.env.REACT_APP_API_URL +
      "/reviews/" +
      process.env.REACT_APP_WEBSITE_ID
  );
  return await res.json();
};

export const addRecommendationQuery = async ({ name, review, rating }) => {
  if (rating < 1 || rating > 5 || !name || !review) {
    return { error: "Invalid input" };
  }
  const postData = {
    website_id: process.env.REACT_APP_WEBSITE_ID,
    name,
    review,
    rating,
  };
  const response = await fetch(process.env.REACT_APP_API_URL + "/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return response;
};

export const useGetRecommendations = () =>
  useQuery(`${getRecommendationsQuery.name}`, getRecommendationsQuery);

export const useGetWebsiteDetails = () =>
  useQuery(`${getWebsiteDetailsQuery.name}`, getWebsiteDetailsQuery);
