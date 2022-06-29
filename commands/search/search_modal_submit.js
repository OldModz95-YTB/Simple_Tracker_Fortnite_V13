const {
    Client,
    Intents,
    MessageEmbed,
  } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { get } = require('axios');
const variables = require('../../variables/variables.json')
module.exports = (client) => {

    require('discord-modals')(client)
    
    client.on('modalSubmit', async (modal) => {
      if(modal.customId === 'send-username') {

        const username = modal.getTextInputValue('username');
        const platform = modal.getSelectMenuValues('platform');
        const region = modal.getTextInputValue('region');

        try{
          get(`https://api.fortnitetracker.com/v1/powerrankings/${platform}/${region}/${username}`,
          {
                 headers: {
                     'Content-Type': "application/json",
                     "TRN-Api-Key": variables.TOKENAPI
                 }
             }).then( (res) => {
            
                 try 
                 {
                  if(res.data.status == undefined)
                  {
                    let embed_add = new MessageEmbed()
                          .setColor('#1FDF64')
                          .setTitle(`Result ${res.data.name}!`)
                          .setDescription(`> **Name:** ${res.data.name}
                          > **Region:** ${res.data.region}
                          > **Platform:** ${res.data.platform}
                          
                          > **Country Code:** ${res.data.countryCode}
                          > **Twitter:** ${res.data.twitter}
                          
                          > **Points:** ${res.data.points}
                          > **Cash Prize:** ${res.data.cashPrize}
                          > **Events:** ${res.data.events}
                          > **Rank:** ${res.data.rank}
                          > ** Percentile:** ${res.data.percentile}`)
                          .setTimestamp()
                          return modal.reply({
                              embeds: [embed_add],
                              ephemeral: true,
                          })
                  }
                  else
                  {
                    return modal.reply("Error profil.")
                  }
                    
                 }
                 catch(error)
                 {
                     return modal.reply("Error profil.")
                 }
          })
        }
        catch(err)
        {
            return;
        }
            
        
      }  //*End if modal customID
    });
    
    }