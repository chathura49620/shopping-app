const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
      productName:{type:String,required:true},
      productPrice:{type:Float,required:true},
});

const Product = mongoose.model("product",productSchema);

module.exports = Product;