import dotenv from 'dotenv';

dotenv.config();

interface Config {
	apiUrl: string;
}

const config: Config = {
	apiUrl: process.env.PUBLIC_API_URL || "http://localhost:3000",
};

export default config;
