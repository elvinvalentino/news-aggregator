import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: {
		"X-Api-Key": process.env.REACT_APP_API_KEY,
	},
});
