const Discord = require('discord.js');
module.exports.run = async (client, message, args, args1) => {
 if (!message.member.permissions.has("MANAGE_MESSAGES")) 
            return message.channel.send(
                `You do not have correct permissions to do this action, ${message.author.username}` 
            );
        if (!args[0]) {
            return message.channel.send(`Please enter a amount 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new Discord.MessageEmbed()
            .setTitle(`Cleared by ${message.author.username}`)
            .setDescription(`successfully deleted ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
}

module.exports.help = {
    name: "clear",
    description: "Clear a chat i guess!"
}