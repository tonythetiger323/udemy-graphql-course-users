const express = require("express");
const favicon = require("serve-favicon");
const expressGraphQL = require("express-graphql");
const path = require("path");
const schema = require("./schema/schema");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("App is listening on PORT 4000");
});
