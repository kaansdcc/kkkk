const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **!avatar** = Avatarınıza bakarsınız.  \n  **!yetkilerim** = Yetkilerini görürsün.    \n  **!sunucuresmi** = Sunucu resmini gösterir.  \n  **!ping** = Botun Pingine Bakarsın.  \n **!id** = Birisinin id'sine Bakarsın.  \n  **!botbilgi** = Bot istatistiklerini görürsünüz. \n **!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. \n **!davetlerim** = Davetlerinize bakarsınız \n **!davet-sıralaması** = Davet sıralamasına bakarsınız \n **!not** = Not alırsınız \n **!randompp** = Botun olduğu serverlardaki ppleri görürsünüz \n **!sunucu-bilgi** = Sunucu bilgisine bakarsınız \n **!havadurumu** = Hava durumuna bakarsınız")
.setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}