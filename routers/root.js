const router = require('express').Router();

router.get('/', (req, res)=>{
   res.render('index', {title: 'Kennedy Watches and Premium Accessories'})
});

module.exports = router;