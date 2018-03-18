

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("**You don't have premmsions to do that.**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**User not found.**");
  let role = args.join(" ");
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role not found.");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`<@${rMember.id}> has lost the role ${gRole.name}`)

  message.delete();

}