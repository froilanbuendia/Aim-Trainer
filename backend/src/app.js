const express = require('express');
const v1healthcheck = require('./healthCheckRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 8000;
// const database = proc.env.DATABASE_URL;
app.use('/api/hc', v1healthcheck);
app.use('/api/v1/users', v1UserRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
