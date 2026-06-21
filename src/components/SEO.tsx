import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>

      <title>
        Yogya Coaching Classes Kanpur | Class 1 to 12 Coaching Institute
      </title>

      <meta
        name="description"
        content="Yogya Coaching Classes Kanpur provides quality education for Class 1 to 12 students. UP Board, CBSE, CISCE all subjects coaching with weekly tests and personal attention."
      />

      <meta
        name="keywords"
        content="
        Yogya Coaching Classes,
        Best coaching classes in Kanpur,
        Class 1 to 12 coaching Kanpur,
        CBSE coaching Kanpur,
        UP Board coaching Kanpur,
        Maths Science coaching Kanpur
        "
      />

      <meta name="author" content="Yogya Coaching Classes" />


      {/* Open Graph for Google/Facebook sharing */}

      <meta
        property="og:title"
        content="Yogya Coaching Classes Kanpur"
      />

      <meta
        property="og:description"
        content="Best coaching institute in Kanpur for Class 1 to 12 students."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://your-domain.com"
      />


      {/* Mobile SEO */}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />


      {/* Google verification (live hone ke baad add karna) */}

      {/* 
      <meta 
      name="google-site-verification"
      content="YOUR_CODE"
      />
      */}


    </Helmet>
  );
};


export default SEO;