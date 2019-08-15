const experience_list = [
  {
    title: "Intern Analyst",
    company: "Barclays, Pune",
    type: "Industrial Intern",
    start_year: "2019",
    start_month: "May",
    end_year: "2019",
    end_month: "Jul",
    description: [],

    keywords: ["next.js"],
    important_points: [
      "Developed an e-commerce website featuring user profile, shopping cart, quick view, and a checkout page from scratch.",
      "Used React.js, Bootstrap(Front-end), Express.js(backend) and NeDB (Embedded persistent NoSQL database).",
      "Redeveloped the same website using Next.js featuring server-side rendering for performance, delivering site to non-JavaScript-enabled devices, and allowing rich meta tags.",
      "Refactored the CSS from Bootstrap to styled-components.",
      "Introduced Guess.js with Next.js for predictive HTTP/2 server push of JavaScript bundles. It uses user navigation patterns to determine which pages are most likely to be visited next, thus enabling machine learning-driven user-experiences on the web.",
      "Converted existing web app into a Progressive Web App with Google Workbox for Precaching and offline support."
    ]
  },
  {
    title: "Technology Platform Optimization",
    company: "Global Belly, New York",
    type: "industial Intern",
    start_year: "2018",
    start_month: "May",
    end_year: "2018",
    end_month: "Jul",
    description: "",
    keywords: ["Web enhancement"],
    important_points: [
      "Improve user experience and incorporated the best SEO techniques in existing Shopify website, thereby increasing daily traffic, brand positioning and reduction in loading time of the website from 8 seconds to under 3 seconds.",
      "Worked with Google Webmasters and Google Analytics tool and carried out competitor keyword research to improve site ranking to number #1 on Google Web Search for target keywords."
    ]
  }
];

function getExperiences() {
  experience_list.map((exp, key) => {
    exp["key"] = key;
    return exp;
  });

  return experience_list;
}

module.exports = {
  experiences: getExperiences()
};
