const hastebin = require('hastebin-gen');

exports.run = (bot, message, args) => {

     let haste = args.slice(0).join(" ")
     let type = args.slice(1).join(" ")

     if (!args[0]) { return message.channel.send("**You must paste some code to put in hastebin.** `ium hastebing <code>`") }

     hastebin(haste).then(r => {
          message.channel.send("Ive posted your code on hastebin! " + r);
        }).catch(console.error);
     message.delete();

}


module.exports.help = {
    name: "hastebin"
  }
