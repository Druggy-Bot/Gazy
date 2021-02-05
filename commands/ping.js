const Discord = require("discord.js");
module.exports.run = async (client, message, args, args1) => {
        message.channel.send("Pinging...").then(m =>{
            var ping = client.ws.ping
 let count = 0;
    
            let embed = new Discord.MessageEmbed()
            .setAuthor(`My ping is ${ping} ms`)
            .setColor("C0C0C0")
            
            m.edit(embed)
            setInterval(() => {
               count++
    m.edit(`updated ${ping} ms ${count}`)
    m.edit(embed)
}, 2000)
})
}
module.exports.help = {
    name: "ping"
}