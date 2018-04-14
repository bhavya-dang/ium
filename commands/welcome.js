const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  message.channel.send("To setup welcome messages on this server, make a channel called: `ium-events`\nToo lazy to create the channel? Simply type `ium setup` and I will set up welcome messages up for you.");

}


module.exports.help = {
    name: "welcome"
}
