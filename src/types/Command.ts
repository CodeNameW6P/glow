import { Message } from "discord.js";

export interface Command {
	name: string;
	aliases?: string[];
	description: string;
	category?: string;
	execute: (message: Message, args?: string[]) => void | Promise<void>;
}
