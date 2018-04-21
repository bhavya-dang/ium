const yoMamma = require('yo-mamma').default;

module.exports.run = (bot, message, args) => {

    let joke = yoMamma();
    message.channel.send(joke)
}

module.exports.help = {
    name: "yomama"
}
