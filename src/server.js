const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const routes = require("./routes");
const logger = require("./middleware/logger");
const helpers = require("./utils/helpers");

const PORT = 3000;

const app = express();

const handlebarsOptions = { helpers };

const hbs = handlebars.create(handlebarsOptions);

app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "handlebars");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(routes);

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`\nServer running on http://localhost:${PORT}\n`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

init();
