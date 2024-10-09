//seo hook
import {useEffect} from "react";
import {Helmet} from "react-helmet-async";

const useSEO = (title, description) => {
  useEffect(() => {
    // Set the document title and meta description
    document.title = title;
    // You can handle more meta tags here if needed
  }, [title, description]);

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default useSEO;
