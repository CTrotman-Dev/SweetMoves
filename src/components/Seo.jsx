import React from "react";
import Helmet from "react-helmet";

const Seo = ({ title, description, meta }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {meta &&
        meta.map((element) => (
          <meta
            key={element.name}
            name={element.name}
            content={element.content}
          />
        ))}
    </Helmet>
  );
};

export default Seo;
