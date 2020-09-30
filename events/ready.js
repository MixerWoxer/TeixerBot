const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`${client.user.username} joined !`);
  client.user.setStatus("idle");
  client.user.setActivity(`wx!help | ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Adet kullanıcı ` + client.guilds.size + ` Adet sunucuyu`, { type: "WATCHING"});
};
