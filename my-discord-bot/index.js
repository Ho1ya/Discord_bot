require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Храним команды и язык
client.commands = new Collection();
client.language = 'ru'; // язык по умолчанию

// Загружаем команды из папки commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  client.commands.set(command.data.name, command);
}

// Когда бот готов
client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Когда пользователь вызывает команду
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, client); // передаём клиент
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: '❌ Ошибка выполнения команды', flags: 1 << 6});
  }
});

client.login(process.env.TOKEN);
