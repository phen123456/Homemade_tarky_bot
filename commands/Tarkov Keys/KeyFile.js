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

                            /*Interchange Keys*/
                            "Power Substation Utility Cabin Key",
                            "NecrusPharm Pharmacy Key",
                            "IDEA Cash Register Key",
                            "Kiba Arms Outer Door Key",
                            "Kiba Arms Inner Grate Door Key",
                            "EMERCOM Medical Unit Key",
                            "Goshan Cash Register Key",
                            "OLI Cash Register Key",
                            "OLI Administration Office Key",
                            "OLI Logistics Department Office Key",
                            "OLI Outlet Utility Room Key",
                            "ULTRA Medical Storage Key",
                            "Object #11SR Keycard",
                            "Object #21WS Keycard",

                            /*The Lab Keys*/
                            "TerraGroup Labs Access Keycard",
                            "Keycard With A Blue Marking",
                            "TerraGroup Labs Keycard (Black)",
                            "TerraGroup Labs Keycard (Blue)",
                            "TerraGroup Labs Keycard (Green)",
                            "TerraGroup Labs Keycard (Red)",
                            "TerraGroup Labs Keycard (Violet)",
                            "TerraGroup Labs Keycard (Yellow)",
                            "TerraGroup Labs Arsenal Storage Room Key",
                            "TerraGroup Labs Manager's Office Room Key",
                            "TerraGroup Labs Weapon Testing Area Key",

                            /*Reserve Keys*/
                            "RB-AK Key",
                            "RB-AM Key",
                            "AB-AO Key",
                            "RB-BK Marked Key",
                            "RB-GN Key",
                            "RB-KORL Key",
                            "RB-KPRL Key",
                            "RB-KSM Key",
                            "RB-MP11 Key",
                            "RB-MP12 Key",
                            "RB-MP13 Key",
                            "RB-MP21 Key",
                            "RB-MP22 Key",
                            "RB-OB Key",
                            "RB-OP Key",
                            "RB-ORB1 Key",
                            "RB-ORB2 Key",
                            "RB-ORB3 Key",
                            "RB-PKPM Marked Key",
                            "RB-PSV1 Key",
                            "RB-PSV2 Key",
                            "RB-PSP1 Key",
                            "RB-PSP2 Key",
                            "RB-RH Key",
                            "RB-RLSA Key",
                            "RB-RS Key",
                            "RB-SMP Key",
                            "RB-ST Key",
                            "RB-TB Key",
                            "RB-VO Marked Key",
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
                            value: "'Colleagues - Part 2",
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

                case "Health Resort Management Warehouse Safe Key":
                    const Shr_MWSafe = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort Management Warehouse Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_management_warehouse_safe_key")
                    .setThumbnail('attachment://Shr_MWSafe.png')
                    .setDescription("A key to the Health Resort warehouse safe, located in the Administration building")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the 2nd floore of the north wing of the health resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Valuables, money, etc.",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽12,097",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_MWSafe], files: ['././Images/Shoreline/Shr_MWSafe.png'] });
                    break;

                case "Health Resort Management Office Safe Key":
                    const Shr_MOSafe = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort Management Office Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_management_office_safe_key")
                    .setThumbnail('attachment://Shr_MOSafe.png')
                    .setDescription("A key to the safe in the management office of the Health Resort")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "In one of the office in the Admin Building",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Valuables, money, etc.",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽12,099",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_MOSafe], files: ['././Images/Shoreline/Shr_MOSafe.png'] });
                    break;

                case "Health Resort West Wing Office Room 104 Key":
                    const Shr_WWO104 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Office Room 104 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_office_room_104_key")
                    .setThumbnail('attachment://Shr_WWO104.png')
                    .setDescription("A key to the Health Resort west wing office room 104")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the west wing near the blue curtains",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x LEDX spawn, Blue keycard spawn, Loose loot (meds, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽59,850",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn in a locker in the smaller building at the power station \n" +
                            "Possible spawn inside a house in the village. It spawns in a shoe box on a bed frame",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WWO104], files: ['././Images/Shoreline/Shr_WWO104.png'] });
                    break;

                case "Health Resort West Wing Office Room 112 Key":
                    const Shr_WWO112 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Office Room 112 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_office_room_112_key")
                    .setThumbnail('attachment://Shr_WWO112.png')
                    .setDescription("A key to the Health Resort west wing office room 112")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the west wing in the Health Resort, in middle of the hallway",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Potential blue keycard spawn, 2x sport bags, Loose loot (provisions)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Vitamins - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽47,263",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn on a seat in a bus at the bus depot",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WWO112], files: ['././Images/Shoreline/Shr_WWO112.png'] });
                    break;

                case "Health Resort West Wing Room 203 Key":
                    const Shr_WW203 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 203 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_203_key")
                    .setThumbnail('attachment://Shr_WW203.png')
                    .setDescription("A key to the Health Resort west wing room 203")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the second floor, near the skybridge \n" +
                            "Connects to room 205 through the balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Potential red keycard & LEDX spawn, 1x Medbag, 1x Medcase, 1x weapon spawn, 1x weapon box (5x2), 1x toolbox, 1x sport bag",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽61,254",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "In the house closest to the bus stop in the village, on the chair beneath the jackets",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW203], files: ['././Images/Shoreline/Shr_WW203.png'] });
                    break;

                case "Health Resort West Wing Room 205 Key":
                    const Shr_WW205 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 205 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_205_key")
                    .setThumbnail('attachment://Shr_WW205.png')
                    .setDescription("Key to the Azure Coast sanatorium west wing room 205")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On second floor, near staircase and skybridge \n" +
                            "Also grants access to West Wing 203",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x Toolbox, 1x Medcase, potential LEDX spawn, potential GPU spawn, loose loot(meds, food)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽61,254",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                    )
                    await interaction.reply({ embeds: [Shr_WW205], files: ['././Images/Shoreline/Shr_WW205.png'] });
                    break;

                case "Health Resort West Wing Room 207 Key":
                    const Shr_WW207 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 207 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_207_key")
                    .setThumbnail('attachment://Shr_WW207.png')
                    .setDescription("Key to the Azure Coast sanatorium west wing room 207")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always Unlocked, 2nd floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,724",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW207], files: ['././Images/Shoreline/Shr_WW207.png'] });
                    break;

                case "Health Resort West Wing Room 216 Key":
                    const Shr_WW216 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 216 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_216_key")
                    .setThumbnail('attachment://Shr_WW216.png')
                    .setDescription("A key to the Health Resort west wing room 216")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "The second floor, room 216 of the West Wing in the Health Resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Potential LEDX spawn, 1x weapon box (5x2), 1x weapon box (4x4), 2x grenade box, 1x M4A1 spawn, Loose loot (computer parts, meds)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Lend-Lease - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽53,235",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "The key can be found on a desk located on the second floor of the theatre building of the Health Resort",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW216], files: ['././Images/Shoreline/Shr_WW216.png'] });
                    break;

                case "Health Resort West Wing Room 218 Key":
                    const Shr_WW218 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 218 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_218_key")
                    .setThumbnail('attachment://Shr_WW218.png')
                    .setDescription("Key to the Azure Coast sanatorium west wing room 218")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Middle of long West Wing hallway, 2nd floor\n" + 
                            "Also unlocks 221 and 222 through the balconies",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Potential Red Keycard spawn, 2x weapon cabinets, potential RSASS spawn, loose loot(money, food, ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽56,700",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Spawns in a locker, in the bathroom on the second floor of admin building in the resort",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW218], files: ['././Images/Shoreline/Shr_WW218.png'] });
                    break;
                
                case "Health Resort West Wing Room 219 Key":
                    const Shr_WW219 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 219 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_219_key")
                    .setThumbnail('attachment://Shr_WW219.png')
                    .setDescription("A key to the Health Resort wing room 219")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor, room 219 of the west wing in the Health Resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon cabinet, 1x weapon box (6x3), 1x armor spawn, Loose loot (ammo, meds, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Spa Tour - Part 4'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽15,762",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Potential spawn on the second floor of the Lighthouse on top of a broken wooden box",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW219], files: ['././Images/Shoreline/Shr_WW219.png'] });
                    break;
                
                case "Health Resort West Wing Room 220 Key":
                    const Shr_WW220 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 220 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_220_key")
                    .setThumbnail('attachment://Shr_WW220.png')
                    .setDescription("Key to the Azure Coast sanatorium west wing room 220")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor, middle of long hallway", 
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (4x4), 2x weapon box(5x2), rare loose loot(bitcoins, ice, etc)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽32,760",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a keyrack in the villa at the cottages on Shoreline",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW220], files: ['././Images/Shoreline/Shr_WW220.png'] });
                    break;

                case "Health Resort West Wing Room 221 Key":
                    const Shr_WW221 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 221 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_221_key")
                    .setThumbnail('attachment://Shr_WW221.png')
                    .setDescription("A key to the Health Resort wing room 221")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Middle of the long West Wing hallway, 2nd floor\n" +
                            "Also unlocks 218 and 222 through the balconies",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (6x3), 1x weapon spawn (M4A1, M1A), Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽56,700",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a deck-chair at the beach between the gas station and Pier",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "8x pack of chlorine - Therapist LL2",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW221], files: ['././Images/Shoreline/Shr_WW221.png'] });
                    break;

                case "Health Resort West Wing Room 222 Key":
                    const Shr_WW222 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 222 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_222_key")
                    .setThumbnail('attachment://Shr_WW222.png')
                    .setDescription("A key to the Health Resort west wing room 222")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the west wing towards the side staircase \n" +
                            "Also unlocks 218 and 221 through the balconies",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon spawn, 1x Medbag, Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽56,700",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW222], files: ['././Images/Shoreline/Shr_WW222.png'] });
                    break;

                case "Health Resort West Wing Room 301 Key":
                    const Shr_WW301 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 301 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_301_key")
                    .setThumbnail('attachment://Shr_WW301.png')
                    .setDescription("Key to the Azure Coast sanatorium west wing room 301")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor, end of hallway in the west wing of the resort\n" +
                            "Also leads to 304, which there is no key for",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "3x GPU spawns, multiple LEDX spawns, 1x weapon box (5x5), 2x PC, 1x SV-98 spawn, loose loot(computer parts, meds, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽54,810",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a seat in the yellow bus by tunnel extract on Shoreline",
                            inline: false
                        },
                   )
		            await interaction.reply({ embeds: [Shr_WW301], files: ['././Images/Shoreline/Shr_WW301.png'] });
                    break;

                case "Health Resort West Wing Room 303 Key":
                    const Shr_WW303 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 303 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_303_key")
                    .setThumbnail('attachment://Shr_WW303.png')
                    .setDescription("A key to the Health Resort west wing room 303")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, third floor of the Health Resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽5,103",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On the boxes in the northeast pavilion",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW303], files: ['././Images/Shoreline/Shr_WW303.png'] });
                    break;

                case "Health Resort West Wing Room 306 Key":
                    const Shr_WW306 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing 306 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_306_key")
                    .setThumbnail('attachment://Shr_WW306.png')
                    .setDescription("A key to the Health Resort wing room 306")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor of the west wing",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x dead scavs, 1x weapon spawn (M4A1), Loose loot (meds, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Health Care Privacy - Part 2'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽17,778",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "The key can sometimes be found in the second floor bathroom on Factory",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW306], files: ['././Images/Shoreline/Shr_WW306.png'] });
                    break;

                case "Health Resort West Wing Room 309 Key":
                    const Shr_WW309 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 309 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_309_key")
                    .setThumbnail('attachment://Shr_WW309.png')
                    .setDescription("A key to the Health Resort west wing room 309")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, 3rd floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,284",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW309], files: ['././Images/Shoreline/Shr_WW309.png'] });
                    break;

                case "Health Resort West Wing Room 323 Key":
                    const Shr_WW323 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 323 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_323_key")
                    .setThumbnail('attachment://Shr_WW323.png')
                    .setDescription("A key to the Health Resort west wing room 323")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, third floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon cabinet, Loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,788",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW323], files: ['././Images/Shoreline/Shr_WW323.png'] });
                    break;

                case "Health Resort West Wing Room 325 Key":
                    const Shr_WW325 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 325 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_325_key")
                    .setThumbnail('attachment://Shr_WW325.png')
                    .setDescription("A key to the Health Resort west wing room 325")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, third floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,646",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WW325], files: ['././Images/Shoreline/Shr_WW325.png'] });
                    break;

                case "Health Resort West Wing Room 321 Safe Key":
                    const Shr_WWSafe321 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort West Wing Room 321 Safe Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_west_wing_room_321_safe_key")
                    .setThumbnail('attachment://Shr_WWSafe321.png')
                    .setDescription("A key to the Health Resort west wing room 321 safe")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor of the Health Resort west wing, in the middle of the main hallway",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Valuables (money, info items)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽11,529",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "The key can be found in a locker in the weather station tower",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_WWSafe321], files: ['././Images/Shoreline/Shr_WWSafe321.png'] });
                    break;

                case "Health Resort Universal Utility Room Key":
                    const Shr_UnUtil = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort Universal Utility Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_universal_utility_room_key")
                    .setThumbnail('attachment://Shr_UnUtil.png')
                    .setDescription("A key to the utility rooms of the Health Resort")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Unlocks 3 different doors throughout the Health Resort\n" +
                            "__East Wing__: Room next to 328\n" +
                            "__West Wing__: Room next to 227 & 327",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "__East Wing__: 1x table with rare loot, access to East Wing Room 328\n" +
                            "__West Wing__: 2nd floor - 1x industrial shelf, 1x key rack, 1x jacket\n" +
                            "3rd floor - 1x industrial shelf",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Wet Job - Part 5'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽17,010",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Chance to spawn underneath a key locker in the janitors closet by the east wing admin staircase on the second floor",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_UnUtil], files: ['././Images/Shoreline/Shr_UnUtil.png'] });
                    break;

                case "Health Resort East Wing Office Room 107 Key":
                    const Shr_EWO107 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Office Room 107 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_office_room_107_key")
                    .setThumbnail('attachment://Shr_EWO107.png')
                    .setDescription("A key to the Health Resort east wing office room 107")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of the east wing in the Health Resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX & GPU spawn, 1x medbag, 1x medcase, 1x sport bag, Loose loot (money, meds, electronics)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽39,166",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Second floor of the Admin building, in the band room on a chair in the first row",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EWO107], files: ['././Images/Shoreline/Shr_EWO107.png'] });
                    break;

                case "Health Resort East Wing Office Room 108 Key":
                    const Shr_EWO108 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Office Room 108 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_office_room_108_key")
                    .setThumbnail('attachment://Shr_EWO108.png')
                    .setDescription("A key to the Health Resort east wing office room 108")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, first floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,023",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EWO108], files: ['././Images/Shoreline/Shr_EWO108.png'] });
                    break;

                case "Health Resort Office Key With A Blue Tape":
                    const Shr_BlueTape = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort Office Key with a Blue Tape")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_office_key_with_a_blue_tape")
                    .setThumbnail('attachment://Shr_BlueTape.png')
                    .setDescription("A key to one of the Health Resort office rooms, marked with blue duct tape")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "First floor of east wing, Room 110",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Multiple LEDX spawns in bathroom, 1x PC, GPU spawn, medical supplies, rare loose loot, 1x plastic suitcase",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Chemistry Closet'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽77,681",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_BlueTape], files: ['././Images/Shoreline/Shr_BlueTape.png'] });
                    break;

                case "Health Resort East Wing Room 205 Key":
                    const Shr_EW205 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 205 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_205_key")
                    .setThumbnail('attachment://Shr_EW205.png')
                    .setDescription("A key to the Health Resort east wing room 205")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the Health Resort east wing\n" +
                            "Room 206 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x medcase, 1x sport bag, 1x weapon cabinet, Loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽26,499",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can spawn on a cardboard box, in the fenced off concrete area above the stream towards the power station",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW205], files: ['././Images/Shoreline/Shr_EW205.png'] });
                    break;

                case "Health Resort East Wing Room 206 Key":
                    const Shr_EW206 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 206 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_206_key")
                    .setThumbnail('attachment://Shr_EW206.png')
                    .setDescription("A key to the Health Resort east wing room 206")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the Health Resort east wing\n" +
                            "Room 205 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x weapon box (5x2), 1x weapon box (4x4), 1x weapon spawn (AKM), rare loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽37,926",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can spawn in the back of an SUV between the gas station and pier",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW206], files: ['././Images/Shoreline/Shr_EW206.png'] });
                    break;

                case "Health Resort East Wing Room 209 Key":
                    const Shr_EW209 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 209 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_209_key")
                    .setThumbnail('attachment://Shr_EW209.png')
                    .setDescription("A key to the Health Resort east wing room 209")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, second floor resort\n" +
                            "Room 213 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "One rare loot spawn",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽15,498",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW209], files: ['././Images/Shoreline/Shr_EW209.png'] });
                    break;

                case "Health Resort East Wing Room 213 Key":
                    const Shr_EW213 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 213 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_213_key")
                    .setThumbnail('attachment://Shr_EW213.png')
                    .setDescription("A key to the Health Resort east wing room 213")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, second floor resort\n" +
                            "Room 209 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x2), 1x weapon box (5x5), 1x medbag",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,780",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW213], files: ['././Images/Shoreline/Shr_EW213.png'] });
                    break;

                case "Health Resort East Wing Room 216 Key":
                    const Shr_EW216 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 216 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_216_key")
                    .setThumbnail('attachment://Shr_EW216.png')
                    .setDescription("A key to the Health Resort east wing room 216")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, second floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,961",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW216], files: ['././Images/Shoreline/Shr_EW216.png'] });
                    break;

                case "Health Resort East Wing Room 222 Key":
                    const Shr_EW222 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 222 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_222_key")
                    .setThumbnail('attachment://Shr_EW222.png')
                    .setDescription("A key to the Health Resort east wing room 222")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the east wing, room 222 \n" +
                            "Room 226 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (6x3), 1x weapon rack, 1x grenade box, 1x toolbox, rare item spawn, 1x physical bitcoin spawn, 3 weapon spawns (RSASS, SV-98, MP5), 1x gun locker on balcony",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽56,700",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can spawn on a chair on the first floor of the power station",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW222], files: ['././Images/Shoreline/Shr_EW222.png'] });
                    break;

                case "Health Resort East Wing Room 226 Key":
                    const Shr_EW226 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 226 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_226_key")
                    .setThumbnail('attachment://Shr_EW226.png')
                    .setDescription("A key to the Health Resort east wing room 226")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Second floor of the east wing, room 226\n" +
                            "Room 222 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Multiple LEDX spawns, 1x weapon box (6x3), 1 weapon spawn (MP-153), loose loot (money, meds, food), 1x gun locker on balcony",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽49,329",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can spawn on the second floor east wing, in a key rack near the central stairs\n" +
                            "In room east 218, in a knocked over shelf",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW226], files: ['././Images/Shoreline/Shr_EW226.png'] });
                    break;

                case "Health Resort East Wing Room 306 Key":
                    const Shr_EW306 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 306 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_306_key")
                    .setThumbnail('attachment://Shr_EW306.png')
                    .setDescription("A key to the Health Resort east wing room 306")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor of the east wing, room 306\n" +
                            "Room 308 is accessible by jumping on the balcony edge",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX spawn, 4x PCs, 1x weapon box (4x4), 1 weapon spawn (DVL-10), rare spawn, loose loot (money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Cargo X - Part 1'\n" +
                            "'Lend-Lease - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽34,663",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: In the Tarcone Director's Office on the desk in the breachable room\n" +
                            "Woods: On the nightstand of the 2nd cabin with the safe",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW306], files: ['././Images/Shoreline/Shr_EW306.png'] });
                    break;

                case "Health Resort East Wing Room 308 Key":
                    const Shr_EW308 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 308 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_308_key")
                    .setThumbnail('attachment://Shr_EW308.png')
                    .setDescription("A key to the Health Resort east wing room 308")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor of the east wing, room 308\n" +
                            "Room 306 is accessible by jumping on the balcony edge",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon rack, 1x medcase, 1x weapon spawn, loose loot (money, food)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Cargo X - Part 1'\n" +
                            "'Lend-Lease - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽34,663",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "A",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Woods: In the first cabin in the lumber yard on top of a nightstand. The cabin is the closest one to the Yotota truck",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW308], files: ['././Images/Shoreline/Shr_EW308.png'] });
                    break;

                case "Health Resort East Wing Room 310 Key":
                    const Shr_EW310 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 310 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_310_key")
                    .setThumbnail('attachment://Shr_EW310.png')
                    .setDescription("A key to the Health Resort east wing room 310")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor of the east wing, room 310",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x sport bags, rare loose loot (BTC, gold chains, etc.)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽43,470",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: On a seat inside the bus at the trailer park\n" +
                            "In the front seat of the blue van at the crossroads extraction",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW310], files: ['././Images/Shoreline/Shr_EW310.png'] });
                    break;

                case "Health Resort East Wing Room 313 Key":
                    const Shr_EW313 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 313 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_313_key")
                    .setThumbnail('attachment://Shr_EW313.png')
                    .setDescription("A key to the Health Resort east wing room 313")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor east wing, room 313\n" +
                            "Room 314 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX spawn, 1x weapon box (6x3), 1x medbag, loose loot (meds, mods, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽33,219",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW313], files: ['././Images/Shoreline/Shr_EW313.png'] });
                    break;

                case "Health Resort East Wing Room 314 Key":
                    const Shr_EW314 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 314 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_314_key")
                    .setThumbnail('attachment://Shr_EW314.png')
                    .setDescription("A key to the Health Resort east wing room 314")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor east wing, room 314\n" +
                            "Room 313 is accessible via balcony",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x2), 1x weapon spawn, loose loot (meds, mods, money)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽31,714",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Woods: At the checkpoint on the eastern side of the map , in a cabin on a wooden stool",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW314], files: ['././Images/Shoreline/Shr_EW314.png'] });
                    break;

                case "Health Resort East Wing Room 316 Key":
                    const Shr_EW316 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 316 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_316_key")
                    .setThumbnail('attachment://Shr_EW316.png')
                    .setDescription("A key to the Health Resort east wing room 316")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor east wing, room 316",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (6x3), 1x weapon box (5x2), 1x medbag, 1x weapon spawn (SV-98), 1x weapon attachment spawn",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽17,768",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Woods: Western side of the lake, in an open suitcase behind the crashed minivan",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW316], files: ['././Images/Shoreline/Shr_EW316.png'] });
                    break;

                case "Health Resort East Wing Room 322 Key":
                    const Shr_EW322 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 322 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_322_key")
                    .setThumbnail('attachment://Shr_EW322.png')
                    .setDescription("A key to the Health Resort east wing room 322")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Always unlocked, third floor resort",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Nothing",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽4,788",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "F",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW322], files: ['././Images/Shoreline/Shr_EW322.png'] });
                    break;

                case "Health Resort East Wing Room 328 Key":
                    const Shr_EW328 = new EmbedBuilder()   
                    .setColor("#2978bf")
                    .setTitle("Health Resort East Wing Room 328 Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Health_Resort_east_wing_room_328_key")
                    .setThumbnail('attachment://Shr_EW328.png')
                    .setDescription("A key to the Health Resort east wing room 328")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Shoreline",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Third floor east wing, room 328",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX & GPU spawn, 1x PC, 1x sport bag, 2x electronic spawn, 1x weapon spawn",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Wet Job - Part 5' when you don't have a Universal Utility room key",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽41,580",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Shoreline: On a table on the Scav Island, next to an outboard motor",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Shr_EW328], files: ['././Images/Shoreline/Shr_EW328.png'] });
                    break;

