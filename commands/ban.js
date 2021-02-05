const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (client, message, args, args1) => {
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to do this.");
	let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	if(!target) return message.channel.send("Please provide a valid mention.");

	if(!target.bannable) return message.channel.send("I cannot ban this user.");
	let reason = args.slice(2).join(' ')

      let wanr = new Discord.MessageEmbed()
    .setTitle("Banned")
    .addField("Server: ", message.guild.name)
    .addField("Moderator: ", message.author.tag)
    .addField("Reason: ", reason)
    

  let wanr2 = new Discord.MessageEmbed()
    .setTitle("Banned")
    .addField("Server: ", message.guild.name)
    .addField("Moderator: ", message.author.tag)
    .addField("Reason: ", reason)
    .addField("User: ", target)


target.send(wanr)
.then(() => {
	try {
	target.ban({reason});
		message.channel.send(wanr2);
	} catch(e) {
		message.channel.send(`Ban failed: ${e.message}`)
	}
})

          message.guild.fetchBans().then( bans => {
            const user = bans.find(ban => ban.user.id === target.id )
                message.guild.members.unban(user.user.id)
          })

}

module.exports.help = {
    name: "ban"
}