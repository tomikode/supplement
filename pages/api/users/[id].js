import connect from "../../../database/connection";
import User from "../../../database/user";

const updateUser = async (req) => {
	const userId = req.query.id;
	const newDetails = req.body;
	return await User.findByIdAndUpdate(userId, newDetails, {
		new: true,
	});
};

const deleteUser = async (req) => {
	const userId = req.query.id;
	return await User.findByIdAndDelete(userId);
};

export default function (req, res) {
	const method = req.method;
	console.log(method + " user");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" };
	switch (method) {
		case "PUT":
			result = updateUser(req);
			res.json(result);
			break;
		case "DELETE":
			result = deleteUser(req);
			res.json(result);
			break;
		default:
			res.status(400).json(result);
			break;
	}
}
