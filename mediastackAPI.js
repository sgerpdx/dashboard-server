const fetch = require("node-fetch");

const getNews = async () => {
  const response = await fetch(
    "http://api.mediastack.com/v1/news?access_key=ebcb8882d755d1ee0fcaf0aea55c0e52"
  );
  const data = await response.json();

  console.log("Fetch:", data);
};

getNews();
