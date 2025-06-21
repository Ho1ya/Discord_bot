const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hi')
    .setDescription('Приветсвтвие от бота'),

  async execute(interaction) {
    await interaction.reply('Hello, world!');
  }
};
