const google = require("google-tts-api");
const ytdl = require('ytdl-core');
const ayarlar = require('../settings.json')
const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "müslüm",
    aliases: ["müslüm","müslüm","müslüm"],
    description: "müslüm komudu",
    usage: "wx!müslüm",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
        let mixer = message.content.slice(0).split(' ');

        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)
        let stream = ytdl('https://www.youtube.com/watch?v=lYNMQBKDhwg&list=RDEMBzT5KYHr5cEwN-UROiXe3A&start_radio=1', { filter: 'audioonly' });

        google(`${mixer.slice(' ')}`, 'tr', 1).then(url => {
            message.member.voiceChannel.join().then(connection => {
                message.channel.send(`İyi dinlemeler kral, Umarım iyi geçer zamanın`)
                connection.playStream(stream).on("end", () => {
                    connection.disconnect();
                })
            })
        })

    }
}