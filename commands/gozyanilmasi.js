module.exports = {
    name: "gözyanılması",
    aliases: ["gözyanılması","gözyanılması","gözyanılması"],
    description: "gözyanılması komudu",
    usage: "wx!gözyanılması",
    ownerOnly: false,
    run: async (message,args,client) => {
    message.reply('Göz yanılması yükleniyor.').then(message => {
    var espriler = ['https://i.pinimg.com/originals/0c/dd/35/0cdd356d82484a92955f7159ecb7d253.gif','https://4.bp.blogspot.com/-RcuJfEjvEYo/Vnq6wZmNBkI/AAAAAAAAc7M/nksqbCwl8qM/s1600/donen_spiral_goz_yanilmasi.gif', 'https://i.pinimg.com/originals/ea/80/a7/ea80a707b2e64861569f24b6fb967a43.gif','https://i.pinimg.com/originals/5d/bc/9d/5dbc9d2e4709e25f227ea2efef06ca7c.gif','https://i.pinimg.com/originals/72/5a/26/725a262944060123c036231b0ba2a7ca.gif'];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
    });
    }
}
