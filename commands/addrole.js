const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You don't have premmsions to do that!**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message.channel.send('**Mention a user, and type a role to give to the user.** `ium addrole <user> <role>`')
  if(!rMember) return message.channel.send("**User not found.** `ium addrole <user> <role>`");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**Specify a role!** `ium addrole <user> <role>`");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**Role not found.** `ium addrole <user> <role>`");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already has that role.");
  await(rMember.addRole(gRole.id));

  message.channel.send(`**${rMember}** has the role **${gRole.name}** now!`)
}

module.exports.help = {
  name: "addrole"
}
