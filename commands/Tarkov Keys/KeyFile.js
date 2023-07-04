const { SlashCommandBuilder } = require('discord.js'); //class to allow for / commands
const { EmbedBuilder  } = require('discord.js'); //Discord api to allow for embedded messages

module.exports = {
    data: new SlashCommandBuilder() //provide command defintion shown above for registering to Discord
        .setName('key')  //Name of slash command
        .setDescription('List of keys and their information') 
        .addStringOption((option) => //adding a string option to allow for user input, calling it name, setting it to autocomplete and require
        option
            .setName('name')
            .setDescription('Which key would you like information on?')
            .setAutocomplete(true)
            .setRequired(true),
        ),

        /*Auto Complete directly built into the above Slash command */
        async autocomplete(interaction, client) { 
            const focusedValue = interaction.options.getFocused().toLowerCase(); //make everything lowercase
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
                            "USEC Stash Key",
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
                            "Tarcone Director's Office Key",

                            /*Woods Keys*/
                            "Yotota Car Key",
                            "ZB-014 Key",
                            "Shturman's Stash Key",

                            /*Shoreline Key*/
                            "Weather Station Safe Key", //needs embed
                            "Gas Station Safe Key", //needs embed
                            "Cottage Back Door Key",
                            "Cottage Safe Key",
                            "SMW Car Key",
                            "HEP Station Storage Room Key",
                            "Health Resort Management Warehouse Safe Key", //are here
                            "Health Resort Management Office Safe Key",
                            "Health Resort West Wing Office Room 104 Key",
                            "Health Resort West Wing Office Room 112 Key",
                            "Health Resort West Wing Room 203 Key",
                            "Health Resort West Wing Room 205 Key",
                            "Health Resort West Wing Room 207 Key", 
                            "Health Resort West Wing Room 216 Key",
                            "Health Resort West Wing Room 218 Key",
                            "Health Resort West Wing Room 219 Key",
                            "Health Resort West Wing Room 220 Key",
                            "Health Resort West Wing Room 221 Key",
                            "Health Resort West Wing Room 222 Key",
                            "Health Resort West Wing Room 301 Key",
                            "Health Resort West Wing Room 303 Key", 
                            "Health Resort West Wing Room 306 Key",
                            "Health Resort West Wing Room 309 Key",
                            "Health Resort West Wing Room 323 Key",
                            "Health Resort West Wing Room 325 Key",
                            "Health Resort West Wing Room 321 Safe Key",
                            "Health Resort Universal Utility Room Key",
                            "Health Resort East Wing Office Room 107 Key",
                            "Health Resort East Wing Office Room 108 Key",
                            "Health Resort Office Key With A Blue Tape",
                            "Health Resort East Wing Room 205 Key",
                            "Health Resort East Wing Room 206 Key",
                            "Health Resort East Wing Room 209 Key",
                            "Health Resort East Wing Room 213 Key",
                            "Health Resort East Wing Room 216 Key",
                            "Health Resort East Wing Room 222 Key",
                            "Health Resort East Wing Room 226 Key",
                            "Health Resort East Wing Room 306 Key",
                            "Health Resort East Wing Room 308 Key",
                            "Health Resort East Wing Room 310 Key",
                            "Health Resort East Wing Room 313 Key",
                            "Health Resort East Wing Room 314 Key",
                            "Health Resort East Wing Room 316 Key",
                            "Health Resort East Wing Room 322 Key",
                            "Health Resort East Wing Room 328 Key",

                            
                            ];

            let filtered = choices;
                if (focusedValue !== "") {
                    filtered = choices.filter((choice) =>           /*'choice' represents each choice in chocies array above*/
                    choice.toLowerCase().includes(focusedValue)     /*matches to focused value (user input) */
                );
            }
                        
            const response = filtered.slice(0, 25).map((choice) => ({      /* Slice first 25 options of the array to show, even if there are more */
                    name: choice,
                    value: choice,
            }));
                        
            await interaction.respond(response.length ? response : "No results found."); /* Check if response array has any elements, if not return "No Results found." */
            },    
        
        /*Execute function gets the user input and matches it to a case to return embedded message */
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
                            name: "Lock Location/s",
                            value: "__Factory__: Gate 0 Extraction, Med Tent Gate Extraction, Cellars Extraction, Locked room \n" +
                            "__Customs__: Two doors to the guard building of the crane yard next to the new gas station, Door leading to the ZB-013 Extraction in the basement of Stronghold \n" +
                            "__Interchange__: The doors of the fuel tanker trucks \n" +
                            "__Shoreline__: The door of the red truck at the Crane area along the beach",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "__Factory Locked Room__: 1x Jacket, One weapon spawn, Loose loot, Portable bunkhouse key spawn location \n" +
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
                            value: "₽32,199",
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
                            value: "1 Factory Emergency Exit Key(used) + 4 Iskra Ration Packs + 1 MRE Ration Pack - Jaeger LL2",
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
                    const Fac_PSBD_Embed = new EmbedBuilder()   
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
                            name: "Lock Location/s",
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
		            await interaction.reply({ embeds: [Fac_PSBD_Embed], files: ['././Images/Factory/Fac_PSBD.png'] });
                    break;	

                case "Pumping Station Front Door Key":
                    const Fac_PSFD_Embed = new EmbedBuilder()   
                    .setColor("#000000")
                    .setTitle("Pumping Station Front Door Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Pumping_station_front_door_key")
                    .setThumbnail('attachment://Fac_PSFD.png')
                    .setDescription("An old soviet factory key labeled \"Pumping Station\"")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Factory",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
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
                            value: "₽3,320",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Fac_PSFD_Embed], files: ['././Images/Factory/Fac_PSFD.png'] });
                    break;

