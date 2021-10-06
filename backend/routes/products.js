const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const code = req.body.code;
  const name = req.body.name;
  const category = req.body.category;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);

  const newProduct = new Product({
    code,
    name,
    category,
    quantity,
    price,
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product=> res.json(newProduct))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.code = req.body.code;
      product.name = req.body.name;
      product.category= req.body.category;
      product.quantity = Number(req.body.quantity);
      product.price = Number(req.body.price);

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/viewStock').post((req, res) =>{
    Product.filter(req.params.quantity<10)
    .then(product => {
        product.code = req.body.code;
        product.name = req.body.name;
        product.category= req.body.category;
        product.quantity = Number(req.body.quantity);
        product.price = Number(req.body.price);
  
        product.save()
          .then(() => res.json('product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      }) 
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;