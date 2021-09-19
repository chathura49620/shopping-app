const  route  = require('express');
const productcontoller = require('../Controller/product.controller');

//product get route
route.get('/api/product',productcontoller.find);

//product add route
route.post('/api/product',productcontoller.create);

//product update route
route.put('/api/product',productcontoller.update);

//product delete route
route.delete('/api/product',productcontoller.delete);


