const Discord = require("discord.js");
const google = require("google-tts-api");
const ytdl = require('ytdl-core');

module.exports = {
    name: "joker",
    aliases: ["joker","joker","joker"],
    description: "joker komudu",
    usage: "wx!joker",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
    let mixer = message.content.slice(0).split(' ');

    let voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)
    let stream = ytdl('https://www.youtube.com/watch?v=VxXcvdB29x4&list=RDEMf1N0GwdIeXv_86hLNOPLEA&start_radio=1', { filter: 'audioonly' });

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