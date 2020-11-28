const express = require("express");
const siteRouter = express.Router();

const axios = require("axios");

// GET          /countries
siteRouter.get("/countries", (req, res, next) => {
  // Make a call to Countries API
  // once we have the response(data)
  // inject the data into Countries

  axios
    .get("https://restcountries.eu/rest/v2")
    .then((response) => {
      const countriesArr = response.data;

      const props = { countriesArr: countriesArr };
      // const props = { countriesArr };

      res.render("Countries", props);
    })
    .catch((err) => console.log(err));
});

module.exports = siteRouter;
