process.env.NC_BINARY_BUILD = 'true';
const express = require('express');
const { Noco } = require('nocodb');
const app = express();
const port = process.env.PORT || 8080;
(async () => {
  const server = app.listen(port, () => {
    console.log(`GuruCRM running on port ${port}`);
  });
  app.use(await Noco.init({}, server, app));
})();
