const send = require('quick.hook');
const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

    let split = '|';

    if(!args[0]){

        const announceEmbed = new Discord.RichEmbed()
            .setColor("#000000")
            .setTitle('Information')
            .setDescription(`**Usage: \`\`\`** ium announce ${split} Title of Announcment ${split} Description of Announcment ${split} Color of Announcment\`\`\``);
    }

    return send(message.channel, announceEmbed,{
        name: `Announce Command`
    })

    args = args.join(' ').split(split);

    for (var i = 0; i < args.length; i++) args[i] = args[0].trim();

    if(args[2]) args[2] = parseInt(`0x${args[2]}`);

    let option = {
        title: args[0] || 'Announcment',
        message: args[1] || undefined,
        embedColor: args[2] || 0xffffff
    }

    const embed = new Discord.RichEmbed()
        .setColor(options.embedColor)
        .setTitle(options.title)

    if(options.message) embed.setDescription(options.message);

    send(message.channel, embed, {
        title: options.title,
        message: options.message
    })
}

