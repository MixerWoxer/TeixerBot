const Discord = require("discord.js");
const google = require("google-tts-api");

module.exports = {
    name: "konuşwoxer",
    aliases: ["konuşwoxer","konuşwoxer","konuşwoxer"],
    description: "konuşwoxer komudu",
    usage: "wx!konuşwoxer",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
    let mixer = message.content.slice(0).split(' ');

    let voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)


    google(`${mixer.slice(' ')}`, 'tr', 1).then(url => {
        message.member.voiceChannel.join().then(connection => {
            message.channel.send(`**${mixer.slice(' ')}** adlı mesaj sesli olarak söyleniyor`)
            connection.playStream(url).on("end", () => {
                connection.disconnect();
            })
        })
    })

}
}