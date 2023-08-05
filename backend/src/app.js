const express = require('express');
const cors = require('cors');
const v1healthcheck = require('./routes/healthCheckRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: '*',
  }),
);
app.use('/api/hc', v1healthcheck);
app.use('/api/v1/users', v1UserRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
