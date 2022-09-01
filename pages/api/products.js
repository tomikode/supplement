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

export default async function (req, res) {
	const method = req.method;
	console.log(method + " product");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" }
	switch (method) {
		case "GET":
			result = await getProducts();
			res.status(200).json(result);
			break;
		case "POST":
			result = await createProduct(req);
			res.status(201).json(result);
			break;
		default:
			res.status(400).json(result)
			break;
	}
}
