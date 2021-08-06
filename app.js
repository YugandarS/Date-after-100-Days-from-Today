const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const dateAfterDays = addDays(new Date(), 100);
  response.send(
    `${dateAfterDays.getDate()}/${
      dateAfterDays.getMonth() + 1
    }/${dateAfterDays.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
