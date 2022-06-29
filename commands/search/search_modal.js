const {
    Client,
    Intents,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
  } = require('discord.js');
  const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
  
  const discordModals = require('discord-modals');
  const { Modal, TextInputComponent, SelectMenuComponent, showModal } = discordModals;
  discordModals(client);
  
  const variables = require('../../variables/variables.json')
  
  module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (interaction.isButton()) {
            
          if (interaction.customId === 'search_modal')
          {
            const modal = new Modal() // We create a Modal
              .setCustomId('send-username')
              .setTitle('Search User')
              .addComponents([
                new TextInputComponent()
                  .setCustomId('username')
                  .setLabel('Username EpicGames')
                  .setStyle('SHORT')
                  .setMinLength(4)
                  .setMaxLength(32)
                  .setPlaceholder('Exemple: oldmodz95')
                  .setRequired(true),

                  new TextInputComponent()
                  .setCustomId('region')
                  .setLabel('Region EpicGames')
                  .setStyle('SHORT')
                  .setMinLength(2)
                  .setMaxLength(5)
                  .setPlaceholder('Exemple: NAE/NAW/EU')
                  .setRequired(true),

                  new SelectMenuComponent()
                .setCustomId('platform')
                .setPlaceholder('Platform Games')
                //.setRequired(true)
                .addOptions(
                  {
                    label: "PC",
                    description: "User playing on computer",
                    value: "pc",
                    emoji: "🖥️"
                  },
                  {
                    label: "Console",
                    description: "User playing on console",
                    value: "console",
                    emoji: "🎮"
                  },
                  {
                    label: "Mobile",
                    description: "User playing on mobile",
                    value: "mobile",
                    emoji: "📱"
                  }
                ),
                  
              ]);
            
            showModal(modal, {
              client,
              interaction,
            });
          }
          
        }//* End interaction.customID
    
      });
  }