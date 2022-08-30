import mongoose from "mongoose";

const main = async () => {
	if (mongoose.connections[0].readyState === 0) {
        console.log('inside')
		const uri = process.env.MONGODB_URI
		await mongoose.connect(uri);
		console.log("connected");
	}
};

export default main;
