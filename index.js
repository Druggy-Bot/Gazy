//Function for even anything to work!
const Discord = require('discord.js');
const client = new Discord.Client()
const keepAlive = require("./server.js")
const fs = require("fs");
client.commands = new Discord.Collection()
//Notifys the owners of the bot being online!
client.on('ready', () => {
      client.user.setActivity( `Official Chill.Clan Bot ▪ Version ${process.env.VERSION}`);
    console.log(`${client.user.username} is ready `)
    console.log(`Official Chill.Clan Bot ▪ Version ${process.env.VERSION}`)
})



//Commands folder System 📂 
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("Commands not found.");
        return;
    };

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
    });
});
//Functions for commands to work!
client.on("message", async message => {
    if(message.channel.type == "dm") return; 
    if(message.author.bot) return;
//Things like the prefix and messageContent
    let prefix = ">"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
     let args1 = args.join(" ").toString();
//Command Player
      let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args,args1);
    if(message.content.indexOf(prefix) !== 0) return;
//Commands (not used but keep it!)


});


//ModLogs
client.on('messageDelete', async message => {
       let logs = message.channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `modlogs`)
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});

	const deletionLog = fetchedLogs.entries.first();
	const { executor, target } = deletionLog;
            //ModLogsEmbeds (Delete)
const unknow = new Discord.MessageEmbed()
 .setThumbnail(message.guild.iconURL({dynamic : true}))
.setTitle("Unknown Deletion")
.setColor("RED")
.setDescription(`A message by ${message.author.tag} was deleted, but we don't know by who.`)
//
const unknow2 = new Discord.MessageEmbed()
 .setThumbnail(message.guild.iconURL({dynamic : true}))
.setTitle("No logs found!")
.setColor("RED")
.setDescription(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`)
//
const unknow3 = new Discord.MessageEmbed()
 .setThumbnail(message.guild.iconURL({dynamic : true}))
.setTitle("Message Deleted!")
.setColor("RED")
.setDescription(`A message by ${message.author.tag} was deleted by ${executor.tag}.`)
//End Of Embeds
    if (!deletionLog) return logs.send(unknow2);
	if (target.id === message.author.id) {
		logs.send(unknow3);
	}	else {
		logs.send(unknow);
	}
});
client.on('channelCreate', async channel => {
       let logs = channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `modlogs`)
       let guild = channel.guild
               //ModLogsEmbeds (channel)
const unknow = new Discord.MessageEmbed()
  .setThumbnail(guild.iconURL({dynamic : true}))
.setTitle("Channel Created!")
.setColor("RED")
.setDescription(`Channel: ${channel.name} Was created`)
//End Of Embeds
    logs.send(unknow)
});

client.on('channelDelete', async channel => {
       let logs = channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `modlogs`)
              let guild = channel.guild
               //ModLogsEmbeds (channel)
const unknow2 = new Discord.MessageEmbed()
 .setThumbnail(guild.iconURL({dynamic : true}))
.setTitle("Channel Deleted!")
.setColor("RED")
.setDescription(`Channel: ${channel.name} Was Deleted`)

//End Of Embeds
    logs.send(unknow2)
});
    client.on('voiceStateUpdate', async (oldMember, newMember) => {
       let guild = oldMember.guild
          let logs = guild.channels.cache.find((channel) => channel.name.toLowerCase() === `modlogs`)
       let newUserChannel = newMember.channel;
       let oldUserChannel = oldMember.channel;
      //ModLogsEmbeds (voice)
const unknow3 = new Discord.MessageEmbed()
 .setThumbnail(guild.iconURL({dynamic : true}))
.setTitle("Voice Joined!")
.setColor("RED")
.setDescription(`${newMember.username} joined ${newUserChannel}`)
const unknow4 = new Discord.MessageEmbed()
 .setThumbnail(guild.iconURL({dynamic : true}))
.setTitle("Voice Left!")
.setColor("RED")
.setDescription(`${oldMember.username} left ${oldUserChannel}`)
//End Of Embeds


       if(newUserChannel) 
       { 
      await     logs.send(unknow3)
       }
       else{
          
      await     logs.send(unknow4)
       }
    });
   

   client.on('guildBanAdd', async (guild, user) => {

        let logs = guild.channels.cache.find((channel) => channel.name.toLowerCase() === `modlogs`)
       const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	
	const banLog = fetchedLogs.entries.first();




	const { executor, target } = banLog;

        //ModLogsEmbeds (Remove)
const unknow = new Discord.MessageEmbed()
.setTitle("Unknown Ban")
.setThumbnail(guild.iconURL({dynamic : true}))
.setColor("RED")
.setDescription(`${user.tag} was banned from ${guild.name} but no audit log could be found.`)
//
const unknow2 = new Discord.MessageEmbed()
.setTitle("BAN!")
.setThumbnail(guild.iconURL({dynamic : true}))
.setColor("RED")
.setDescription(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`)
//
const unknow3 = new Discord.MessageEmbed()
.setTitle("?")
.setThumbnail(guild.iconURL({dynamic : true}))
.setColor("RED")
.setDescription(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`)
//
const unknow4 = new Discord.MessageEmbed()
.setTitle("Banned")
.setThumbnail(guild.iconURL({dynamic : true}))
.setColor("RED")
.setDescription(`You have been banned!`)
//End Of Embeds
	if (!banLog) return logs.send(unknow);
	if (target.id === user.id) {
    target.send(unknow4)
     logs.send(unknow2)
	} else {
		logs.send(unknow3)

	}
   })
  
//Runner/Starter/server
keepAlive()
client.login("TOKEN")