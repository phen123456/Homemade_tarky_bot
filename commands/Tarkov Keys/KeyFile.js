const { SlashCommandBuilder } = require('discord.js'); //class to allow for / commands
const { EmbedBuilder  } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() //provide command defintion shown above for registering to Discord
        .setName('key')
        .setDescription('List of keys and their information')
        .addStringOption((option) =>
        option
            .setName('name')
            .setDescription('What action should be taken with the users points?')
            .setAutocomplete(true)
            .setRequired(true),
        ),
        async autocomplete(interaction, client) {
            const focusedValue = interaction.options.getFocused().toLowerCase();
            const choices = [
                            /* Factory Keys */
                            "Factory Emergency Exit Key", //also customs key
                            "Pumping Station Back Door Key", 
                            "Pumping Station Front Door Key",
                            
                            /*Customs Keys */
                            "Gas Station Office Key",
                            "Gas Station Storage Room Key",
                            "Military Checkpoint Key",
                            "Unknown Key",
                            "Usec Stash Key",
                            "Dorm Guard Desk Key",
                            "Dorm Room 104 Key",
                            "Dorm Room 105 Key",
                            "Dorm Room 110 Key",
                            "Dorm Room 114 Key",
                            "Dorm Room 206 Key",
                            "Dorm Room 103 Key",
                            "Dorm Room 108 Key",
                            "Dorm Room 118 Key",
                            "Dorm Room 203 Key",
                            "Dorm Room 204 Key",
                            "Dorm Room 214 Key",
                            "Dorm Room 218 Key",
                            "Dorm Room 220 Key",
                            "Dorm Room 303 Key",
                            "Dorm Room 306 Key",
                            "Dorm Room 308 Key",
                            "Dorm Room 315 Key",
                            "Dorm Room 314 Marked Key",
                            "Machinery Key",
                            "Portable Bunkhouse Key",
                            "Portable Cabin Key",
                            "Trailer Park Portable Cabin Key",
                            "Tarcone Director's Office Key"
                            ];
            const filtered = choices.filter((choice) => 
                choice.toLowerCase().includes(focusedValue));
        await interaction.respond(
            filtered.map((choice) => ({name: choice, value: choice }))
        );    
        },

        async execute (interaction, client) {
            const string = interaction.options.getString('name');
            switch(string) {
                case "Factory Emergency Exit Key":
                    const exampleEmbed = new EmbedBuilder()
                    .setColor("#0099ff")
                    .setTitle("Pong")
                    .setDescription("Some description here");
                    await interaction.reply({ embeds: [exampleEmbed] });
                    break;
                case "Pumping Station Back Door Key":
                    await interaction.reply({content: 'an old soviet \n factory key labeled "Pumping Station". ' + 
                    'optional key for Sanitary Standards - Part 1'});
                    break;
                case "Pumping Station Front Door Key":
                    await interaction.reply({content: 'Useless'});
                    break;
            }
        },
    
};
