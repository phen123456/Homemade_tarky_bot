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

/*------------- Factory Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                case "Factory Emergency Exit Key":
                    const faccus_EmergcExit_Embed = new EmbedBuilder()
                    .setColor("#000000")
                    .setTitle("Factory Emergency Exit Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Factory_emergency_exit_key")
                    .setThumbnail('attachment://FacCus_EmrgcExit.png')
                    .setDescription("A somewhat fragile factory emergency exit door key.")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Factory, Customs, Shoreline.",
                            inline: true
                        },
                        {
                            name: "Doors Opened",
                            value: "__Factory__: Gate 0 Extraction, Med Tent Gate Extraction, Cellars Extraction, Locked room \n" +
                            "__Customs__: Two doors to the guard building of the crane yard next to the new gas station, Door leading to the ZB-013 Extraction in the basement of Stronghold \n" +
                            "__Interchange__: The doors of the fuel tanker trucks \n" +
                            "__Shoreline__: The door of the red truck at the Crane area along the beach",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "__Factory Locked Room__: 1x Jacket, One weapon spawn, Loose loot, Portable bunkhouse key spawn loaction \n" +
                            "__Customs Guard Building__: 1x filing cabinet, 1x wooden crate (5x2), Loose loot, TerraGroup Labs arsenal storage room key spawn (On shelf under the telephone)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "32,199₽",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "__Customs__: Next to broken TV on the guard desk, 3 Story Dorms \n" +
                            "__Customs__: Blue locker in large building near PC truck",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "__Jaeger LL2__: 1 Factory Emergency Exit Key(used) + 4 Iskra Ration Packs + 1 MRE Ration Pack",
                            inline: false
                        },
                        {
                            name: "Extraction",
                            value: "__Factory__: Gate 0, Cellars, Medical Tent Gates \n" + 
                            "__Customs__: ZB-013",
                            inline: false
                        },
                    )
                    await interaction.reply({ embeds: [faccus_EmergcExit_Embed], files: ['././Images/Factory/FacCus_EmrgcExit.png'] });
                    break;

                case "Pumping Station Back Door Key":
                    const PSBD_Embed = new EmbedBuilder()   
                    .setColor("#000000")
                    .setTitle("Pumping Station Back Door Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Pumping_station_back_door_key")
                    .setThumbnail('attachment://Fac_PSBD.png')
                    .setDescription("An old soviet factory key labeled \"Pumping Station\"")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Factory",
                            inline: true
                        },
                        {
                            name: "Doors Opened",
                            value: "Pumping Station in Factory",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (misc.)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,230",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "__Factory__: On a bench in the locker room 2nd floor of office building",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [PSBD_Embed], files: ['././Images/Factory/Fac_PSBD.png'] });
                    break;	

                case "Pumping Station Front Door Key":
                    await interaction.reply({content: 'Useless'});
                    break;

/*------------- Custom Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
            }
        },
    
};
