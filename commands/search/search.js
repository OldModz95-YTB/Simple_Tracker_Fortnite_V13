const { Modal, showModal, TextInputComponent, SelectMenuComponent, Submit } = require('discord-modals'); // Import all
const {
    Client,
    Intents,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
  } = require('discord.js');
const moment = require('moment');
const variables = require(`../../variables/variables.json`)

module.exports = (client) => {

    const guildID = variables.guildID
    const guild = client.guilds.cache.get(guildID)
    let commands

    if(guild)
    {
        commands = guild.commands
    }
    else
    {
        commands = client.application.commands
    }

    commands.create({
        name: 'search',
        description: 'Search user EpicGames',    
    })

//?========================
//* Utilisateur autorisé.
WhiteList = variables.WhiteList
//?=========================
//* INTERACTION CREATE
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'search')
    {
        let embed_add = new MessageEmbed()
            .setColor('#2C63B0')
            .setTitle(`Search User EpicGames`)

            let button1 = new MessageActionRow();
            button1.addComponents(
              new MessageButton()
                .setCustomId('search_modal')
                .setStyle('PRIMARY')
                .setEmoji('🌎')
                .setLabel('Search User'),
            );

            interaction.reply({
                embeds: [embed_add],
                components: [button1],
                ephemeral: true,
            });
	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports





/*
SUB_COMMAND sets the option to be a subcommand
SUB_COMMAND_GROUP sets the option to be a subcommand group
STRING sets the option to require a string value
INTEGER sets the option to require an integer value
NUMBER sets the option to require a decimal (also known as a floating point) value
BOOLEAN sets the option to require a boolean value
USER sets the option to require a user or snowflake as value
CHANNEL sets the option to require a channel or snowflake as value
ROLE sets the option to require a role or snowflake as value
MENTIONABLE sets the option to require a user, role or snowflake as value
#Choices
*/
