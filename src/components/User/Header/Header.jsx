import React from "react";
import About from "../About/About";
import "./css/Header.css";
import { useGetWebsiteDetails } from "../../../shared/queries";
const Header = () => {
  const website_info = useGetWebsiteDetails();
  if (website_info.status === "error") {
    return <div>error...</div>;
  }
  if (website_info.status === "loading") {
    return <div>Loading...</div>;
  } else
    return (
      <div className="d-flex align-items-center justify-content-around background_image ">
        <div className="about ms-3 me-3">
          <About />
        </div>
        <div className="d-none d-sm-block me-3 ">
          <img
            src={process.env.REACT_APP_API_URL + website_info.data.logo}
            height={200}
            className="img rounded-circle"
            alt="or logo"
          />
        </div>
      </div>
    );
};

export default Header;
