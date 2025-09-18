const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('code')
    .setDescription('Показать сниппет Show snippet')
    .addStringOption(option =>
      option.setName('programming')
        .setDescription('Выбери язык')
        .setRequired(true)
        .addChoices(
          { name: 'JavaScript', value: 'JavaScript' },
          { name: 'Python', value: 'Python' },
          { name: 'C++', value: 'C++' },
          { name: 'Java', value: 'Java' },
          { name: 'Go', value: 'Go' },
          { name: 'Rust', value: 'Rust' },
        )
    ),

  async execute(interaction, client) {
    const programming = interaction.options.getString('programming');
    const lang = client.language || 'ru';
    const filePath = path.join(__dirname, `../snippets/${lang}.json`);
    const snippets = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const data = snippets[programming];
    if (!data) {
      await interaction.reply({ content: '❌ Такого сниппета нет.', flags: 1 << 6 });
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle(`📦 ${programming}`)
      .setDescription(`\`\`\`${data.language}\n${data.code}\n\`\`\``)
      .addFields({ name: '💡 Объяснение', value: data.explanation })
      .setColor('Blue');

    await interaction.reply({ embeds: [embed] });
  },
};

