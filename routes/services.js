var express = require('express');
var router = express.Router(); 


const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');


/* GET users listing. */
router.get('/', function(req, res, next) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
  console.log("============================in service========================");
sdk.auth('rnd_pryUR8OZ9HTgZ2eTPLmMcLQDwrfW');
console.log("============================after auth========================");
sdk.getServices({limit: '20' })
  .then(({data}) => {
    console.log("-----------------");
    console.log(data);
    res.render('service', { title: 'services 🧾' ,data})})
  .catch(err => console.error(err));
});

module.exports = router;
