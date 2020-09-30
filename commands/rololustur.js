const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "rololuştur",
    aliases: ["rololuştur","rolyap"],
    description: "rololuştur komudu",
    usage: "wx!rololuştur",
    ownerOnly: false,
    run: async (message,args,client) => {
    let kanal = args[0];
    let renk = args.slice(1).join(' ');
    let guild = message.guild; 
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(':x: Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olman Gerek'); 
    if (kanal.length < 1) return message.reply('Kullanım; `mxd!rol (RolAdı) (İngilizce renk adı)`');
    message.guild.createRole({ 
        name: kanal,
        color: renk
        })
    const embed = new RichEmbed()
        .setColor(renk)
        .setTitle(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Rol Bilgisi", stripIndents`
        - Rol Adı: ${kanal}
        - Renk Türü: ${renk}

        **Uyarı**
        Lütfen rolun rengini ingilizce bir biçimde,
        Harf uygunluğu ile yazınız,Aksi takdirde Rütbe oluşur.
        Seçilen renk olmaz
        `);

    message.channel.send(embed);
    }
}

