import { Command } from "../types/Command";

const ping: Command = {
	name: "ping",
	description: "Glow replies with a message confirming its presence",
	execute: (message) => {
		message.reply("🦋 Glow is present!");
	},
};

export default ping;
