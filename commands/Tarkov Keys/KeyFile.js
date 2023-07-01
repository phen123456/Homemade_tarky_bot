const { SlashCommandBuilder } = require('discord.js'); //class to allow for / commands

module.exports = {
    data: new SlashCommandBuilder() //provide command defintion shown above for registering to Discord
        .setName('key')
        .setDescription('List of keys and their information')
        .addStringOption((option) =>
        option
            .setName('name')
            .setDescription('What action should be taken with the users points?')
            .addChoices(
                { name: 'Factory Emergency Exit Key', value: 'faccus_emrgcexit' },
                { name: 'Pumping Station Back Door Key', value: 'fac_psbd' },
                { name: 'Pumping Stationsdf Front Door Key', value: 'fac_psfd' },
            )
            .setRequired(true),
        ),
        

        async execute (interaction) {
            const string = interaction.options.getString('name');

            switch(string) {
                case 'fac_psbd':
                    await interaction.reply({content: 'an old soviet factory key labeled "Pumping Station". optional key for Sanitary Standards - Part 1'});
            }
        }
    
};
