const express = require("express");
const v1UserRouter = require("./v1/routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/v1", v1UserRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
