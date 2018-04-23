const Discord = require("discord.js");
const botconfig = require("../botconfig");
exports.run = async (bot, message, args) => {

    let inline = true
    let resence = true

    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
      }

    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author;

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#000000")
                .addField("Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "None"}`, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "User currently not playing anything"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "User has no roles"}`, true)
                .addField("Joined Discord", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()

            message.channel.send(embed);
}


module.exports.help = {
    name: "user"
  }
