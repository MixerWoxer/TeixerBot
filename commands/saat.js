const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: "saat",
    aliases: ["saat","saat","saat"],
    description: "saat komudu",
    usage: "wx!saat",
    ownerOnly: false,
    run: async (message,args,client) => {


var tarih = [moment().format('DD-MM-YYYY | H:mm:ss')]
message.channel.send('Tarih/Saat ' + tarih)


    }
}
