import React from "react";
import Seo from "../components/Seo";
import TitleBanner from "../components/TitleBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

      <Header />
      <div className="mainContent">

        <TitleBanner text="Page Not Found" />
        <div className="m-5">
          <p>The page you are looking for could not be found.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
