/* Paul Henling and Owen Herber Discord.js Tarkov Key Bot */
/* July 1st 2023 */

/* With help from -
		[
			https://escapefromtarkov.fandom.com/wiki/Keys_%26_Intel // Tarkov Wiki
			https://discordjs.guide/#before-you-begin //Discord.js Documentation
			https://chat.openai.com //For help with functionality, used as a reference and explanation to discord documentation
		]
*/

const fs = require('node:fs'); //File Paths
const path = require('node:path'); //File Paths
const { Client, Collection, Events, GatewayIntentBits, InteractionType } = require('discord.js') //Creating discord api variables
require('dotenv/config') //Gets keys from .env file

const client = new Client({ //Calling Discord Api Functions
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ]
})


/* Following code and loop searches through directories to find matching .js files for importing slash commands */
client.commands = new Collection(); 
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, interaction => {    //Create listener
	console.log(interaction);
});

/* Create asynchronous event */
client.on(Events.InteractionCreate, async interaction => {

	const command = interaction.client.commands.get(interaction.commandName);
	  
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}
	/* If slash command is autocomplete, run following conditional */
	/* As of right now, all our slash commands are autocomplete */  
	if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
		const { commands } = client;
		const { commandName } = interaction;
		const specCommand = commands.get(commandName);
		if (!specCommand) return;
	  
		try {
		await specCommand.autocomplete(interaction, client);
		} catch (err) {
		console.error(err);
		}
	}
	/* If not Slash Command */  
	try {
	await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
		await interaction.followUp({ content: 'There was an error while executing this command! top', ephemeral: true });
		} else {
		await interaction.reply({ content: 'There was an error while executing this command! bottom', ephemeral: true });
		}
	}
});

client.login(process.env.TOKEN)  //Token for authentication