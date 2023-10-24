import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ title, description, meta }) => {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
};

export default Seo;
