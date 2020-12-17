const fetch = require('node-fetch');

const request = async() => {
  const response = await fetch();
  const html = await response.text();

  console.log(html);
};

module.exports = request;
