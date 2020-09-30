const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "çekiliş",
    aliases: ["çekiliş","çekiliş","çekiliş"],
    description: "çekiliş komudu",
    usage: "wx!çekiliş",
    ownerOnly: false,
    run: function(message,args,client) {
    const çekiliş = new RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Çekiliş Hakkında Bilgiler", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan (2):`, `<@${message.guild.members.random().id}>`, true)
    .setColor("ORANGE")
    .setDescription('')
      message.react('617750006862184493')
    return message.channel.sendEmbed(çekiliş);

    
}
}