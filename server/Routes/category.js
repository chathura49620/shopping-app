const route = require('express');
const categorycontroller = require ('../Controller/category.controller');


//category get route
route.get('api/category',categorycontroller.find);

//category add route
route.post('api/category',categorycontroller.create);

//category update route
route.put('api/category',categorycontroller.update);

//category delete route
route.delete('api/category',categorycontroller.delete);


