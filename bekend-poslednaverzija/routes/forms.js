var express = require('express');
var router = express.Router();
const controller = require('../controllers/forms');


// router.use(jwt({ secret: 'shhhhhhared-secret', algorithms: ['HS256']}).unless({path: ['/token']}));
router
      .post('/', controller.sentEmail)


module.exports = router;

