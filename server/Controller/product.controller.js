var product = require("../Model/product.model");

//carete new product 
exports.create = (req,res) => {
        
        const pro = new product({
            productName:req.body.productName,
            productPrice:req.body.productPrice
        })

        pro
            .save(pro)
            .then(data1 => {
                res.send(data1)
            })
            .catch(err => {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create product operation"
                });
            });


}