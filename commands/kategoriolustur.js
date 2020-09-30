const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "kategori",
    aliases: ["kategori","kategori"],
    description: "kategori komudu",
    usage: "wx!kategori",
    ownerOnly: false,
    run: async (message,args,client) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild; 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(':grey_exclamation: Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Gerek'); 
    if (kanal.length < 1) return message.channel.send(':grey_exclamation: Oluşturmak İstediğin Kategorinin Adını Yazmalısın'); message.delete(); guild.createChannel(kanal, 'category'); 
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .addField("Kanal Komutu Bilgisi", stripIndents`- Oluşturulan kategori:** ${kanal}**

        - Kategori oluşturan kişi: ${message.author.username}
        **- Daha fazla bilgi için mx!yardım**`);

    message.channel.send(embed);
    }
    }
