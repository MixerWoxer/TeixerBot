const Discord = require('discord.js');
const weather = require('weather-js');
const { orange } = require("color-name");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment');
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "hava",
    aliases: ["hava","hava","hava"],
    description: "hava komudu",
    usage: "wx!hava",
    ownerOnly: false,
    run: async (message,args,client) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (result === undefined) {
            const s = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Hava Durumu", stripIndents`
            
             Lütfen geçerli bir bölge adı giriniz

            `);
            message.channel.send(s);
        }
        var current = result[0].current;
        var location = result[0].location;    
        const embed = new RichEmbed()
        .setColor("ORANGE")
        .setTitle(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Hava Durumu", stripIndents`
        - Bölge: **${current.observationpoint}**,
        - Derece: **${current.temperature}**
        - Nem: **${current.humidity}%**
        - Zaman Dilimi: **UTC${location.timezone}**
        - Hissedilen Hava: **${current.feelslike}**
        
        Hava durumu **${message.author.username}** tarafından istendi`);
        message.channel.send(embed);
        })
    }
}