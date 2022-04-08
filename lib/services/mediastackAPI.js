require("dotenv").config();
const fetch = require("node-fetch");

// Test API Fetch:

const getNews = async () => {
  const response = await fetch("url");
  const data = await response.json();

  console.log("Fetch:", data);
};

// Munging Function:

// const formatNewsResponse = async (resObj) => {
//   // GET from the API endpoint for random news
//   // const response = await fetch("url");
//   // const resObj = await response.json();
//   // const stories = resObj.data;
//   // Map through the response data and munge
//   const formattedNews = resObj.data.map((story) => {
//     return {
//       author: story.author,
//       title: story.title,
//       source: story.source,
//       description: story.description,
//       url: story.url,
//       image: story.image,
//       published: story.published_at,
//     };
//   });
//   console.log("-----FN:", formattedNews);
//   return formattedNews;
// };

const testNewsResponse = async () => {
  // GET from the API endpoint for random news
  const response = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MS_ACCESS_KEY}`
  );
  const resObj = await response.json();
  const stories = resObj.data;
  // Map through the response data and munge
  const formattedNews = stories.map((story) => {
    return {
      author: story.author,
      title: story.title,
      source: story.source,
      description: story.description,
      url: story.url,
      image: story.image,
      published: story.published_at,
    };
  });
  console.log("-----FN:", formattedNews);
  return formattedNews;
};

testNewsResponse();

module.exports = { getNews, testNewsResponse };
