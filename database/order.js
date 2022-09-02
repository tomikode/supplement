import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderDate: Date,
    deliveryDate: Date,
    streetNumber: String,
    streetAddress: String,
    city: String,
    state: String,
    postcode: String,
    products: [{
        productId: Schema.Types.ObjectId,
        ref: "Product",
        quantity: Number
    }]
})

const order = mongoose.models.order || mongoose.model('Order', orderSchema)

export default order