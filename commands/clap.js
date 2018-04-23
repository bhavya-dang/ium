const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("**I need some text to clapify.** `ium clap <sentence>`")
    message.channel.send(args.map(randomizeCase).join(':clap:'));
}

module.exports.help = {
    name: "clap"
}
