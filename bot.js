const Discord = require("discord.js");
const client = new Discord.Client();


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("500838241784823814");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`*WELCOME TO DESERT*`), 4000)        

});


cient.login(process.env.BOT_TOKEN);
