import connect from "../../database/connection";
import Product from "../../database/product";

const getProducts = async () => {
	return await Product.find({});
};

const createProduct = async (req) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	return newProduct;
};

const updateProduct = async (req) => {
    
};

export default async function (req, res) {
	const method = req.method;
    console.log(method)
	connect().catch((err) => console.log(err));
	switch (method) {
		case "GET":
			const products = await getProducts();
			res.status(200).json(products);
			break;
		case "POST":
			const newProduct = await createProduct(req);
			res.status(201).json(newProduct);
			break;
		case "PUT":
			const result = updateProduct(req);
			break;
	}
}
