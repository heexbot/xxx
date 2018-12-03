const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("500838241784823814");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`__WELCOME TO DESERT__`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
