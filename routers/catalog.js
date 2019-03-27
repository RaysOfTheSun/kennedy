const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('catalog', {title: 'Kennedy | Watches'});
});

router.get('/catalog/:category', (req, res) => {
    res.render('catalog', {title: 'Kennedy | Watches'});
});

module.exports = router;