import { Client } from "discord.js";

const clientReady = (client: Client) => {
	client.once("clientReady", () => {
		console.log(`${client.user?.tag} is online!`);
	});
};

export default clientReady;
