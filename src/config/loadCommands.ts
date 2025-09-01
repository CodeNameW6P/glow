import fs from "fs";
import path from "path";
import { Command } from "../types/Command";

export const loadCommands = (): Map<string, Command> => {
	const commands = new Map<string, Command>();
	const commandsPath = path.join(__dirname, "..", "commands");
	const commandFiles = fs
		.readdirSync(commandsPath)
		.filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

	for (const file of commandFiles) {
		const command: Command = require(path.join(commandsPath, file)).default;
		commands.set(command.name, command);
	}

	return commands;
};
