# 💬 DiscBot — Educational Code Snippet Bot

**EN** | [🇷🇺 Русская версия ниже](#-discbot-обучающий-дискорд-бот)

A simple Discord bot that sends code snippets with clear explanations.  
Perfect for learning to code directly inside Discord.

---

## 🚀 Features

- `/hi` — simple greeting
- `/lang` — switch snippet language (English / Russian)
- `/code` — get educational code snippets (JavaScript, Python, C++, etc.)
- Uses slash commands
- Snippets stored in JSON for easy editing

---

## 🛠️ Tech Stack

- Node.js
- Discord.js v14
- dotenv
- JSON-based localization

---

## 📁 Project Structure

/commands # Slash commands
/snippets # Code snippets (en.json, ru.json)
/utils # Helper functions (e.g. normalizeLanguage)
/deploy-commands # Command registration script
index.js # Bot entry point


---

## ⚙️ Setup

1. Clone the repo:

```bash
git clone https://github.com/yourusername/discbot.git
cd discbot
npm install
```


## ⚙️Create .env file:

```bash
TOKEN=your_token_here
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id
```


## Deploy commands:

```bash
node deploy-commands/register.js
```


## 🚀Start the bot:

```bash
node index.js
```

🧠 Learn More
Snippets are stored in snippets/en.json and snippets/ru.json.
You can add more examples or expand supported languages easily.

📜 License
MIT

# **🇷🇺** DiscBot — обучающий Discord-бот

Простой и полезный Discord-бот, который присылает сниппеты кода с объяснением.
Подходит для начинающих разработчиков — можно учиться прямо в Discord.

- `/hi` — простое приветствие
- `/lang` — смена языка сниппетов (русский / английский)
- `/code` — сниппеты кода с объяснением (JavaScript, Python, C++, и др.)
- Сниппеты хранятся в JSON (легко редактировать)


🛠️ Стек технологий
Node.js
Discord.js v14
JSON как база данных

/commands        # Команды Discord
/snippets        # Сниппеты кода (ru.json, en.json)
/utils           # Утилиты (normalizeLanguage и т.д.)
/deploy-commands # Скрипт регистрации команд
index.js         # Запуск бота

# ⚙️ Как запустить
Клонируй репозиторий:

```bash
git clone https://github.com/yourusername/discbot.git
cd discbot
npm install
```

# Создай файл .env:
```bash
TOKEN=твой_токен
CLIENT_ID=айди_приложения
GUILD_ID=айди_тестового_сервера
```
# Зарегистрируй команды:
```bash 
node deploy-commands/register.js
```

# Запусти бота:
```bash 
node index.js
```

📌 Примечание
Все сниппеты хранятся в snippets/ru.json и snippets/en.json.
Можно легко добавлять новые примеры или языки программирования.

# 📜 Лицензия MIT

---

## ✅ Что дальше?

- Можем добавить Markdown-бейджи (на иконках: Node.js, License, Discord.js)
- Сделать GIF/видео превью, как бот работает
- Сделать автозапуск на `npm start`
