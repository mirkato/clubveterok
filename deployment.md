# Руководство по развертыванию проекта ClubVeterok на виртуальном сервере

## Описание проекта

ClubVeterok - это веб-приложение на React с использованием TypeScript, Vite и TailwindCSS. Проект использует современные версии библиотек и инструментов для разработки.

## Требования к серверному окружению

### Версии программного обеспечения

- **Node.js**: v20.x (рекомендуется LTS версия)
- **npm**: v10.x или выше
- **Ubuntu**: 20.04 LTS или выше (рекомендуется)

### Зависимости проекта

Проект использует следующие основные зависимости:
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.10.1
- lucide-react: ^0.556.0
- react-icons: ^5.5.0

Основные инструменты разработки:
- typescript: ~5.9.3
- vite: ^7.2.4
- tailwindcss: ^3.4.18
- @vitejs/plugin-react: ^5.1.1

## Подготовка виртуального сервера

### 1. Обновление системы

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Установка Node.js и npm

Рекомендуется использовать Node Version Manager (nvm) для установки и управления версиями Node.js:

```bash
# Установка nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Перезагрузка конфигурации shell
source ~/.bashrc

# Установка рекомендуемой версии Node.js (LTS)
nvm install 20
nvm use 20
nvm alias default 20

# Проверка установленных версий
node --version
npm --version
```

### 3. Установка дополнительных инструментов

```bash
# Установка Git
sudo apt install git -y

# Установка nginx (для веб-сервера)
sudo apt install nginx -y

# Установка PM2 (для управления процессами)
npm install -g pm2
```

## Развертывание проекта

### 1. Клонирование репозитория

```bash
# Переход в домашнюю директорию
cd ~

# Клонирование проекта
git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ> clubveterok

# Переход в директорию проекта
cd clubveterok
```

### 2. Установка зависимостей

```bash
# Установка зависимостей проекта
npm install
```

### 3. Сборка проекта

```bash
# Сборка проекта для продакшена
npm run build
```

После выполнения команды сборки, готовые файлы будут находиться в директории `dist`.

### 4. Настройка веб-сервера (nginx)

Создайте конфигурационный файл для nginx:

```bash
sudo nano /etc/nginx/sites-available/clubveterok
```

Добавьте следующую конфигурацию:

```nginx
server {
    listen 80;
    server_name ваш_домен.com; # Замените на ваш домен или IP-адрес сервера

    location / {
        root /home/ваш_пользователь/clubveterok/dist;
        index index.html;
        try_files $uri $uri/ =404;
    }

    # Дополнительные настройки безопасности
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

Активируйте сайт:

```bash
# Создание символической ссылки
sudo ln -s /etc/nginx/sites-available/clubveterok /etc/nginx/sites-enabled/

# Проверка конфигурации nginx
sudo nginx -t

# Перезагрузка nginx
sudo systemctl reload nginx
```

### 5. Настройка HTTPS (опционально, но рекомендуется)

Для настройки HTTPS можно использовать Let's Encrypt и Certbot:

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение SSL-сертификата
sudo certbot --nginx -d ваш_домен.com
```

Следуйте инструкциям в терминале для завершения настройки SSL-сертификата.

## Управление приложением

### Использование PM2 для управления процессами (альтернативный способ)

Если вы хотите использовать PM2 для обслуживания приложения:

1. Установите зависимости serve глобально:
```bash
npm install -g serve
```

2. Запустите приложение с помощью PM2:
```bash
pm2 serve dist 3000 --spa
```

3. Настройте автозапуск PM2:
```bash
pm2 startup
pm2 save
```

4. Обновите конфигурацию nginx для перенаправления на порт 3000:
```nginx
server {
    listen 80;
    server_name ваш_домен.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Обновление приложения

Для обновления приложения до новой версии:

```bash
# Переход в директорию проекта
cd ~/clubveterok

# Получение последних изменений
git pull

# Установка обновленных зависимостей
npm install

# Сборка проекта
npm run build

# Перезапуск приложения (если используется PM2)
pm2 reload all

# Перезагрузка nginx (если необходимо)
sudo systemctl reload nginx
```

## Решение распространенных проблем

### Проблемы с версиями Node.js

Если возникают проблемы с версиями Node.js:

```bash
# Проверка текущей версии
node --version

# Переключение на нужную версию (если установлена через nvm)
nvm use 20

# Установка нужной версии
nvm install 20
```

### Проблемы с зависимостями

Если при установке зависимостей возникают ошибки:

```bash
# Очистка кэша npm
npm cache clean --force

# Удаление node_modules и package-lock.json
rm -rf node_modules package-lock.json

# Переустановка зависимостей
npm install
```

### Проблемы с nginx

Проверка статуса nginx:

```bash
sudo systemctl status nginx
```

Проверка конфигурации:

```bash
sudo nginx -t
```

Просмотр логов:

```bash
sudo tail -f /var/log/nginx/error.log
```

## Полезные команды

- Проверка версии Node.js: `node --version`
- Проверка версии npm: `npm --version`
- Сборка проекта: `npm run build`
- Запуск в режиме разработки: `npm run dev`
- Проверка статуса nginx: `sudo systemctl status nginx`
- Перезагрузка nginx: `sudo systemctl reload nginx`
- Просмотр логов PM2: `pm2 logs`

## Контакты поддержки

При возникновении проблем с развертыванием обращайтесь к документации проекта или к команде разработчиков.