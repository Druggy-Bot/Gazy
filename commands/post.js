const Discord = require("discord.js");
module.exports.run = async (client, message, args, args1) => {
    let embed = new Discord.MessageEmbed()
if(args[0]){
    embed.setTitle(args[0])
}
if(args[1]){
    embed.setColor(args[1])
}
if(args[2]){
    const channel = client.channels.cache.get(args[2]);
    channel.send(embed)
}

if(!args[0]) return message.channel.send("**Please add a title.**")
if(!args[1]) return message.channel.send("**Please add a color.** (Hex code supported)")
if(!args[2]) return message.channel.send("**Please add a channel id.**")
}
module.exports.help = {
    name: "post"
}
