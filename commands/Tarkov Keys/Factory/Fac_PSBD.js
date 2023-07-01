const { SlashCommandBuilder } = require('discord.js'); //class to allow for / commands

module.exports = {
    data: new SlashCommandBuilder() //provide command defintion shown above for registering to Discord
        .setName('pumpingstationbackdoorkey') //no capitals no spaces
        .setDescription('Replies with Pumping Station Back Door Key statistics'),
    async execute(interaction) {    //Contain the functionality to run from our event handler when the command is used
        await interaction.reply('an old soviet factory key labeled "Pumping Station". optional key for Sanitary Standards - Part 1');
    },
};
