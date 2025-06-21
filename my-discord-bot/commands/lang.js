const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lang')
    .setDescription('Сменить язык сниппетов')
    .addStringOption(option =>
      option.setName('value')
        .setDescription('Выбери язык')
        .setRequired(true)
        .addChoices(
          { name: 'Русский', value: 'ru' },
          { name: 'English', value: 'en' }
        )
    ),

  async execute(interaction, client) {
    const lang = interaction.options.getString('value');
    client.language = lang;
    await interaction.reply(`✅ Язык установлен: ${lang === 'ru' ? 'Русский' : 'English'}`);
  }
};
