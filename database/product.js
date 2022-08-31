import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock: Number,
    size: String,
})

const product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default product