import mongoose from "mongoose";

const main = async () => {
	if (mongoose.connections[0].readyState === 0) {
        console.log('inside')
		const uri =
			"mongodb+srv://fullstack:fullstack@fullstack.90had.mongodb.net/?retryWrites=true&w=majority";
		await mongoose.connect(uri);
		console.log("connected");
	}
};

export default main;
