    const fs = require('fs');
module.exports = async (bot) => {
    fs.readdirSync('./commands').filter(f => f.endsWith('.js')).forEach(async file => {
        let command = require(`../commands/${file}.js`);
        if (command.name || typeof command.name !== "string") throw new TypeError(`Command ${file.sclice(0, file.length - 3)} must be a string!`);
        bot.commands.set(command.name, command)
        console.log(`${file} chargé avec succès!`)
    })
}