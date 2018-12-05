const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get(519630650051919873");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`welcome to the server`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
