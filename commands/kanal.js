const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "kanal",
    aliases: ["kanal","kanal","kanal"],
    description: "kanal komudu",
    usage: "wx!kanal",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(message.author.username)
            .setThumbnail(message.author.avatarURL)
            .addField("Kanal Komutu Bilgisi", stripIndents`- Kanal Sayısı:** ${message.guild.channels.size}**

            - Kanalı silmek için > mx!kanalsil (KanalAdı)
            - Kanal oluşturmak için > mx!kanaloluştur (KanalAdı)

            **- Daha fazla bilgi için mx!yardım**`);

        message.channel.send(embed);
        }
    }