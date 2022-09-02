import connect from "../../database/connection";
import Order from "../../database/Order";

const getOrders = async () => {
	return await Order.find({});
};

const createOrder = async (req) => {
	const newOrder = new Order(req.body);
	await newOrder.save();
	return newOrder;
};

export default async function (req, res) {
	const method = req.method;
	console.log(method + " order");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" }
	switch (method) {
		case "GET":
			result = await getOrders();
			res.status(200).json(result);
			break;
		case "POST":
			result = await createOrder(req);
			res.status(201).json(result);
			break;
		default:
			res.status(400).json(result)
			break;
	}
}
