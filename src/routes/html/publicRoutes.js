const { default: axios } = require("axios");

const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

router.get("/restaurants", async (req, res) => {
  try {
    const getRestaurants = async () => {
      const axiosConfig = {
        method: "GET",
        url: "https://random-data-api.com/api/restaurant/random_restaurant?size=5",
      };

      const { data } = await axios(axiosConfig);
      return data;
    };

    const restaurantsData = await getRestaurants();

    res.status(200).render("restaurants", { restaurantsData });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
