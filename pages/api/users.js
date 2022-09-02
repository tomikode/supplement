import connect from "../../database/connection";
import User from "../../database/user";

const getUsers = async () => {
	return await User.find({});
};

const createUser = async (req) => {
	const newUser = new User(req.body);
	await newUser.save();
	return newUser;
};

export default async function (req, res) {
	const method = req.method;
	console.log(method + " user");
	connect().catch((err) => console.log(err));
	let result = { error: "Something went wrong" }
	switch (method) {
		case "GET":
			result = await getUsers();
			res.status(200).json(result);
			break;
		case "POST":
			result = await createUser(req);
			res.status(201).json(result);
			break;
		default:
			res.status(400).json(result)
			break;
	}
}
