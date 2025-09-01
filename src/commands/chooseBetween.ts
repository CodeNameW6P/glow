import { Command } from "../types/Command";

const chooseBetween: Command = {
	name: "choose one between",
	description: "Glow randomly chooses an option between two provided options separated by 'and'",
	execute: (message, args) => {
		const input = args.join(" ");
		const options = input.split(/\s+and\s+/i);

		if (options.length !== 2) {
			message.reply(
				"Please provide exactly two options separated by **and**. For example: `!choose between pizza and sandwich`"
			);
			return;
		}

		const choice = options[Math.floor(Math.random() * options.length)];
		message.reply(`🎲 Glow chooses: ${choice}`);
	},
};

export default chooseBetween;
