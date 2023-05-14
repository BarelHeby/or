import { useQuery } from "react-query";
const FetchWebsite = async () => {
  const res = await fetch(
    process.env.REACT_APP_API_URL +
      "/websites/" +
      process.env.REACT_APP_WEBSITE_ID
  );
  return res.json();
};
export function Get_website_detailes() {
  const { data, status } = useQuery("website_data", FetchWebsite);
  return { data: data, status: status };
}
