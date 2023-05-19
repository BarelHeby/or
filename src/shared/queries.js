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

const addRecommendationQuery = async ({name, review, rating}) => {
    const postData = { website_id: process.env.REACT_APP_WEBSITE_ID, name, review, rating };
    const response = await fetch(process.env.REACT_APP_API_URL + 
        "/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return await response.json();
}

export const useAddRecommendation = (recommendation) => 
  useQuery(`${addRecommendationQuery.name}`, addRecommendationQuery(recommendation));

export const useGetRecommendations = () => 
  useQuery(`${getRecommendationsQuery.name}`, getRecommendationsQuery);

export const useGetWebsiteDetails = () => 
    useQuery(`${getWebsiteDetailsQuery.name}`, getWebsiteDetailsQuery);


