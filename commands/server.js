const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const verlvl = {
        0: "None",
        1: "Low",
        2: "Medium",
        3: "(╯°□°）╯︵ ┻━┻",
        4: "(ノಠ益ಠ)ノ彡┻━┻"
      }

        let inline = true
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()

        .setColor("#FFFFFF")
        .setThumbnail(sicon)
        .setAuthor(message.guild.name)
        .addField("Users", `${message.guild.memberCount}`, inline)
        .addField("Owner", message.guild.owner, inline)
        .addField("Region", message.guild.region, inline)
        .addField("Verification Level", verlvl[message.guild.verificationLevel],inline)
        .addField("Roles", message.guild.roles.size, inline)
        .addField("Channels", message.guild.channels.size, inline)
        .addField(`Server Created`, `${message.guild.createdAt}`)
        .addField("You Joined", message.member.joinedAt)
        .setFooter(`ID - ${message.guild.id}`);

        message.channel.send(serverembed);
}

module.exports.help = {
  name: "server"
}
