const router = require('express').Router();

router.get('/', (req, res)=>{
   res.render('index', {title:'Kennedy Jewelries and Accessories'})
});

module.exports = router;