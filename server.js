const app = require('./api');
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

