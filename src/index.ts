import { Client, GatewayIntentBits } from "discord.js";
import { TOKEN } from "./config/env";
import clientReady from "./events/clientReady";
import messageCreate from "./events/messageCreate";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

clientReady(client);
messageCreate(client);

client.login(TOKEN);
