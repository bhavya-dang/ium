const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let furry1 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Otakuthon_2014_%2814850728278%29.jpg/1200px-Otakuthon_2014_%2814850728278%29.jpg");

    let furry2 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("https://thenypost.files.wordpress.com/2016/05/furry.jpg?quality=90&strip=all");

    let furry3 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("http://hornet.fullcoll.edu/wp-content/uploads/2016/10/oc-furry.jpg");

    let furry4 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1494008933/articles/2017/04/13/neo-nazis-are-tearing-apart-the-furry-world/170413-weill-furry-fallout-tease_jg3tm8");

    let furry5 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("http://assets.nydailynews.com/polopoly_fs/1.3481158.1504908867!/img/httpImage/image.jpg_gen/derivatives/article_750/furries9n-2-web.jpg");

    let furry6 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("https://assets.change.org/photos/5/gj/ft/ZUGjFTlbowlfOJO-800x450-noPad.jpg?1504132078");

    let furry7 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("http://cdn.newsapi.com.au/image/v1/7e6732b470472a6ede9d7d896734cf0e");

    let furry8 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("http://hornet.fullcoll.edu/wp-content/uploads/2016/10/oc-furry-2.jpg");

    let furry9 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("https://www.bz-berlin.de/data/uploads/2014/08/furry_1408633315-768x432.jpg");

    let furry10 = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("http://s.newsweek.com/sites/www.newsweek.com/files/styles/feature/public/2017/11/20/fefurries01rtx1xlaz.jpg");

    let toastFurry = new Discord.RichEmbed()
    .setColor("#f953ff")
    .setTitle("Furry")
    .setImage("    https://i.gyazo.com/ab67008a001389085fca9b791d24337b.png");

    let furrys = [furry1, furry2, furry3, furry4, furry5, furry6, furry7, furry8, furry9, furry10, toastFurry]

    let furryR = Math.floor((Math.random() * furrys.length));

    message.channel.send(furrys[furryR])


}