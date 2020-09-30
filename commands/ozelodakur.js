const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "özelodakur",
    aliases: ["özel-oda-kur","özelodakur"],
    description: "özeloda komudu",
    usage: "wx!özeloda",
    ownerOnly: false,
    run: async (message,args,client) => {
    let guild = message.guild; 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(':grey_exclamation: Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Gerek'); 
    message.reply('Kanal oluşturuluyor...'); message.delete(); guild.createChannel('2 Kişilik Oda', 'voice'); 
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .addField("Özel Oda", stripIndents`

        - Kanalı oluşturan kişi: ${message.author.username}

        **- Daha fazla bilgi için mx!yardım**`);

    message.channel.send(embed);
}
    }

