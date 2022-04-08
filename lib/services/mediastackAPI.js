// require("dotenv").config();
// const fetch = require("node-fetch");

// Munging function to map Mediastack res into the format of our client-side 'NewsItem' TypeScript Interface:

const formatNewsResponse = (resObj) => {
  // Isolate the array with the news stories (no metadata):
  const stories = resObj.data;
  // Map through the response data and format into object:
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

module.exports = { formatNewsResponse };
