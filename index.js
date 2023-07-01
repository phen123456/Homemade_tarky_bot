const { Client, Events, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, //Allows Bot to receive messages
        GatewayIntentBits.GuildMessages, //Allows Bot to receive messages
        GatewayIntentBits.MessageContent,
    ]
})

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', c => {
    if (c.content === 'ping') {
        c.reply('pong')
    }
});

client.login(process.env.TOKEN)