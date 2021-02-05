const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (client, message, args, args1) => {
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to do this.");
	let target = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!target) return message.channel.send("Please provide a valid mention.");

	if(!target.bannable) return message.channel.send("I cannot ban this user.");
    let time = args[1]
	let reason = args.slice(2).join(' ')

if(!time) return message.channel.send("Please add a ban time.")

      let wanr = new Discord.MessageEmbed()
    .setTitle("Banned")
    .addField("Server: ", message.guild.name)
    .addField("Moderator: ", message.author.tag)
    .addField("Reason: ", reason)
    .addField("Time: ", time)
    

  let wanr2 = new Discord.MessageEmbed()
    .setTitle("Banned")
    .addField("Server: ", message.guild.name)
    .addField("Moderator: ", message.author.tag)
    .addField("Reason: ", reason)
    .addField("User: ", target)
    .addField("Time: ", time)
if(ms(time)){
	
target.send(wanr)
.then(() => {
	try {
	target.ban({reason});
		message.channel.send(wanr2);
	} catch(e) {
		message.channel.send(`Ban failed: ${e.message}`)
	}
})
    setTimeout(function(){
          message.guild.fetchBans().then( bans => {
     
               const embed = new Discord.MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));
embed.setTitle(`Successfully Unbanned ${target}`)
                    .setColor('#00ff00')
                    .addField('User ID', target.id, true)
                    .addField('user Tag', target, true)
                    .addField('Banned Reason', reason!= null ? reason : 'no reason')
            const user = bans.find(ban => ban.user.id === target.id )
                message.guild.members.unban(user.user.id).then(() => message.channel.send(embed))
          })
    }, ms(time))
}
}

module.exports.help = {
    name: "tempban"
}