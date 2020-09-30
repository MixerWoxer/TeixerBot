const Discord = require("discord.js");
const google = require("google-tts-api");
const ytdl = require('ytdl-core');

module.exports = {
    name: "patlawoxer",
    aliases: ["patlawoxer","patlawoxer","patlawoxer"],
    description: "patlawoxer komudu",
    usage: "wx!patlawoxer",
    ownerOnly: false,
    run: async (message,client) => {
        let mixer = message.content.slice(0).split(' ');
        message.channel.send('https://tenor.com/view/disco-cat-dokales-cat-disco-changing-colors-gif-17500253');
        let voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)
        let stream = ytdl('https://www.youtube.com/watch?v=H1Vnq_EihD8', { filter: 'audioonly' });
    
        google(`${mixer.slice(' ')}`, 'tr', 1).then(url => {
            message.member.voiceChannel.join().then(connection => {
                message.channel.send(`Patla bilader PIRRRRR`)
                connection.playStream(stream).on("end", () => {
                    connection.disconnect();
                })
            })
        })
    
    }
}