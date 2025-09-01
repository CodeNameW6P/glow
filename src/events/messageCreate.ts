import { Client, Message } from "discord.js";
import { loadCommands } from "../config/loadCommands";
import { CONFIG } from "../config/config";

const { prefix } = CONFIG;
const commands = loadCommands();

const messageCreate = (client: Client) => {
	client.on("messageCreate", async (message: Message) => {
		if (message.author.bot || !message.content.startsWith(prefix)) return;

		const input = message.content.slice(prefix.length).trim().toLowerCase();

		const command = Array.from(commands.values()).find((value) =>
			input.startsWith(value.name.toLowerCase())
		);
		if (!command) {
			await message.reply("👀 Glow is unaware of such command.");
			return;
		}

		const argsString = input.slice(command.name.length).trim();
		const args = argsString.length > 0 ? argsString.split(/\s+/) : [];

		try {
			await command.execute(message, args);
		} catch (error) {
			console.error(`Error executing command "${command.name}":`, error);
			await message.reply("⚠️ Somehing went wrong while executing that command.");
		}
	});
};

export default messageCreate;
