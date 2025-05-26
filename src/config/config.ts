import { PUBLIC_API_URL } from '$env/static/public';

interface Config {
	apiUrl: string;
}

const config: Config = {
	apiUrl: PUBLIC_API_URL || "http://localhost:3000",
};

console.log(config.apiUrl)

export default config;
