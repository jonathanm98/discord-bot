const {SlashCommandBuilder} = require('discord.js');
const { generateDependencyReport } = require('@discordjs/voice');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription("Lance une musique dans le salon local de l'utilisateur"),
    async execute(interaction) {
        console.log(generateDependencyReport());
        return interaction.reply('Pong!');
    },
}