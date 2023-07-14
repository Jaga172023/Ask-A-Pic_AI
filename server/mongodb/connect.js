import mongoose from "mongoose";

const connectDB = (url) => {
	mongoose.set("strictQuery", true);

	mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("MongoDB Connected"))
		.catch((error) => {
			console.error("failed to connect with mongo");
			console.error(error);
		});
};

export default connectDB;
