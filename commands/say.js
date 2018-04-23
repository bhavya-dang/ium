module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("**Provide some text for me to say.** `ium say <text>`");
    const sayMessage = args.join(" ");

    //message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);

}

/** module.export.config = {
    //name: ["say", "talk", "repeat"]
}
*/

module.exports.help = {
    name: "say"
  }
