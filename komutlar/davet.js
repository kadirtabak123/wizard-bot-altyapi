const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("� " + client.user.username + ' | Davet Linkleri')
.setDescription(`[Botu Sunucuna Eklemek ��in T�kla!](Botun Davet Linkini Yaz�n!)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini g�sterir.',
  usage: 'davet'
};