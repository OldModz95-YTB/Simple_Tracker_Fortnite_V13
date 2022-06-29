const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS],
    partials: ['MESSAGE', 'USER', 'REACTION'] 
});


client.queue = new Discord.Collection()
const variables = require(`./variables/variables.json`)

//!===================
const search = require('./commands/search/search');
const search_modal = require('./commands/search/search_modal');
const search_modal_submit = require('./commands/search/search_modal_submit');
//!===================


client.once('ready', () => {
    console.log('Je suis en ligne !')

        client.user.setStatus("dnd");
        client.user.setActivity('/help - ProtonDev', { type: 'WATCHING' });


//*==================
search(client)
search_modal(client)
search_modal_submit(client)

//*====================================================================

//const channels = ""//ID CHANNEL ID
//client.channels.cache.get(channels).send(`**▸ Reboot !**`)
//!=====================================================================
})

client.on('voiceStateUpdate', (old, New) => {
    if (old.id !== client.user.id) return
    if (old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})

//!=====================================================================



client.login(variables.token)