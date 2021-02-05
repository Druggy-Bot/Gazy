const Discord = require("discord.js");
module.exports.run = async (client, message, args, args1) => {
  message.channel.send(`${args1} \n \n -**${message.author.tag}**`)
}
module.exports.help = {
    name: "say"
}