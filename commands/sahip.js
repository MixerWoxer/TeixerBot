const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "sahip",
    aliases: ["sahip","botsahibi","botsahip"],
    description: "sahip komudu",
    usage: "wx!sahip",
    ownerOnly: false,
    run: async (message,args,client) => {
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail('https://cdn.discordapp.com/avatars/526355594303504394/a_c2f39049d59e5d02fee2eb89b595fb61.gif')
            .addField("Bot Sahibi Bilgisi", stripIndents`
            - Discord: **Mixer#2005**
            - GitHub: **MixerWoxer**
            - Gerçek Ad: **Hacı Mert Gökhan**
            - Twitter: **Manlyisback**

            Im on my way

            `);

        message.channel.send(embed);
    }
}
