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

const getProjectsQuery = async () => {
  const url = new URL(process.env.REACT_APP_API_URL + "/projects");
  const params = {
    website_id: process.env.REACT_APP_WEBSITE_ID,
    is_in_use: "True",
  };
  url.search = new URLSearchParams(params).toString();
  const res = await fetch(url);
  return await res.json();
};

const getProjectsImagesQuery = async (id) => {
  const url = new URL(process.env.REACT_APP_API_URL + "/project_images/" + id);
  const res = await fetch(url);
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

export const useGetProjects = () =>
  useQuery(`${getProjectsQuery.name}`, getProjectsQuery);

export const useGetProjectsImages = (id) =>
  useQuery(`${getProjectsImagesQuery.name + id}`, () =>
    getProjectsImagesQuery(id)
  );