/*------------- Custom Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                case "Gas Station Office Key":
                    const Cus_GasOffice = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Gas Station Office Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Gas_station_office_key")
                    .setThumbnail('attachment://Cus_GasOffice.png')
                    .setDescription("The Customs new gas station manager's office key")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
                            value: "Last room on right in the hallway inside the New Gas Station",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Safe, 1x pistol spawn on desk, gas station storage room key spawn under table, loose loot (money, ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,885",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_GasOffice], files: ['././Images/Customs/Cus_GasOffice.png'] });
                    break;	
                
                case "Gas Station Storage Room Key":
                    const Cus_GasSto = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Gas Station Storage Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Gas_station_storage_room_key")
                    .setThumbnail('attachment://Cus_GasSto.png')
                    .setDescription("Key to the new gas station storage room")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
                            value: "First room on right in hallway inside the New Gas Station",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Medbag, 1x Medcase",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "1 needs to be turned in to Therapist for the task 'Trust Regain'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽8,127",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Under the desk in the new gas station office (room next door)",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_GasSto], files: ['././Images/Customs/Cus_GasSto.png'] });
                    break;
                
                case "Military Checkpoint Key":
                    const Cus_MiliCp = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Military Checkpoint Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Military_checkpoint_key")
                    .setThumbnail('attachment://Cus_MiliCp.png')
                    .setDescription("A key to the military base checkpoint gatehouse")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
                            value: "Unlocks the door at the end of the main road for the military checkpoint",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon rack, 1x grenade box, 2x wooden ammo boxes",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "1 needs to be turned in to Therapist for the task 'Trust Regain'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽15,786",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Sitting next to the Dead Scav on the couch in the boiler room building on the east side of Customs",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "2x Tech manual, 4x Tarkovskaya Vodka, 2x can of beef stew (small) - Jaeger LL2",
                            inline: false
                        },
                    )
                    await interaction.reply({ embeds: [Cus_MiliCp], files: ['././Images/Customs/Cus_MiliCp.png'] });
                    break;	  
                    
                case "Unknown Key":
                    const Cus_Unknown = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Unknown Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Unknown_key")
                    .setThumbnail('attachment://Cus_Unknown.png')
                    .setDescription("A key found on the dead messenger's body")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
                            value: "Opens a cabin at the crane yard",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A except if the quest 'The Extortionist' is active",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'The Extortionist'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,010",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Guaranteed spawn on a dead scav located in a bush between Crackhouse and RUAF Roadblock",
                            inline: false
                        },
                    )
                    await interaction.reply({ embeds: [Cus_Unknown], files: ['././Images/Customs/Cus_Unknown.png'] });
                    break;
            
                case "USEC Stash Key":
                    const Cus_UStash = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("USEC Stash Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/USEC_stash_key")
                    .setThumbnail('attachment://Cus_UStash.png')
                    .setDescription("A key to the USEC stash, located in the Repair Shop")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location/s",
                            value: "Unlocks 2 different doors within the Repair Shop. The first room is in through the front door (nearest to road) and is the first door to the right, under the stair case. The second room is in the same building around the corner",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "__First room__: 1x weapon crate (5x2), 1x weapon box (4x4), 1x Jacket \n" +
                            "__Second room__: 1x weapon crate (5x2), 2x weapon box (4x4), Loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽53,052",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_UStash], files: ['././Images/Customs/Cus_UStash.png'] });
                    break;
                
                case "Dorm Guard Desk Key":
                    const Cus_2DGuard = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Guard Desk Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_guard_desk_key")
                    .setThumbnail('attachment://Cus_2DGuard.png')
                    .setDescription("A key to the two-story dormitory guard desk")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Opens the guard desk room at the first floor main entrance of the two-story dorms",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon rack, 1x weapon box (6x3), 2x wooden ammo boxes, loose loot (weapon mods on table), chance of 104 & 105 room key spawn in the wall key holder",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽8,946",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn in the hand of the dead scav in the first-floor showers of the two-story dorm",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2DGuard], files: ['././Images/Customs/Cus_2DGuard.png'] });
                    break;

                case "Dorm Room 104 Key":
                    const Cus_2D104 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 104 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_104_key")
                    .setThumbnail('attachment://Cus_2D104.png')
                    .setDescription("A dorm room key with '104' tag on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the two-story dorms in the fenced-off section that must be entered from outside the first floor north door",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Toolbox, 2x Jackets",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,597",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "In a key cabinet at the dorm guard desk at the main entrance of the two-story dorm",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2D104], files: ['././Images/Customs/Cus_2D104.png'] });
                    break;

                case "Dorm Room 105 Key":
                    const Cus_2D105 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 105 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_105_key")
                    .setThumbnail('attachment://Cus_2D105.png')
                    .setDescription("A key to the two-story dormitory with a tag reading '105' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the two-story dorm in the fenced-off section that must be entered from outside the first floor north door",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Safe, Provisions on bed, Loose loot on floor",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽9,749",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "In the key cabinet at the dorm guard desk at the main entrance of the two-story dorm",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2D105], files: ['././Images/Customs/Cus_2D105.png'] });
                    break;

                case "Dorm Room 110 Key":
                    const Cus_2D110 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 110 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_110_key")
                    .setThumbnail('attachment://Cus_2D110.png')
                    .setDescription("A key to the two-story dorm with a tag reading '110' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "The first floor of the two-story dorm towards the south end of the building",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Safe, Possible fuel conditioner, metal fuel tank, secure flash drive and diary spawn (on the bed)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽10,270",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn in a red box attached to a locker in the Repair Shop",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2D110], files: ['././Images/Customs/Cus_2D110.png'] });
                    break;
                
                case "Dorm Room 114 Key":
                    const Cus_2D114 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 114 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_114_key")
                    .setThumbnail('attachment://Cus_2D114.png')
                    .setDescription("A key to the two-story dorm with a tag reading '114' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the two-story dorm across the hall from 110",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Medcase, 1x Safe, 1x PC, Loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Pharmacist'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽13,261",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Possible spawn at Military Checkpoint in the jacket located in the trunk of the blue car",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2D114], files: ['././Images/Customs/Cus_2D114.png'] });
                    break;
                    
                case "Dorm Room 206 Key":
                    const Cus_2D206 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 206 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_206_key")
                    .setThumbnail('attachment://Cus_2D206.png')
                    .setDescription("A key to the two-story dorm with a tag reading '206' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the two-story dorms",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Possible bottle of water, aquamari, and water filter spawns",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Operation Aquarius - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,093",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "7x pile of meds - Therapist LL1",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_2D206], files: ['././Images/Customs/Cus_2D206.png'] });
                    break;
                    
                case "Dorm Room 103 Key":
                    const Cus_3D103 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 103 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_103_key")
                    .setThumbnail('attachment://Cus_3D103.png')
                    .setDescription("A key to the three-story dorm with a tag reading '103' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "The first floor of the three-story dorms",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Provisions",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,338",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D103], files: ['././Images/Customs/Cus_3D103.png'] });
                    break;
                    
                case "Dorm Room 108 Key":
                    const Cus_3D108 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 108 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_108_key")
                    .setThumbnail('attachment://Cus_3D108.png')
                    .setDescription("A key to the three-story dorm with a tag reading '108' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Down the hall to the right from the main entrance, one room after the open kitchen area on the left",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x filing cabinet, 1x PC",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,794",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D108], files: ['././Images/Customs/Cus_3D108.png'] });
                    break;

                case "Dorm Room 118 Key":
                    const Cus_3D118 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 118 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_118_key")
                    .setThumbnail('attachment://Cus_3D118.png')
                    .setDescription("A key to the three-story dorm with a tag reading '118' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the three-story at the very end of the hallway on the right side",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x Jackets in a clothes cabinet",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,376",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D118], files: ['././Images/Customs/Cus_3D118.png'] });
                    break;
                    
                case "Dorm Room 203 Key":
                    const Cus_3D203 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 203 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_203_key")
                    .setThumbnail('attachment://Cus_3D203.png')
                    .setDescription("A key to the three-story dorm with a tag reading '203' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "From the southern metal staircase, it is the second door on the right",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x sport bag",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Shaking up the Teller'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,249",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn inside a red mug in Dorm Room 214 of the third-story dorm",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D203], files: ['././Images/Customs/Cus_3D203.png'] });
                    break;
                    
                case "Dorm Room 204 Key":
                    const Cus_3D204 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 204 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_204_key")
                    .setThumbnail('attachment://Cus_3D204.png')
                    .setDescription("A key to the three-story dorm with a tag reading '204' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second door on the left from the southern staircase outside, across the hall from 203",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Weapon locker/Safe combo, Loose loot (weapon mods)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽12,421",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn in Warehouse 3 at the shipping yard, in the brown jacket hanging on the industrial shelf",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D204], files: ['././Images/Customs/Cus_3D204.png'] });
                    break;

                case "Dorm Room 214 Key":
                    const Cus_3D214 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 214 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_214_key")
                    .setThumbnail('attachment://Cus_3D214.png')
                    .setDescription("A dorm room key with a '214' tag on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First door on the right after entering from the northern metal staircase (closest to car extract)",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Safe, Loose loot (ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "Optional quest location for 'Shaking up the Teller' if you don't have a 203 key",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽16,796",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Possible spawn between pallets in a garage with the number 88 on the eastern side of the map (towards Big Red)",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D214], files: ['././Images/Customs/Cus_3D214.png'] });
                    break;

                case "Dorm Room 218 Key":
                    const Cus_3D218 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 218 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_218_key")
                    .setThumbnail('attachment://Cus_3D218.png')
                    .setDescription("A key to the three-story dorm with a tag reading '218' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the second floor of the three-story dorm towards the end of the hallway",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (weapon mods)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,823",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D218], files: ['././Images/Customs/Cus_3D218.png'] });
                    break;

                case "Dorm Room 220 Key":
                    const Cus_3D220 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 220 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_220_key")
                    .setThumbnail('attachment://Cus_3D220.png')
                    .setDescription("A key to the three-story dorm with a tag reading '220' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the three-story dorm, second to last door on the right, towards the end of the hallway",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Duffle bag, 1x Jacket, ZB-1014 spawn (on the table), Loose loot (money), 2x Task items for 'Chemical - Part 2'",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Chemical - Part 1' - Key is handover item \n" +
                            "'Chemical - Part 2' - Successfully extract with handover items",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽6,993",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "In a train car on the western side of the map next to the mattress (closest to ZB-1012 extract) ",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "1x buckwheat, 1x aquapeps, 5x pile of meds - Therapist LL2",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D220], files: ['././Images/Customs/Cus_3D220.png'] });
                    break;

                case "Dorm Room 303 Key":
                    const Cus_3D303 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 303 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_303_key")
                    .setThumbnail('attachment://Cus_3D303.png')
                    .setDescription("A key to the third-story dorm with a tag reading '303' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "From the southern metal staircase, it is the second door on the right",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x wooden crate (5x2), Loose loot (weapons)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Golden Swag' -  Golden zibbo lighter location \n" +
                            "'Trust Regain' - Handover item",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,679",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "7x T-plug, 3x Insulating tape - Therapist LL1",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D303], files: ['././Images/Customs/Cus_3D303.png'] });
                    break;

                case "Dorm Room 306 Key":
                    const Cus_3D306 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 306 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_306_key")
                    .setThumbnail('attachment://Cus_3D306.png')
                    .setDescription("A key to the three-story dorm with a tag reading '306' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "From the main staircase, it is the first door on the right at the top",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,848",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D306], files: ['././Images/Customs/Cus_3D306.png'] });
                    break;
                
                case "Dorm Room 308 Key":
                    const Cus_3D308 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 308 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_308_key")
                    .setThumbnail('attachment://Cus_3D308.png')
                    .setDescription("A key to the three-story dorm with a tag reading '308' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Down the main hallway, one room after the open kitchen area on the left hand side",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,205",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D308], files: ['././Images/Customs/Cus_3D308.png'] });
                    break;

                case "Dorm Room 315 Key":
                    const Cus_3D315 = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 315 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_315_key")
                    .setThumbnail('attachment://Cus_3D315.png')
                    .setDescription("A key to the three-story dorm with a tag reading '315' on it")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Down the main hallway on the right side one room before the hallway leading to the roof area",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,591",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D315], files: ['././Images/Customs/Cus_3D315.png'] });
                    break;
                
                case "Dorm Room 314 Marked Key":
                    const Cus_3D314M = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Dorm Room 314 Marked Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Dorm_room_314_marked_key")
                    .setThumbnail('attachment://Cus_3D314M.png')
                    .setDescription("A dormitory room 314 key with strange symbols scratched onto it where the room label would normally be. The key has completely rusted through, making it very fragile")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "At the very end of the main hallway on the right side",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot(valuables, weapons, containers)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'The Cult - Part 2'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽945,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Potential spawn in Reshala's pockets",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "1x RB-VO marked key, 1x RB-PKPM marked key, 1x RB-BK marked key - Jaeger LL3",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_3D314M], files: ['././Images/Customs/Cus_3D314M.png'] });
                    break;

                case "Machinery Key":
                    const Cus_Machine = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Machinery Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Machinery_key")
                    .setThumbnail('attachment://Cus_Machine.png')
                    .setDescription("A key to special machinery such as tank trucks, tractors, road-building machinery, etc.")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Driver-side door of the fuel tank truck at the construction area",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Bronze pocket watch for 'Checking'",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Checking'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,268",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Inside the yellow yacket in Room 205 of the three-story dorm. Guaranteed spawn every raid",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_Machine], files: ['././Images/Customs/Cus_Machine.png'] });
                    break;

                case "Portable Bunkhouse Key":
                    const Cus_PB = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Portable Bunkhouse Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Portable_bunkhouse_key")
                    .setThumbnail('attachment://Cus_PB.png')
                    .setDescription("A key to one of the portable cabins located in the Trailer Park area")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second story portable cabin between bus depot and the construction area",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x2), Secure folder for 'Bad Rep Evidence'",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Bad Rep Evidence'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,114",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Low chance to spawn under a jacket in the locked room next to the office on Factory",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_PB], files: ['././Images/Customs/Cus_PB.png'] });
                    break;

                case "Portable Cabin Key":
                    const Cus_PC = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Portable Cabin Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Portable_cabin_key")
                    .setThumbnail('attachment://Cus_PC.png')
                    .setDescription("A key to one of the portable guard cabins, near the Trailer Park area")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Portable door north of the storage zone, close to the Trailer Park",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "3x Jackets, Loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,591",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_PC], files: ['././Images/Customs/Cus_PC.png'] });
                    break;

                case "Trailer Park Portable Cabin Key":
                    const Cus_TPPC = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Trailer Park Portable Cabin Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Trailer_park_portable_cabin_key")
                    .setThumbnail('attachment://Cus_TPPC.png')
                    .setDescription("A key to one of the portable cabins, probably the one that is used by the guards at the Trailer Park")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Mobile trailer at the entrance to the parking lot near Small Blue",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Golden Swag'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,162",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Cus_TPPC], files: ['././Images/Customs/Cus_TPPC.png'] });
                    break;

                case "Tarcone Director's Office Key":
                    const Cus_TDO = new EmbedBuilder()   
                    .setColor("#e72929")
                    .setTitle("Tarcone Director's Office Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Tarcone_Director%27s_office_key")
                    .setThumbnail('attachment://Cus_TDO.png')
                    .setDescription("Key to the Customs office building inside Big Red")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Customs",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Top of the metal staircase in the Big Red warehouse",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Sport bag, 3x PC, 1x Safe, 1x Jacket, 1x Intelligence Folder spawn, Loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Delivery from the Past' \n" +
                            "'Farming - Part 3'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽13,297",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "2x Can of Ice Green Tea, 4x Army Crackers, 2x Can of squash spread - Therapist LL1 \n" +
                            "4x Golden neck chain - Therapist LL2",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Cus_TDO], files: ['././Images/Customs/Cus_TDO.png'] });
                    break;

/*------------- Woods Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                case "Yotota Car Key":
                    const Wds_YC = new EmbedBuilder()   
                    .setColor("#61aa41")
                    .setTitle("Yotota Car Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Yotota_car_key")
                    .setThumbnail('attachment://Wds_YC.png')
                    .setDescription("A Yotota car key with locking buttons")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Woods",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "The pickup truck parked in the lumber yard next to the three cabins",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot(misc.)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽758",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Wds_YC], files: ['././Images/Woods/Wds_YC.png'] });
                    break;
                
                case "ZB-014 Key":
                    const Wds_ZB = new EmbedBuilder()   
                    .setColor("#61aa41")
                    .setTitle("ZB-014 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/ZB-014_key")
                    .setThumbnail('attachment://Wds_ZB.png')
                    .setDescription("The key with an incomprehensible engraving")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Woods",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Inside a bunker on the west side of the map near Outskirts",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x5), 5.45x39 60-round magazine spawn (near the barrels), Loose loot on shelf",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "1 needs to be turned in to Therapist for the task 'Trust Regain'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽9,219",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Extraction",
                            value: "Opens the occasional 'ZB-014' extraction. You can tell if it is active by the green smoke at the rocks or light above the door inside the locked room",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Wds_ZB], files: ['././Images/Woods/Wds_ZB.png'] });
                    break;
                
                case "Shturman's Stash Key":
                    const Wds_SSK = new EmbedBuilder()   
                    .setColor("#61aa41")
                    .setTitle("Shturman's Stash Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Shturman%27s_stash_key")
                    .setThumbnail('attachment://Wds_SSK.png')
                    .setDescription("The Svetloozersk gang's common fund stash key, usually kept by Shturman. The key looks very flimsy, it could break from even a single use")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Woods",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "In the sawmill area, on top of a tire next to a wood log pile",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Various high-tier items (ammo, weapon mods, valuables)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "1 needs to be found in raid for the quest 'The Huntsman Path - Woods Keeper'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽95,402",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On Shturman",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Wds_SSK], files: ['././Images/Woods/Wds_SSK.png'] });
                    break;

/*------------- Shoreline Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                case "Weather Station Safe Key":
                    const Shr_WSSafe = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Weather Station Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Weather_station_safe_key")
                    .setThumbnail('attachment://Shr_WSSafe.png')
                    .setDescription("Key to the safe of the Shoreline weather station")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "None, safe is always unlocked",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽12,034",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
                    await interaction.reply({ embeds: [Shr_WSSafe], files: ['././Images/Shoreline/Shr_WSSafe.png'] });
                    break;

                case "Gas Station Safe Key":
                    const Shr_GSSafe = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Gas Station Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Gas_station_safe_key")
                    .setThumbnail('attachment://Shr_GSSafe.png')
                    .setDescription("A key to the safe inside the gas station, located somewhere near the Azure Coast sanatorium")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "None, safe is always unlocked",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,276",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
                    await interaction.reply({ embeds: [Shr_GSSafe], files: ['././Images/Shoreline/Shr_GSSafe.png'] });
                    break;

                case "Cottage Back Door Key":
                    const Shr_CBD = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Cottage Back Door Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Cottage_back_door_key")
                    .setThumbnail('attachment://Shr_CBD.png')
                    .setDescription("Key to the cottage back entrance")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Eastern cottage, in the backyard",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x PC, 1x gun cabinet, 2x Safe (1 locked), 1x Jacket, Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽33,465",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Potential spawn on top of the bundle of water barrels in the backyard of the cottage",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_CBD], files: ['././Images/Shoreline/Shr_CBD.png'] });
                    break;

                case "Cottage Safe Key":
                    const Shr_CS = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Cottage Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Cottage_safe_key")
                    .setThumbnail('attachment://Shr_CS.png')
                    .setDescription("A key to the safe inside one of the cottages")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Unlocks the safe on the second floor in the locked Villa",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Safe",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽13,954",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn in the white bus near tank in the western village. It can spawn on a seat in the back right",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_CS], files: ['././Images/Shoreline/Shr_CS.png'] });
                    break;

                case "SMW Car Key":
                    const Shr_SMWC = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("SMW Car Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/SMW_car_key")
                    .setThumbnail('attachment://Shr_SMWC.png')
                    .setDescription("SMW car folding key")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Trunk of the blue car near the unlocked villa",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Loose loot (money, provisions)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽5,315",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn on a box at the construction site near the locked Villa",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_SMWC], files: ['././Images/Shoreline/Shr_SMWC.png'] });
                    break;

                case "HEP Station Storage Room Key":
                    const Shr_HEPS = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("HEP Station Storage Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/HEP_station_storage_room_key")
                    .setThumbnail('attachment://Shr_HEPS.png')
                    .setDescription("A key to the USEC stash inside the hydroelectric power station")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the second floor of the power station",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x5), 1x weapon box (4x4), 1x weapon box (6x3), 1x Intelligence Folder spawn, Loose loot (weapon mods)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽25,200",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_HEPS], files: ['././Images/Shoreline/Shr_HEPS.png'] });
                    break;
            }
        },
    
}; 
