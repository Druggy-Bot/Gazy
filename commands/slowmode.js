const {  MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports.run = async (client, message, args, args1) => { 
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const embed = new MessageEmbed()
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));
 const embed2 = new MessageEmbed()
            embed2.setTitle('Slowmode Disabled')
                .setColor('#00ff00')
            return message.channel.setRateLimitPerUser(0)
            message.channel.send(embed2)

        }

        const time = ms(args[0]);

        if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21601) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6h').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

        embed.setTitle('Slowmode Enabled')
            .addField('Slowmode: ', args[0])
            .setColor('1fff10');

        message.channel.setRateLimitPerUser(time).then(m => m.send(embed));

    }

    module.exports.help = {
    name: "slowmode"
}

