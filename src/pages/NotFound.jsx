import React from "react";
import Seo from "../components/SEO";
import TitleBanner from "../components/TitleBanner";

const NotFound = () => {
  const metaData = [
    {
      name: "keywords",
      content: "404, not found, page not found, error",
    },
  ];
  return (
    <div>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        meta={metaData}
      />
      <TitleBanner text="Page Not Found" />
      <p>The page you are looking for could not be found.</p>
    </div>
  );
};

export default NotFound;
