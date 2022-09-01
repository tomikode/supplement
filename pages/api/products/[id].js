import connect from "../../../database/connection";
import Product from "../../../database/product";

const updateProduct = async (req) => {
	const productId = req.query.id;
	const newDetails = req.body;
	return await Product.findByIdAndUpdate(productId, newDetails, {
		new: true,
	});
};

const deleteProduct = async (req) => {
	const productId = req.query.id;
	return await Product.findByIdAndDelete(productId);
};

export default function (req, res) {
	const method = req.method;
	console.log(method + " product");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" };
	switch (method) {
		case "PUT":
			result = updateProduct(req);
			res.json(result);
			break;
		case "DELETE":
			result = deleteProduct(req);
			res.json(result);
			break;
		default:
			res.status(400).json(result);
			break;
	}
}
