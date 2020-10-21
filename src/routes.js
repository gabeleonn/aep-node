const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  return res.send('Hello World');
});

router.get('/', (req, res) => {
  return res.send('Hello World');
});

module.exports = router;
