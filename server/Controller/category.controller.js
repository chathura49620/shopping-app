var category =  require("../Model/category.model");

exports.create = (req,res)=>{
    const cat = new category({
        categoryName:req.body.categoryName,
        
    })  

    cat
    .save(cat)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create category operation"
        });
    });

}