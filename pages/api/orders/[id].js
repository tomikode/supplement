import connect from "../../../database/connection";
import Order from "../../../database/order";

const updateOrder = async (req) => {
	const orderId = req.query.id;
	const newDetails = req.body;
	return await Order.findByIdAndUpdate(orderId, newDetails, {
		new: true,
	});
};

const deleteOrder = async (req) => {
	const orderId = req.query.id;
	return await Order.findByIdAndDelete(orderId);
};

export default function (req, res) {
	const method = req.method;
	console.log(method + " order");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" };
	switch (method) {
		case "PUT":
			result = updateOrder(req);
			res.json(result);
			break;
		case "DELETE":
			result = deleteOrder(req);
			res.json(result);
			break;
		default:
			res.status(400).json(result);
			break;
	}
}
