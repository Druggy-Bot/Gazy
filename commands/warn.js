const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (client, message, args, args1) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("No permission")
    .setColor("ff1c1c")
    .setDescription("You do not have permission to do this.")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed);
	let target = message.mentions.members.first()
if (!target){
const embed2 = new Discord.MessageEmbed()
     .setTitle("Warn failed.")
     .setColor("ff1c1c")
     .setDescription("You did not set a user.")
     message.channel.send(embed2);
} else{
       const embed3 = new Discord.MessageEmbed()
     .setTitle("Warn failed.")
     .setColor("ff1c1c")
     .setDescription("You can't warn a ADMINISTRATOR")
         if(target.hasPermission("ADMINISTRATOR")) return message.channel.send(embed3)
} 

if(target){
const embed4 = new Discord.MessageEmbed()
     .setTitle("Succesfully warned!")
     .setColor("1fff10")
     .setDescription(`Warned ${target}`)
     message.channel.send(embed4)
}
}
module.exports.help = {
    name: "warn"
}    