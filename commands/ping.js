const { SlashCommandBuilder } = require('discord.js'); //class to allow for / commands

module.exports = {
    data: new SlashCommandBuilder() //provide command defintion shown above for registering to Discord
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {    //Contain the functionality to run from our event handler when the command is used
        await interaction.reply('Pong!');
    },
};
