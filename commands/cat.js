const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {

  request('http://edgecats.net/random', function (error, response, body) {
  if (!error && response.statusCode == 200) {
      return message.channel.send(body);
    }
});

}


module.exports.help = {
    name: "nick"
}
