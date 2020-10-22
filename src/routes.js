const { Router } = require('express');

const router = new Router();

const { userRoutes } = require('./User/');

router.use('/user', userRoutes);



module.exports = router;
