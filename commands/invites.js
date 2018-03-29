const Discord = require('discord.js'),
    arraySort = require('array-sort'),
    table = require('table');

exports.run = async (bot, message, args, tools) => {

    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('***I dont have the proper permission to access server invites!***');
    });
        
    invites = invites.array();

    arraySort(invites, 'users', { reverse: true });

    let possibleInvites = [['User', 'User']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    });

    const embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle('Server Invites')
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``);

    message.channel.send(embed);
}