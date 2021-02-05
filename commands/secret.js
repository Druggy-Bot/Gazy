const Discord = require("discord.js");
module.exports.run = async (client, message, args, args1) => {
       const msg2 = [`https://www.youtube.com/watch?v=yZM1LpefBzM`, `https://youtu.be/dQw4w9WgXcQ`, `https://www.youtube.com/watch?v=Tt7bzxurJ1I`]
    let random = Math.floor(Math.random() * 3);
      console.log(`This user [${message.author.tag}] got ${msg2[random]}`)
        let msg = new Discord.MessageEmbed()
        .setDescription(`[Click here](${msg2[random]})`)
        .setColor("C0C0C0")
      message.channel.send(msg)
}
module.exports.help = {
    name: "secret"
}