/*------------- Interchange Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                case "Power Substation Utility Cabin Key":
                    const Int_PSUC = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Power Substation Utility Cabin Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Power_substation_utility_cabin_key")
                    .setThumbnail('attachment://Int_PSUC.png')
                    .setDescription("A key to the power substation utility cabin adjacent to the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "A cabin next to the power substation towards the backside of IDEA",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (4x4), 1x wooden crate, 1 weapon spawn (MP-153)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,021",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Factory: Inside a blue locker at the forklift area",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_PSUC], files: ['././Images/Interchange/Int_PSUC.png'] });
                    break;

                case "NecrusPharm Pharmacy Key":
                    const Int_NPP = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("NecrusPharm Pharmacy Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/NecrusPharm_pharmacy_key")
                    .setThumbnail('attachment://Int_NPP.png')
                    .setDescription("A key to the NecrusPharm pharmacy inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "To the right of the escalator leading into IDEA",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX spawn, ophthalmoscope spawn, loose loot (meds, barter items) ",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽51,283",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Shoreline: In west wing room 101 on the desk",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_NPP], files: ['././Images/Interchange/Int_NPP.png'] });
                    break;

                case "IDEA Cash Register Key":
                    const Int_ICR = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("IDEA Cash Register Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/IDEA_cash_register_key")
                    .setThumbnail('attachment://Int_ICR.png')
                    .setDescription("A key to the cash registers of the IDEA store outlet")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Cash registers at the entrance of the IDEA store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Money (560-1,150 roubles per stack for each register)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽9,072",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On the seat of a white bus located outside of the IDEA store",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_ICR], files: ['././Images/Interchange/Int_ICR.png'] });
                    break;

                case "Kiba Arms Outer Door Key":
                    const Int_KibaO = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Kiba Arms Outer Door Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Kiba_Arms_outer_door_key")
                    .setThumbnail('attachment://Int_KibaO.png')
                    .setDescription("A key to the outer door of the Kiba Arms International outlet")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the first floor, near the center of the ULTRA shopping mall",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A. A second locked grate door that requires the Kiba Arms inner grate door key",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Provocation'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽95,773",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Interchange: Inside the power station admin room, located on top of a box on a shelf\n" +
                            "At the campsite in Goshan, behind a tent on a book",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "60x can of condensed milk, 10x pack of oatflakes - Therapist LL4",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "Requires the power station switch to be on in order to be used\n" +
                            "3 seconds after opening the door an alarm will start ringing in the store and across other stores. It can be switched off at a designated terminal",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_KibaO], files: ['././Images/Interchange/Int_KibaO.png'] });
                    break;

                case "Kiba Arms Inner Grate Door Key":
                    const Int_KibaI = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Kiba Arms Inner Grate Door Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Kiba_Arms_inner_grate_door_key")
                    .setThumbnail('attachment://Int_KibaI.png')
                    .setDescription("A key to the inner grate door of the Kiba Arms International outlet")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On the first floor, near the center of the ULTRA shopping mall",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (4x4), 1x weapon box (5x5), 2x cash registers, multiple weapon spawns (M4A1 SOPMOD II, RSASS, VSS, AK variants), F-1 & M67 grenade spawns, lots of weapon mods and ammo",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Provocation'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽105,463",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A\n" +
                            "1 can be obtained as a reward for completing 'Gunsmith - Part 15'",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_KibaI], files: ['././Images/Interchange/Int_KibaI.png'] });
                    break;

                case "EMERCOM Medical Unit Key":
                    const Int_EMC = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("EMERCOM Medical Unit Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/EMERCOM_medical_unit_key")
                    .setThumbnail('attachment://Int_EMC.png')
                    .setDescription("A key to the EMERCOM medical care unit inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Inside the main mall section, adjacent from the book store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX & GPU spawn, 2x medbags, 1x sport bag, 1x jacket, loose loot (rare + medical items) ",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Vitamins - Part 1'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽45,367",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: Inside the crashed ambulance outside the front area of the new gas station. You have to jump inside to grab the key off the seat",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_EMC], files: ['././Images/Interchange/Int_EMC.png'] });
                    break;

                case "Goshan Cash Register Key":
                    const Int_GCR = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Goshan Cash Register Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Goshan_cash_register_key")
                    .setThumbnail('attachment://Int_GCR.png')
                    .setDescription("A key to the cash registers of the Goshan store outlet inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Cash registers at the entrance of the Goshan store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Money (560-1,150 roubles per stack for each register)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Supervisor'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽9,720",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: On the seat of a white bus that is part of the roadblock next to the new gas station",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "6x toilet paper, 5x repellent, 2x survivor lighter, 2x pack of chlorine - Jaeger LL3",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_GCR], files: ['././Images/Interchange/Int_GCR.png'] });
                    break;

                case "OLI Cash Register Key":
                    const Int_OCR = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("OLI Cash Register Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/OLI_cash_register_key")
                    .setThumbnail('attachment://Int_OCR.png')
                    .setDescription("A key to the cash registers of the OLI store outlet inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Cash registers at the entrance of the OLI store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Money (560-1,150 roubles per stack for each register)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽7,578",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a table in an office in the back of the OLI store",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_OCR], files: ['././Images/Interchange/Int_OCR.png'] });
                    break;

                case "OLI Administration Office Key":
                    const Int_OAO = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("OLI Administration Office Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/OLI_administration_office_key")
                    .setThumbnail('attachment://Int_OAO.png')
                    .setDescription("A key to the office of the OLI administrator inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Across from the restrooms, inside the OLI hardware store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x PC, loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽9,463",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Shoreline: On a table in the Health Resort east wing room 322",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_OAO], files: ['././Images/Interchange/Int_OAO.png'] });
                    break;

                case "OLI Logistics Department Office Key":
                    const Int_OLDO = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("OLI Logistics Department Office Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/OLI_logistics_department_office_key")
                    .setThumbnail('attachment://Int_OLDO.png')
                    .setDescription("A key to the office of OLI logistics office inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "In the hallway along the side of the OLI outlet",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x PC, loose loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Database - Part 2'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽48,523",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "C",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: Inside the trunk of the blue car, right beside the shortcut between the factory area and the new gas station",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "4x hunting matches, 2x survival lighter, 1x dry fuel",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_OLDO], files: ['././Images/Interchange/Int_OLDO.png'] });
                    break;

                case "OLI Outlet Utility Room Key":
                    const Int_OOU = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("OLI Outlet Utility Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/OLI_outlet_utility_room_key")
                    .setThumbnail('attachment://Int_OOU.png')
                    .setDescription("A key to the utility room of the OLI store outlet inside the ULTRA shopping mall")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Inside the main office area inside the OLI outlet",
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
                            value: "₽2,052",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "D",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Int_OOU], files: ['././Images/Interchange/Int_OOU.png'] });
                    break;

                case "ULTRA Medical Storage Key":
                    const Int_UMS = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("ULTRA Medical Storage Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/ULTRA_medical_storage_key")
                    .setThumbnail('attachment://Int_UMS.png')
                    .setDescription("A key to the ULTRA shopping mall medical storage room")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "In a pharmacy, next to the Techlight store",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX & portable defibrilator spawn, ophthalmoscope, stimulants, loose medical loot",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽99,567",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                    )
		            await interaction.reply({ embeds: [Int_UMS], files: ['././Images/Interchange/Int_UMS.png'] });
                    break;

                case "Object #11SR Keycard":
                    const Int_11SR = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Object #11SR Keycard")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Object_11SR_keycard")
                    .setThumbnail('attachment://Int_11SR.png')
                    .setDescription("An electronic limited-use access keycard that, according to the logo on the front, belongs to TerraGroup")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Behind a urinal located in the men's restroom at the 'Burgerspot' restaurant on the second floor of the mall. The keypad is revealed upon flushing the urinal",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (4x4), 1x weapon box (6x3), 1x weapon box (5x5), modded M4A1, rare item spawns",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Provocation'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽63,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can be found on Killa, Tagilla, Shturman and Glukhar",
                            inline: false
                        },
                        {
                            name: "Barter/Craft",
                            value: "1x VPX & RFID reader (aux.), 5x flash drive, 1x Object #21WS keycard, 1x SMT cassette - Intelligence Center L2",
                            inline: false
                        },
                        {
                            name: "Extraction",
                            value: "__Interchange__: Saferoom Exfil",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "Requires the power station switch to be on in order to be used\n" +
                            "The door will lock itself after closing",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_11SR], files: ['././Images/Interchange/Int_11SR.png'] });
                    break;

                case "Object #21WS Keycard":
                    const Int_21WS = new EmbedBuilder()   
                    .setColor("#7d4bff")
                    .setTitle("Object #21WS Keycard")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Object_21WS_keycard")
                    .setThumbnail('attachment://Int_21WS.png')
                    .setDescription("An electronic limited-use access keycard that, according to the logo on the front, belongs to TerraGroup")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Interchange",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "On a red container that is stacked on other containers that can be found in the container lot to the southwest of the mall",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (4x4), 1x weapon box (6x3), 1x weapon box (5x2), 1 weapon spawn (MPX), trooper armor spawn",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Provocation'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽31,500",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Can be found on Killa, Tagilla, Shturman and Glukhar",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "Requires the power station switch to be on in order to be used",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Int_21WS], files: ['././Images/Interchange/Int_21WS.png'] });
                    break;

/*------------- The Lab Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

                case "TerraGroup Labs Access Keycard":
                    const Lab_LA = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Access Keycard")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_access_keycard")
                    .setThumbnail('attachment://Lab_LA.png')
                    .setDescription("A single-use United Security-issued TerraGroup Labs access keycard")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Single-use only. The keycard will be consumed upon entering The Lab",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Colleagues - Part 3' - 10 need to be FiR\n" +
                            "'Fishing Place' - 2 need to be FiR",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽63,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "1x bulbex, 1x pipe grip wrench, 4x elite pliers - Mechanic LL3\n" +
                            "10x GP coin - Mechanic LL4",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_LA], files: ['././Images/Lab/Lab_LA.png'] });
                    break;

                case "Keycard With A Blue Marking":
                    const Lab_BM = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("Keycard With A Blue Marking")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/Keycard_with_a_blue_marking")
                    .setThumbnail('attachment://Lab_BM.png')
                    .setDescription("A single-use plastic keycard with a blue color marking, probably for identification. The logo covered by the marking resembles the TerraGroup Labs logo")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "The door just in front of the Laboratory block (G22) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x jacket, ophthalmoscope spawns, stimulants, loose loot (meds)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'TerraGroup Employee'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽31,500",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On Sanitar",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_BM], files: ['././Images/Lab/Lab_BM.png'] });
                    break;

                case "TerraGroup Labs Keycard (Black)":
                    const Lab_Black = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Black)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Black)")
                    .setThumbnail('attachment://Lab_Black.png')
                    .setDescription("A United Security-issued TerraGroup Labs top-level administration keycard")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory experiment's area (G12) on the first level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Several LEDX spawns, 1x medcase, stimulants",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Following the Bread Crumbs'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽1,575,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Room O11, in front of the telephone on the desk with the computer, across from the toxic waste spill that's covered by the large orange dome\n" +
                            "Can be found on Killa, Tagilla, Shturman and Glukhar",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Black], files: ['././Images/Lab/Lab_Black.png'] });
                    break;

                case "TerraGroup Labs Keycard (Blue)":
                    const Lab_Blue = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Blue)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Blue)")
                    .setThumbnail('attachment://Lab_Blue.png')
                    .setDescription("A United Security-issued TerraGroup Labs keycard for service personnel in the Blue sector")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory quarantine zone (G11) on the first level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX spawn on shelves, 2x medcase, loose loot (meds)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽5,670,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Shoreline: On the step of the passenger side of the ambulance that is parked in front of the resort\n" +
                            "West Wing Office 104 - On a desk between the lamp and files\n" +
                            "West Wing Office 112 - On a lowboard bottom left of the TV",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Blue], files: ['././Images/Lab/Lab_Blue.png'] });
                    break;

                case "TerraGroup Labs Keycard (Green)":
                    const Lab_Green = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Green)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Green)")
                    .setThumbnail('attachment://Lab_Green.png')
                    .setDescription("A United Security-issued TerraGroup Labs keycard for administration staff in the Green sector")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory block (G22) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "LEDX & Intelligence folder spawn, Black keycard spawn (on table next to computer), 1x medcase, 1x weapon box (4x4), 1 weapon spawn (MP5), loose loot (meds, mods, ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽10,710,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a shelf between folders in the back part of the hallway that leads to the security arsenal (R23)\n" +
                            "Next to a keyboard at the reception desk of the managers office (O21) on the second level \n" +
                            "On a desk next to the quarantine zone room (G11)",
                            inline: false
                        },
                        {
                            name: "Additonal Notes",
                            value: "Goated",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Green], files: ['././Images/Lab/Lab_Green.png'] });
                    break;

                case "TerraGroup Labs Keycard (Red)":
                    const Lab_Red = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Red)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Red)")
                    .setThumbnail('attachment://Lab_Red.png')
                    .setDescription("A United Security-issued TerraGroup Labs keycard for support staff")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory security arsenal (R23) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Multiple ammo and weapon mod spawns, multiple MP5 and modded M4A1 spawns on the rack (M4A1 SOPMOD II spawn on the table), intelligence folder spawn on the desk",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽10,395,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Shoreline: East Wing Room 221 - On the table with the laptop\n" +
                            "West Wing: In the basement gym in a locker\n" +
                            "Room 218 - On top of a water barrel\n" +
                            "Room 203 - On the floor in front of the nightstand beside the bed, closest to the balcony\n" +
                            "Admin Building: Next to the management office with locked safe, on the table under the ashtray",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "The door opened by this keycard will automatically lock itself upon closure and can be opened both from the inside and outside",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Red], files: ['././Images/Lab/Lab_Red.png'] });
                    break;

                case "TerraGroup Labs Keycard (Violet)":
                    const Lab_Violet = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Violet)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Violet)")
                    .setThumbnail('attachment://Lab_Violet.png')
                    .setDescription("A United Security-issued TerraGroup Labs keycard for laboratory staff")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory security post (R23) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "Military wireless signal transmitter & RFID reader on server rack, 2x weapon box (5x5), 1x weapon box (4x4), modded MP5 & M4A1 variants, rare item spawns, weapon mods",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽3,780,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Woods: In trunk of the black SUV parked in front of the blue warehouse in the lumber camp\n" +
                            "In a brick house north of the lumber camp on the edge of the desk right to the entrance\n" +
                            "Inside the driver side door of the SUV at the checkpoint eastern of the lumber camp",
                            inline: false
                        },
                        {
                            name: "Barter/Crafting",
                            value: "1x RFID reader (aux.), 10x Labs access keycard, 1x Labs keycard (Yellow), 4x intelligence folder, 1x SMT cassette - Intelligence Center L3",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Violet], files: ['././Images/Lab/Lab_Violet.png'] });
                    break;

                case "TerraGroup Labs Keycard (Yellow)":
                    const Lab_Yellow = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Keycard (Yellow)")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_keycard_(Yellow)")
                    .setThumbnail('attachment://Lab_Yellow.png')
                    .setDescription("A United Secrity-issued TerraGroup Labs keycard for technicians in the Yellow sector")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Parking garage alarm system control panel on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x PC, 1x weapon safe, 1x drawer, weapon mods on the tables, loose loot (valuables, electronics, meds, stimulants) on the chairs",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,205,000",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "S",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "In the cafeteria (R24), on the center cafeteria table\n" +
                            "In O21, on the table in front of the manager's office\n" +
                            "In O11, on one of tht work tables",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_Yellow], files: ['././Images/Lab/Lab_Yellow.png'] });
                    break;

                case "TerraGroup Labs Arsenal Storage Room Key":
                    const Lab_AS = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Arsenal Storage Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_arsenal_storage_room_key")
                    .setThumbnail('attachment://Lab_AS.png')
                    .setDescription("A key to the TerraGroup Labs Security arsenal storage room")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Storage room inside thr laboratory security arsenal (R23) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x drawer, meds, weapon mods, rare item spawns",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽56,700",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Customs: Sitting on a chair within a shack on top of the hill with the transmission tower\n" +
                            "Room 215 of the three-story dorm: Inside a night stand\n" +
                            "On the counter behind the cash registers in the new gas station\n" +
                            "Inside the factory shortcut in the room with the filing cabinets, on the shelf right beneath the telephone",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "N/A",
                            inline: false
                        },
                        {
                            name: "Addtional Notes",
                            value: "Requires a __Red Keycard__ to access",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_AS], files: ['././Images/Lab/Lab_AS.png'] });
                    break;

                case "TerraGroup Labs Manager's Office Room Key":
                    const Lab_MO = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Manager's Office Room Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_manager%27s_office_room_key")
                    .setThumbnail('attachment://Lab_MO.png')
                    .setDescription("A key to the TerraGroup Labs manager office")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory manager office (O21) on the second level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x PC, 1x safe, 1x drawer, 1x weapon box (6x3), 4x rare loot spawns, intelligence folder spawn on the desk",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Following the Bread Crumbs'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽31,500",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "Room O13 on a lit up desk, left of the glass door entrance\n" +
                            "Room O22, in the conference room on the right side of the powered laptop\n" +
                            "In the parking garage (Y11), sitting on the passenger side seat of the SUV that has the weapon box (5x2) in the trunk",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "Can unlock two separate doors leading to the same office",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_MO], files: ['././Images/Lab/Lab_MO.png'] });
                    break;

                case "TerraGroup Labs Weapon Testing Area Key":
                    const Lab_WT = new EmbedBuilder()   
                    .setColor("#00ffea")
                    .setTitle("TerraGroup Labs Weapon Testing Area Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/TerraGroup_Labs_weapon_testing_area_key")
                    .setThumbnail('attachment://Lab_WT.png')
                    .setDescription("A key to the TerraGroup Labs Weapon Testing area")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "The Lab",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Laboratory weapon testing area (O11) on the first level",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "1x weapon box (5x5), 1x weapon box (4x4), possible weapon spawns, loose loot (mods, ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "'Following the Bread Crumbs'",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽37,800",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On the first level in the gym (R15) on a stool\n" +
                            "In the second level room above the servers (B21), on the kitchen counter\n" +
                            "On the bottom of a shelf left of the entrance to room R23",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "Can unlock two separate doors leading to the same room",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Lab_WT], files: ['././Images/Lab/Lab_WT.png'] });
                    break;

/*------------- Reserve Keys --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

                case "RB-AK Key":
                    const Res_AK = new EmbedBuilder()   
                    .setColor("#74481a")
                    .setTitle("RB-AK Key")
                    .setURL("https://escapefromtarkov.fandom.com/wiki/RB-AK_key")
                    .setThumbnail('attachment://Res_AK.png')
                    .setDescription("A key to the Federal State Reserve Agency base Educational Building (Black Bishop) storage room")
                    .addFields (
                        {
                            name: "Map/s",
                            value: "Reserve",
                            inline: true
                        },
                        {
                            name: "Lock Location",
                            value: "Black Bishop, 2nd floor on the west side staircase of the building",
                            inline: false
                        },
                        {
                            name: "Potential Loot",
                            value: "2x PC, 1x sport bag, virtex processor & tetriz spawns, AESA spawn, loose loot (electronics, ammo)",
                            inline: false
                        },
                        {
                            name: "Used in Quest",
                            value: "N/A",
                            inline: true
                        },
                        {
                            name: "Vendor Price",
                            value: "₽2,061",
                            inline: true
                        },
                        {
                            name: "Ranking",
                            value: "B",
                            inline: true
                        },
                        {
                            name: "World Spawns",
                            value: "On a filing cabinet in the unlocked guard shack on the path to the radar station",
                            inline: false
                        },
                        {
                            name: "Barter",
                            value: "4x canister of purified water, 4x water filter - Therapist LL3",
                            inline: false
                        },
                        {
                            name: "Additional Notes",
                            value: "The room can also be entered without the key by jumping from the 3rd floor window on the door awning and entering from the window",
                            inline: false
                        },
                    )
		            await interaction.reply({ embeds: [Res_AK], files: ['././Images/Reserve/Res_AK.png'] });
                    break;
            }
        },
    
}; 
