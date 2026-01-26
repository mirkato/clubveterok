// src/services/telegram-service.cjs
const TELEGRAM_BOT_TOKEN = '8475422452:AAHSwZbAU-E8NREmVFsoIPiLJ9C7f_9-vWU';
const TELEGRAM_CHAT_ID = '-5138101133';

const sendTryFreeToTelegram = async (formData) => {
  try {
    // Format the message for Telegram
    const message = `
🔔 *Новая заявка на пробное занятие*

👤 *Имя родителя:* ${formData.parent_name}
📞 *Телефон:* ${formData.parent_phone}
👶 *Имя и возраст ребёнка:* ${formData.child_name_age}
🎯 *Выбранное направление:* ${formData.program}
💬 *Комментарий:* ${formData.comment || '—'}
🌐 *Страница:* ${formData.page_url}

📅 *Дата заявки:* ${new Date().toLocaleString('ru-RU')}
    `;

    // Send message to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();
    
    if (!response.ok || !result.ok) {
      console.error('Failed to send message to Telegram:', result);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
};

const sendEventRegistrationToTelegram = async (formData) => {
  try {
    // Format selected workshops
    const selectedWorkshopDetails = formData.selectedWorkshops.map(id => {
      const workshop = formData.workshopDetails.find(w => w.id === id);
      return workshop ? `${workshop.emoji} ${workshop.time} - ${workshop.title}` : '';
    }).filter(Boolean).join('\n');

    // Format the message for Telegram
    const message = `
🎉 *Новая заявка на мероприятие*

🎂 *Мероприятие:* ${formData.eventTitle}

👤 *Имя родителя:* ${formData.parentName}
📞 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email || '—'}
👶 *Имя ребенка:* ${formData.childName}
🎈 *Возраст ребенка:* ${formData.childAge}

🎨 *Выбранные мастер-классы:*
${selectedWorkshopDetails || '—'}

💬 *Комментарии:* ${formData.comments || '—'}

📅 *Дата заявки:* ${new Date().toLocaleString('ru-RU')}
    `;

    // Send message to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();
    
    if (!response.ok || !result.ok) {
      console.error('Failed to send event registration to Telegram:', result);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending event registration to Telegram:', error);
    return false;
  }
};

module.exports = {
  sendTryFreeToTelegram,
  sendEventRegistrationToTelegram
};